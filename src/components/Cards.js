import React from "react";
import farmer from "../img/farmer (1).svg";
import shopping from "../img/shopping-bag (1).svg";
import tractor from "../img/tractor (1).svg";
// Styles
import styled from "styled-components";

const Cards = () => {
  return (
    <Global>
      <Intro>
        <h1>ABOUT ZOJIE'S FARM</h1>
        <p>
          We are constantly in search for innovative solutions that makes the
          farmers lives easier while increasing their opportunities. We achieve
          these in various ways - reducing their production costs, increasing
          their harvest volumes and providing a better, bigger and more
          sustainable market for them.
        </p>
      </Intro>
      <St>
        <Card>
          <Input>
            <img src={farmer} alt="input" />
            <Container>
              <h3>INPUTS</h3>
              <p>Delivering best input deals to farmers’ communities</p>
            </Container>
          </Input>
        </Card>
        <Card>
          <Tractor>
            <img src={tractor} alt="tractor" />
            <Container>
              <h3>TRACTOR</h3>
              <p>Get services within 48 hours of request.</p>
            </Container>
          </Tractor>
        </Card>
        <Card>
          <Trading>
            <img src={shopping} alt="trading" />
            <Container>
              <h3>TRADING</h3>
              <p>Opening international markets for smallholder farmers.</p>
            </Container>
          </Trading>
        </Card>
      </St>
    </Global>
  );
};
const St = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;
const Global = styled.div`
  background: #f2f8e2;
  min-height: 100vh;
  padding-left: 5rem;
  padding-right: 5rem;
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
  }
`;

const Intro = styled.div`
  padding-top: 5rem;
  padding-bottom: 8rem;
  /* display: flex; */
  p {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 50rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 2rem;

  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);

  width: 80%;
  height: 100%;

  cursor: pointer;
  img {
    padding-bottom: 2rem;
    padding-top: 1rem;
    padding-right: 1rem;
  }
`;
const Input = styled.div`
  display: flex;
  align-items: center;

  h3 {
    padding-bottom: 2rem;
  }
  p {
    padding-bottom: 2rem;
  }
`;
const Trading = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem 2rem;

  h3 {
    padding-bottom: 2rem;
    display: flex;
  }
  p {
    padding-bottom: 2rem;
  }
`;
const Tractor = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem 2rem;

  h3 {
    padding-bottom: 2rem;
    display: flex;
  }

  p {
    padding-bottom: 2rem;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Cards;
