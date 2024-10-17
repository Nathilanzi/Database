// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Firestore } from 'firebase/firestore'; // Import Firestore instance
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [youthData, setYouthData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const storage = getStorage();

  // Fetch all data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(Firestore, 'youthProfiles'));
        const dataPromises = querySnapshot.docs.map(async (doc) => {
          const profile = doc.data();
          
          // Generate a download URL for the CV from Firebase Storage
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

    fetchData();
  }, []);

  const handleLogout = () => {
    // Logout logic here
    navigate('/');
  };

  if (loading) return <p>Loading data...</p>;

  return (
    <div>
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
