import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { requireNotAuth } from "../../HOC/requireAuth_NotAuth.jsx";
import signInPageImg from "../../Images/signUpPageImg.jpg";
import SignIn from "../../Components/SignIn/SignIn.jsx";
import SignUp from "../../Components/SignUp/SignUp.jsx";
import "./signPage.css";

const SignPage = () => {
  const location = useLocation();
  const { lang } = useParams();
  const isSignIn = location.pathname === `/${lang}/signIn`;

  return (
    <div
      className="SignPage"
      style={{ backgroundImage: `url(${signInPageImg})` }}
    >
      <div className="container">
      {isSignIn ? (
        <SignIn switchAuth={() => navigate(`/${lang}/signUp`)} />
      ) : (
        <SignUp switchAuth={() => navigate(`/${lang}/signIn`)} />
      )}
      </div>
    </div>
  );
};

export default requireNotAuth(SignPage);
