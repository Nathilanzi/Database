import { useState, useEffect } from "react";
import { db, storage } from "../../Firebase"; // Ensure the path is correct
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    physicalAddress: "",
    communityChief: "",
    cvLink: "",
    cvFile: null,
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData) setFormData(savedData);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, cvFile: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let cvLink = "";
    if (formData.cvFile) {
      const storageRef = ref(storage, `cvs/${formData.cvFile.name}`);
      await uploadBytes(storageRef, formData.cvFile);
      cvLink = `cvs/${formData.cvFile.name}`;
    }

    try {
      await addDoc(collection(db, "users"), {
        name: formData.name,
        surname: formData.surname,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        physicalAddress: formData.physicalAddress,
        communityChief: formData.communityChief,
        cvLink,
      });
      alert("Data saved successfully!");

      setFormData({
        name: "",
        surname: "",
        phoneNumber: "",
        email: "",
        physicalAddress: "",
        communityChief: "",
        cvLink: "",
        cvFile: null,
      });
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Surname"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="physicalAddress"
              value={formData.physicalAddress}
              onChange={handleChange}
              placeholder="Physical Address"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="communityChief"
              value={formData.communityChief}
              onChange={handleChange}
              placeholder="Community Chief"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload CV
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
