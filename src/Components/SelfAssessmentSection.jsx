import React from "react";
import { useNavigate } from "react-router-dom";
import pic from "../images/30-sec-small.png";
import pic2 from "../images/60-sec-small.png";
import pic3 from "../images/green-tick.png";
import "../css/SelfAssessmentSection.css";
import "../App.css";

const SelfAssessmentSection = ({ set_url_function, clickHandler }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="start-assessment-heading">
        <div className="small-heading">Start your Self Assessment</div>
        <ul className="assessment-list">
          <li>Get your self assessment done </li>
          <li>Book an appointment with our expert</li>
          <li>Get a personalized treatment plan</li>
        </ul>
        <div className="img-notes">
          <img
            src="https://cdn.shopify.com/s/files/1/0638/1391/0746/files/assess-male.png?v=1649334430"
            alt=""
          />
        </div>
      </div>

      <div className="self-assessment-section">
        <div className="assessment-header">Start your Self Assessment</div>
        <div className="assessment-text">
          Get to know your needs better with just few clicks
        </div>
        <div className="self-assessment-cards">
          <div className="assessment-card top">
            <div className="time-section">
              <div className="stopwatch">
                <div className="clock">
                  <img src={pic} alt="" />
                </div>
                <div className="stopwatch-text">30 Sec</div>
              </div>
            </div>
            <div className="content">
              <div className="heading">Quick Assessment</div>
              <div className="report">
                <div className="report-text">
                  <div className="tick">
                    <img src={pic3} alt="" />
                  </div>
                  <div className="report-text-content">
                    Complete a short questionnaire to book your FREE
                    consultation
                  </div>
                </div>
                {/* <div className="report-text">
                  <div className="tick">
                    <img src={pic3} alt="" />
                  </div>
                  <div className="report-text-content">
                    Get a free doctor???s consultation
                  </div>
                </div>
                <div className="report-text">
                  <div className="tick">
                    <img src={pic3} alt="" />
                  </div>
                  <div className="report-text-content">
                    Get recommended products that suit your concerns
                  </div>
                </div> */}
                <div className="report-text"></div>
              </div>
            </div>
            <div
              className="start-assessment"
              onClick={(e) => {
                e.preventDefault();
                if(process.env.REACT_APP_BRAND == "Mars") {
                navigate("/pages/ghc-consultation-mars/" + "?category=yes");
                  set_url_function("/pages/ghc-consultation-mars/" + "?category=yes");
                } else {
                  navigate("/pages/ghc-consultation/" + "?category=yes");
                  set_url_function("/pages/ghc-consultation/" + "?category=yes");
                }
                clickHandler("assessment_type", "30 sec");
              }}
            >
              Start Assessment
            </div>
          </div>
          <div className="assessment-card">
            <div className="time-section">
              <div className="stopwatch">
                <div className="clock">
                  <img src={pic2} alt="" />
                </div>
                <div className="stopwatch-text">6 Mins</div>
              </div>
            </div>
            <div className="content">
              <div className="heading">Detailed Self Assessment</div>
              <div className="report">
                <div className="report-text">
                  <div className="tick">
                    <img src={pic3} alt="" />
                  </div>
                  <div className="report-text-content">
                    Get a detailed assessment report in 6 min
                  </div>
                </div>
                <div className="report-text">
                  <div className="tick">
                    <img src={pic3} alt="" />
                  </div>
                  <div className="report-text-content">
                    Book a FREE consultation with doctor to get a treatment plan
                  </div>
                </div>
                {/* <div className="report-text">
                  <div className="tick">
                    <img src={pic3} alt="" />
                  </div>
                  <div className="report-text-content">
                    Get a Personalized Treatment Plan and assistance
                  </div>
                </div> */}
              </div>
            </div>
            <div
              className="start-assessment"
              onClick={() => {
                if(process.env.REACT_APP_BRAND == "Mars") {
                  navigate("/pages/ghc-consultation-mars/?category=yes");
                  set_url_function("/pages/ghc-consultation-mars/?category=yes");
                } else {
                  navigate("/pages/ghc-consultation/?category=yes");
                  set_url_function("/pages/ghc-consultation/?category=yes");
                }
                clickHandler("assessment_type", "6 mins");
              }}
            >
              Start Assessment
            </div>
          </div>
        </div>
      </div>

      <div className="get-started">Get started</div>

      <div className="assessment-card-section">
        <div className="assessment-card-small">
          <div className="top-heading">
            <div className="heading">Quick Assessment</div>
            <div className="small-stopwatch"></div>
          </div>
          <div className="content">
            Get recommended products that suit your concerns
          </div>
          <div
            className="submit"
            onClick={() => {
              {
                if(process.env.REACT_APP_BRAND == "Mars") {
                  navigate("/pages/ghc-consultation-mars/?category=yes");
                  set_url_function("/pages/ghc-consultation-mars/?category=yes");
                } else {
                  navigate("/pages/ghc-consultation/?category=yes");
                  set_url_function("/pages/ghc-consultation/?category=yes");
                }
                clickHandler("assessment_type", "30 sec");
              }
            }}
          >
            Start Assessment
          </div>
        </div>
        <div className="assessment-card-small">
          <div className="bottom-heading">
            <div className="heading">Detailed Self Assessment</div>
            <div className="small-stopwatch"></div>
            <div className="clock"></div>
          </div>
          <div className="content">
            Get a free Doctor???s consultation and Personalized Treatment Plan
          </div>
          <div
            className="submit"
            onClick={() => {
              {
                if(process.env.REACT_APP_BRAND == "Mars") {
                  navigate("/pages/ghc-consultation-mars/" + "?category=yes");
                  set_url_function("/pages/ghc-consultation-mars/" + "?category=yes");
                } else {
                  navigate("/pages/ghc-consultation/" + "?category=yes");
                  set_url_function("/pages/ghc-consultation/" + "?category=yes");
                }
                clickHandler("assessment_type", "6 mins");
              }
            }}
          >
            Start Assessment
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfAssessmentSection;
