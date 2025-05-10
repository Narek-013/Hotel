import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAccessToken } from "../Utils/accountUtlis";

export const requireAuth = (WrappedComponent) => {
  return (props) => {
    
    const navigate = useNavigate();
    const token = getAccessToken();

    const {lang} = useParams()
    useEffect(()=> {
      
      if (!token) {
        navigate(`/${lang}/signIn`)
        
      }
      
    }, [token])
    return  <WrappedComponent {...props} />;
    
  };
};


export const requireNotAuth = (WrappedComponent) => {

  return (props) => {
    
    const navigate = useNavigate();
    const token = getAccessToken();
    const {lang} = useParams()
    
    useEffect(()=> {
      
      if (token) {
      navigate(`/${lang}/account`)
    
      }
      
    }, [token])
    return  <WrappedComponent {...props} />;
  };
};


