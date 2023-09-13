// src/components/SignInForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    console.log("Form data submitted:", formData);

    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/");
  };

  return (
    <div>
      <h2>SiGN IN</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
