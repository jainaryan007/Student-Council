import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from "./navbar2";
import Footer from "./footer";


const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (<>
    <div className="mb-10">
      <section className="relative w-full h-96">
        <img
          src="img/sc_back.jpg" 
          alt="Team Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl lg:text-5xl font-bold" data-aos="fade-up">
            JECRC Student Council
          </h1>
          <p
            className="mt-4 text-lg lg:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            This is our Student Council team. The brains and brawns of our
            events.
          </p>
          <nav
            className="text-red-500 mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <ul className="flex justify-center space-x-4">
              <li className="hover:text-blue-600">
                <a href="/">Home</a>
              </li>
              <li>/</li>
              <li className="text-white">Team</li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
    </>
  );
};


export const ApplicationForm = () => {
  const navigate = useNavigate();
  const years = ["1", "2"];
  const branches = ["CSE", "CSAI", "IT", "AIDS", "ECE", "EE", "ME", "CE"];
  const applies = ["Apply for Student Council", "Apply for Clubs", "Apply for Both"];
  const verticals = ["Graphic Designing", "Technical", "Cultural", "Operations", "Media"];
  const Club1 = ["FACE & FOOTLIGHT", "ADAA", "ENIGMA", "KHALAS", "ATRANGI", "AVYAAN", "FOTOGRAFREAKS", "XANANOIDS"];
  const Club2 = ["FACE & FOOTLIGHT", "ADAA", "ENIGMA", "KHALAS", "ATRANGI", "AVYAAN", "FOTOGRAFREAKS", "XANANOIDS"];
  const SociVert = ["SUHASINI", "SOCH", "ZARURAT", "AASHAYEIN"];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    branch: '',
    section: '',
    phone: '',
    blood : '',
    apply: '',
    yourself: '',
    whyjoin: '',
    experience: '',
    vertical: '',
    club1: '',
    club2: '',
    socivert: '',
    suggestion: ''
  });

  const [errors, setErrors] = useState({
    yourself: '',
    whyjoin: '',
    experience: '',
    phone: '',
    email: ''
  });

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });

  if (e.target.name === 'yourself' && e.target.value.length >= 50) {
    setErrors({ ...errors, yourself: '' });
  }
  if (e.target.name === 'whyjoin' && e.target.value.length >= 50) {
    setErrors({ ...errors, whyjoin: '' });
  }
  if (e.target.name === 'experience' && e.target.value.length >= 50) {
    setErrors({ ...errors, experience: '' });
  }
  if (e.target.name === 'phone' && /^[0-9]{10}$/.test(e.target.value)) {
    setErrors({ ...errors, phone: '' });
  }
  if (e.target.name === 'email' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
    setErrors({ ...errors, email: '' });
    }
};

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formValid = true;

    if (formData.yourself.length < 50) {
      setErrors({ ...errors, yourself: 'Description must be more than 50 characters.' });
      formValid = false;
    }

    if (formData.whyjoin.length < 50) {
      setErrors({ ...errors, whyjoin: 'Reason for joining must be more than 50 characters.' });
      formValid = false;
    }

    if (formData.experience.length < 50) {
      setErrors({ ...errors, experience: 'Experience must be more than 50 characters.' });
      formValid = false;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setErrors({ ...errors, phone: 'Phone number must be exactly 10 digits.' });
      formValid = false;
    }
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  setErrors({ ...errors, email: 'Email is not valid.' });
  formValid = false;
}

    if (!formValid) return;
    try {
      const response = await axios.post('https://formapi-vw9o.onrender.com/form', formData);
      if (response.status === 201) {
        alert("Response recorded successfully");
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Email or phone number already exists");
      } else {
        console.log("Something went wrong", error);
      }
    }
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center flex-col items-center pb-8"
    style={{
      backgroundImage: 'url("img/formBg.png")',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat'

      
    }}>
      
       <Team />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg ">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800" data-aos="fade-down">
            Application Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            type="text" 
            placeholder="Full Name" 
            name="name" 
            onChange={handleChange} 
            value={formData.name} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            onChange={handleChange} 
            value={formData.email} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <select 
            name="year" 
            value={formData.year} 
            onChange={handleChange} 
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          />
          <input 
            type="number" 
            placeholder="WhatsApp number" 
            name="phone" 
            onChange={handleChange} 
            value={formData.phone} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          <input 
            type="text" 
            placeholder="Add your blood group" 
            name="blood" 
            onChange={handleChange} 
            value={formData.blood}  
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          />
          <select 
            name="apply" 
            value={formData.apply} 
            onChange={handleChange} 
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          />
          {errors.yourself && <p className="text-red-500 text-sm">{errors.yourself}</p>}
          <textarea 
            placeholder="Why do you want to join Student Council / Cultural Club / Social Club" 
            name="whyjoin" 
            onChange={handleChange} 
            value={formData.whyjoin} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          />
          {errors.whyjoin && <p className="text-red-500 text-sm">{errors.whyjoin}</p>}
          <textarea 
            placeholder="Any prior experience" 
            name="experience" 
            onChange={handleChange} 
            value={formData.experience} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          />
          {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
          <select 
            name="vertical" 
            value={formData.vertical} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          >
            <option value="">Student Council Vertical you want to join</option>
            {verticals.map((vertical) => (
              <option key={vertical} value={vertical}>{vertical}</option>
            ))}
          </select>
          <select 
            name="club1" 
            value={formData.club1} 
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          >
            <option value="">Club you want to join Technical/Cultural</option>
            {Club1.map((club) => (
              <option key={club} value={club}>{club}</option>
            ))}
          </select>
          <select 
            name="club2" 
            value={formData.club2} 
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          >
            <option value="">Club you want to join Technical/Cultural</option>
            {Club2.map((cult) => (
              <option key={cult} value={cult}>{cult}</option>
            ))}
          </select>
          <select 
            name="socivert" 
            value={formData.socivert} 
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          >
            <option value="">Social Club you want to join</option>
            {SociVert.map((soci) => (
              <option key={soci} value={soci}>{soci}</option>
            ))}
          </select>
          <input 
            type="text" 
            placeholder="Any suggestions for new club" 
            name="suggestion" 
            onChange={handleChange} 
            value={formData.suggestion}  
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          />
          <button 
            type="submit" 
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};


export default ApplicationForm;
