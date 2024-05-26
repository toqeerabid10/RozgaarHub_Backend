import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How RozgaarHub Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Join RozgaarHub today and set up your profile to access a wide range of job opportunities.
            Create an account to start applying for jobs that match your skills and preferences.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Whether you are looking to find a job or post a job vacancy, RozgaarHub offers a seamless
            platform for both job seekers and employers. Discover job opportunities and connect with
            potential employers today.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Use RozgaarHub to apply for jobs that fit your skills and career goals. Employers can
            recruit the most suitable candidates by posting job vacancies and reviewing applicant
            profiles. Streamline your hiring process with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;