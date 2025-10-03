import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Form = () => {
  const navigate = useNavigate();
  
  const [formData, setformData] = useState({
    name: '',
    email: '',
    year: '',
    branch: '',
    section: '',
    phone: '',
    apply: '',
    yourself: '',
    whyjoin: '',
    experience: '',
    vertical: '',
    techvert: '',
    cultvert: '',
    socivert: ''
  });

  // Dropdown options
  const years = ["1", "2"];
  const branches = ["CSE", "CSAI", "IT", "AIDS", "ECE", "EE" ,"ME", "CE"];
  const applies = ["Apply for Student Council", "Apply for Clubs", "Apply for Both"];
  const verticals = ["Graphic Designing", "Social & Creation Cell", "Technical", "Cultural", "Operations", "Media"];
  const TechVert = ["XANANOIDS", "MOONRIDERS"];
  const CultVert = ["FACE & FOOTLIGHT", "ADAA", "ENIGMA", "KHALAS", "ATRANGI", "AVYAAN", "FOTOGRAFREAKS"];
  const SociVert = ["SUHASINI", "SOCH", "ZARURAT", "AASHAYEIN"];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/form', formData);
      if (response.status === 200) {
        navigate('/');
        alert("Response recorded successfully");
      }
    } catch (e) {
      console.log("Something went wrong", e);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Student Council Application Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            type="text" 
            placeholder="Full Name" 
            name="name" 
            onChange={handleChange} 
            value={formData.name} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            onChange={handleChange} 
            value={formData.email} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select 
            name="year" 
            value={formData.year} 
            onChange={handleChange} 
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <select 
            name="branch" 
            value={formData.branch} 
            onChange={handleChange} 
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Branch</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
          <input 
            type="text" 
            placeholder="Section" 
            name="section" 
            onChange={handleChange} 
            value={formData.section} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input 
            type="number" 
            placeholder="Phone number" 
            name="phone" 
            onChange={handleChange} 
            value={formData.phone} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select 
            name="apply" 
            value={formData.apply} 
            onChange={handleChange} 
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Applying for</option>
            {applies.map((apply) => (
              <option key={apply} value={apply}>{apply}</option>
            ))}
          </select>
          <textarea 
            placeholder="Describe yourself in 50 words" 
            name="yourself" 
            onChange={handleChange} 
            value={formData.yourself} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea 
            placeholder="Why do you want to join Student Council" 
            name="whyjoin" 
            onChange={handleChange} 
            value={formData.whyjoin} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea 
            placeholder="Any prior experience" 
            name="experience" 
            onChange={handleChange} 
            value={formData.experience} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select 
            name="vertical" 
            value={formData.vertical} 
            onChange={handleChange} 
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Vertical you want to join</option>
            {verticals.map((vertical) => (
              <option key={vertical} value={vertical}>{vertical}</option>
            ))}
          </select>
          <select 
            name="techvert" 
            value={formData.techvert} 
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Technical Vertical you want to join</option>
            {TechVert.map((tech) => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
          <select 
            name="cultvert" 
            value={formData.cultvert} 
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Cultural Vertical you want to join</option>
            {CultVert.map((cult) => (
              <option key={cult} value={cult}>{cult}</option>
            ))}
          </select>
          <select 
            name="socivert" 
            value={formData.socivert} 
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Social Vertical you want to join</option>
            {SociVert.map((soci) => (
              <option key={soci} value={soci}>{soci}</option>
            ))}
          </select>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
