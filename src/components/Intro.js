import React from "react";
import styled from "styled-components";
import imge from "../img/eduardo-prim-377966-unsplash.png";

const Intro = () => {
  return (
    <React.Fragment>
      <IntroStyle>
        <h3>AGRICULTURE FOR EVERYONE</h3>
        <p>An online agricultural platform aimed</p>
        <p>at teaching best agricultural</p>
        <p>practices to farmers everywhere.</p>
        <Buttons>
          <Button1>Sign Up</Button1>
          <Button2>Watch our tutorials</Button2>
        </Buttons>
      </IntroStyle>
    </React.Fragment>
  );
};

// Styles
const IntroStyle = styled.div`
  min-height: 90vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.651), transparent),
    url(${imge});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p,
  h3 {
    align-items: center;
    padding-left: 5rem;
  }
  p {
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
  h3 {
    padding: 1rem;
    padding-left: 5rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 5rem;
`;
const Button1 = styled.button`
  margin-right: 2rem;
  padding: 1rem 4rem;
  border: none;
  cursor: pointer;
  background: #e8991d;
  color: white;
  border-radius: 5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  &:hover {
    background: white;
    color: #e8991d;
    border: 1px solid #e8991d;
  }
`;
const Button2 = styled.button`
  margin-left: 2rem;
  padding: 1rem 4rem;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
  background: transparent;
  border: 1px solid white;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

export default Intro;
