import React, { useState } from 'react';
import './form.css'; // CSS file

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    address1: '',
    sign: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();
    for (let key in formData) {
      submissionData.append(key, formData[key]);
    }

    try {
      const res = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        body: submissionData,
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();
      alert('✅ User Registered Successfully!');

      // Clear form after success
      setFormData({
        fullname: '',
        email: '',
        password: '',
        address1: '',
        sign: null,
        photo: null,
      });

    } catch (err) {
      console.error('❌ Error submitting form:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>New User Registration</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="address1">Current Address</label>
        <input
          type="text"
          id="address1"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          required
        />

        <label htmlFor="sign">Signature</label>
        <input
          type="file"
          id="sign"
          name="sign"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <label htmlFor="photo">Upload Profile Picture</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <div className="btn">
          <button type="submit">Register</button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                fullname: '',
                email: '',
                password: '',
                address1: '',
                sign: null,
                photo: null,
              })
            }
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
