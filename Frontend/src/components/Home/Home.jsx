import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
 
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";
import { Link, useNavigate } from "react-router-dom";

//internal CSS for unauthorized home page
 
  const navbarStyle = {
    backgroundColor: 'black',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  const linkHoverStyle = {
    backgroundColor: '#333'
  };
 


const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return ( 
      <>
      <nav style={navbarStyle}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ margin: '0 10px' }}>
          <Link
            to="/login"
            style={linkStyle}
       
          >
            Login
          </Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link
            to="/register"
            style={linkStyle}
          
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
    <HeroSection />
    <HowItWorks />
    <PopularCategories />
    <PopularCompanies />
 
  </>
    )
  }
  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
      </section>
    </>
  );
};

export default Home;