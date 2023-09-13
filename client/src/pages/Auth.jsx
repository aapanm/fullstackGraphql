import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import SignInForm from "../components/SignInForm";

function Auth() {
  const [isSignin, setisSignin] = useState(true);

  return (
    <div>
      {isSignin ? <SignInForm /> : <RegistrationForm />}
      <div>
        {isSignin ? (
          <div style={{ marginTop: "1rem" }}>
            <span>Don't have an account?</span>
            <button
              className="btn-1"
              onClick={() => setisSignin((prev) => !prev)}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div style={{ marginTop: "1rem" }}>
            <span>Already have an account?</span>
            <button
              className="btn-1"
              onClick={() => setisSignin((prev) => !prev)}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
