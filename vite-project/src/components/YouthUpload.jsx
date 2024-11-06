import { useState, useEffect } from "react";
import { db, storage } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { Alert} from "./UI/Alert"
import {AlertDescription} from "./UI/AlertDescription"
import {AlertDialog} from "./UI/AlertDialog"
import {AlertDialogAction} from "./UI/AlertDialogAction"
import {AlertTitle} from "./UI/AlertTitle"

const YouthUpload = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    physicalAddress: "",
    communityChief: "",
    education: "",
    employmentStatus: "",
    cvLink: "",
    cvFile: null,
  });

  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData) setFormData(savedData);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, cvFile: e.target.files[0] });

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let cvLink = "";
    if (formData.cvFile) {
      const storageRef = ref(storage, `cvs/${formData.cvFile.name}`);
      await uploadBytes(storageRef, formData.cvFile);
      cvLink = `cvs/${formData.cvFile.name}`;
    }

    try {

      setShowSuccessPopup(true);
      await addDoc(collection(db, "users"), {
        ...formData,
        skills,
        cvLink,
      });

      setFormData({
        name: "",
        surname: "",
        phoneNumber: "",
        email: "",
        physicalAddress: "",
        communityChief: "",
        education: "",
        employmentStatus: "",
        cvLink: "",
        cvFile: null,
      });
      setSkills([]);

      // Optionally, navigate to another page after a delay
    setTimeout(() => {
      navigate('/');
    }, 2000); // 2 seconds delay before navigating
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };

  const inputClasses = "w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fbab01] focus:border-[#fbab01] transition-colors duration-200";
  const labelClasses = "block text-sm font-medium text-[#683800] mb-1";

  return (
    <div className="mt-20 min-h-screen flex items-center justify-center bg-[#f5f5f5]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full my-8 border border-[#683800]/20">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#683800]">
          Registration Form
        </h2>
        <p className="text-[#683800]/80 text-sm mb-6 text-center">
          Please fill in all required fields marked with <span className="text-[#fbab01]">*</span>
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={labelClasses}>Name <span className="text-[#fbab01]">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Surname <span className="text-[#fbab01]">*</span></label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Phone Number <span className="text-[#fbab01]">*</span></label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Email Address <span className="text-[#fbab01]">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Physical Address <span className="text-[#fbab01]">*</span></label>
            <input
              type="text"
              name="physicalAddress"
              value={formData.physicalAddress}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Community Chief <span className="text-[#fbab01]">*</span></label>
            <input
              type="text"
              name="communityChief"
              value={formData.communityChief}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Education <span className="text-[#fbab01]">*</span></label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Employment Status <span className="text-[#fbab01]">*</span></label>
            <select
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              required
              className={inputClasses}
            >
              <option value="">Select Employment Status</option>
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Student">Student</option>
            </select>
          </div>

          <div>
            <label className={labelClasses}>Skills</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="Add a skill"
                className={inputClasses}
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-2 bg-[#456703] text-white rounded-md hover:bg-[#557714] focus:outline-none transition duration-300"
              >
                Add
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#034078] text-white px-3 py-1 rounded-full flex items-center text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="ml-2 text-white hover:text-red-300 focus:outline-none"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClasses}>Upload CV <span className="text-[#fbab01]">*</span></label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
              className="w-full text-sm text-[#683800] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 
                         file:text-sm file:font-semibold file:bg-[#456703] file:text-white hover:file:bg-[#557714] 
                         cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#456703] text-white py-3 px-4 rounded-md hover:bg-[#557714] focus:outline-none 
                     focus:ring-2 focus:ring-[#456703] focus:ring-offset-2 transition duration-300 mt-6"
          >
            Submit Registration
          </button>
        </form>
      </div>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <Alert>
              <AlertTitle className="text-2xl font-semibold text-[#683800] mb-2">
                Registration Successful!
              </AlertTitle>
              <AlertDescription className="text-[#683800]">
                Thank you for submitting your registration. We will review your information and get back to you soon.
              </AlertDescription>
              <div className="mt-4 flex justify-end space-x-2">
                <AlertDialogAction
                  onClick={() => navigate('/')}
                  className="bg-[#456703] text-white py-2 px-4 rounded-md hover:bg-[#557714] focus:outline-none transition duration-300"
                >
                  Back to Home
                </AlertDialogAction>
              </div>
            </Alert>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouthUpload;