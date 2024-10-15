// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { db, storage } from '../../Firebase'; // Ensure the path is correct
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
    physicalAddress: '',
    communityChief: '',
    cvLink: '',
    cvFile: null,
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) setFormData(savedData);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setFormData({ ...formData, cvFile: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload the CV file to Firebase Storage if it exists
    let cvLink = '';
    if (formData.cvFile) {
      const storageRef = ref(storage, `cvs/${formData.cvFile.name}`);
      await uploadBytes(storageRef, formData.cvFile);
      cvLink = `cvs/${formData.cvFile.name}`; // Store the link or path for the file
    }

    // Save the form data in Firestore
    try {
      await addDoc(collection(db, 'users'), {
        name: formData.name,
        surname: formData.surname,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        physicalAddress: formData.physicalAddress,
        communityChief: formData.communityChief,
        cvLink, // Save the link to the CV file
      });
      alert('Data saved successfully!');

      // Reset form after submission
      setFormData({
        name: '',
        surname: '',
        phoneNumber: '',
        email: '',
        physicalAddress: '',
        communityChief: '',
        cvLink: '',
        cvFile: null,
      });
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname" required />
      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
      <input type="text" name="physicalAddress" value={formData.physicalAddress} onChange={handleChange} placeholder="Physical Address" required />
      <input type="text" name="communityChief" value={formData.communityChief} onChange={handleChange} placeholder="Community Chief" required />
      <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Home;
