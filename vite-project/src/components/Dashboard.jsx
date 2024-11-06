// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase Auth

const Dashboard = () => {
  const [youthData, setYouthData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const db = getFirestore();
  const storage = getStorage();
  const auth = getAuth();

  // Check if user is authenticated before fetching data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.warn('User is not logged in. Redirecting to login.');
        navigate('/login'); // Redirect to login if user is not authenticated
      } else {
        fetchData(); // Fetch data if user is logged in
      }
    });

    // Cleanup subscription to avoid memory leaks
    return () => unsubscribe();
  }, [auth, navigate]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));

      if (querySnapshot.empty) {
        console.warn('No documents found in the collection.');
      }

      const dataPromises = querySnapshot.docs.map(async (doc) => {
        const profile = doc.data();
        const cvUrl = profile.cvFileName
          ? await getDownloadURL(ref(storage, `cvs/${profile.cvFileName}`))
          : null;

        return { ...profile, cvUrl };
      });

      const data = await Promise.all(dataPromises);
      setYouthData(data);
    } catch (error) {
      console.error('Error fetching youth data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => navigate('/')); // Log out and redirect to home
  };

  if (loading) return <p>Loading data...</p>;

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
