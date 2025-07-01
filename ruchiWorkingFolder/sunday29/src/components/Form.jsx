import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from "@fortawesome/free-regular-svg-icons";

const Form = () => {
  return (
    <div>
       <div className="form-container">
        <h2><FontAwesomeIcon icon={faIdCard} /> New User Registration</h2>
        <form action="/submit" method="POST" encType="multipart/form-data">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" required />


          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="sign">Signature</label>
          <input type="file" id="sign" name="sign" accept="image/*" required />

          <div className="btn">
            <button type="submit">Register</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
