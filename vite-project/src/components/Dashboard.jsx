// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
  const [youthData, setYouthData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Track errors
  const navigate = useNavigate();
  const db = getFirestore();
  const storage = getStorage();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.warn('User is not logged in. Redirecting to login.');
        navigate('/login'); // Redirect if not authenticated
      } else {
        fetchData(); // Fetch data if authenticated
      }
    });

    return () => unsubscribe(); // Clean up subscription
  }, [auth, navigate]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users' ));

      if (querySnapshot.empty) {
        console.warn('No documents found in the collection.');
        setYouthData([]); // Set empty data to avoid undefined errors
        setLoading(false);
        return;
      }

      // Use Promise.all to resolve file URLs asynchronously
      const dataPromises = querySnapshot.docs.map(async (doc) => {
        const profile = doc.data();
        
        try {
          // Attempt to get the CV download URL if available
          const cvUrl = profile.cvLink
            ? await getDownloadURL(ref(storage, `${profile.cvLink}`))
            : null;

          return { ...profile, cvUrl };
        } catch (err) {
          console.error(`Error fetching CV for ${profile.name}:`, err);
          return { ...profile, cvUrl: null }; // Continue gracefully
        }
      });

      const data = await Promise.all(dataPromises);
      setYouthData(data); // Set the resolved data
    } catch (err) {
      console.error('Error fetching youth data:', err);
      setError('Failed to load youth data. Please try again later.');
    } finally {
      setLoading(false); // Ensure loading state is stopped
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => navigate('/')); // Log out and redirect
  };

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>; // Display error if any

  return (
    <div className="mt-20">
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout}>Log Out</button>

      {youthData.length === 0 ? (
        <p>No youth profiles available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Physical Address</th>
              <th>Community Chief</th>
              <th>CV</th>
            </tr>
          </thead>
          <tbody>
            {youthData.map((profile, index) => (
              <tr key={index}>
                <td>{`${profile.name} ${profile.surname}`}</td>
                <td>{profile.email}</td>
                <td>{profile.phoneNumber}</td>
                <td>{profile.physicalAddress}</td>
                <td>{profile.communityChief}</td>
                <td>
                  {profile.cvUrl ? (
                    <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
                      View CV
                    </a>
                  ) : (
                    'No CV uploaded'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
