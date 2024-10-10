import React, { useState } from "react";
import Countdown from "react-countdown";
import Axios from "axios";

import "./App.css"; // We'll use CSS for styling

const App = () => {
  const [mail, setMail] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  function sendNewsLetterInfo() {
    if (mail) {
      Axios.post(`http://localhost:4000/api/contactform/newsletter`, {
        mail,
      })
        .then(() => {
          alert("Email Sent successfully");
          window.location.reload();
        })
        .catch(() => {
          alert("Something is wrong!!! ");
        });
      return;
    }

    return alert("Fill the Email Field");
  }

  function sendSignUpInfo() {
    if (email && name && phone && address) {
      Axios.post(`http://localhost:4000/api/contactform/signup`, {
        email,
        name,
        phone,
        address,
        message,
      })
        .then(() => {
          alert("Successful");
          window.location.reload();
        })
        .catch(() => {
          alert("Something is wrong!!! ");
        });
      return;
    }
    return alert("Fill in all the Fields");
  }

  return (
    <div className="container">
      <header>
        <img src="PNG.png" alt="logo" className="logo" />

        <h2>Coming Soon</h2>
        <p className="countdown">
          <Countdown date={Date.now() + 59 * 24 * 60 * 60 * 1000} />
        </p>

        <p className="textCont">
          Search, connect, and grow with Be My Life Coach. Our platform is
          designed to help you find the perfect coach for your personal and
          professional growth. Coming soon—your journey to a better you starts
          here.
        </p>
      </header>

      <div className="both">
        <section className="signup">
          <h1>Sign Up</h1>
          <p className="suP">
            If you are a CERTIFIED LIFE COACH and want to join our life coach
            community
          </p>
          <form>
            <div class="form-group">
              <input
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </div>

            <div class="form-group">
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </div>

            <div class="form-group full-width">
              <input
                id="phone"
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone"
              />
            </div>

            <div class="form-group full-width">
              <input
                id="address"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
              />
            </div>

            <div class="form-group full-width">
              <textarea
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message here"
              ></textarea>
            </div>
            <button
              onClick={() => sendSignUpInfo()}
              type="submit"
              className="btn1"
            >
              Submit
            </button>
          </form>
        </section>

        <section className="newsletter section-2 ">
          <div class="para">
            <h2>Subscribe to Our Newsletter</h2>
          </div>
          <div class="cont">
            <p class="ppp">
              Looking to speak to a CERTIFIED LIFE COACH before our site is up?
              Be an EARLY BIRD and SIGN UP HERE
            </p>
          </div>

          <div className="form-group">
            <input
              id="mail"
              type="email"
              onChange={(e) => setMail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <button
            className="btn2"
            onClick={() => {
              sendNewsLetterInfo();
            }}
            type="submit"
          >
            Subscribe
          </button>
        </section>
      </div>

      <div className="footer">
        <div>
          <h2>BE MY LIFE COACH</h2>

          <p>
            Be My Life Coach connects you with certified professionals ready to
            guide you through life's challenges.
          </p>
        </div>

        <div>
          <h3>Follow us</h3>
          <div className="soc_icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
