import styled from "styled-components";
import { Colors } from "./Colors";
const {
  primaryD,
  secondaryD,
  tertiaryD,
  primaryN,
  secondaryN,
  tertiaryN,
  text,
  white,
  lilac,
  redError,
} = Colors;
const grade = "35deg";

export const Container = styled.main`
  width: 100%;
  max-width: 1800px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) =>
    props.hour > 7 && props.hour <= 18
      ? `linear-gradient(${grade}, ${tertiaryD}, ${primaryD}, ${secondaryD})`
      : `linear-gradient(${grade}, ${tertiaryN}, ${primaryN}, ${secondaryN})`};
`;

export const Form = styled.form`
  width: 60%;
  height: 90px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0 0 0 /0.5);
  border-radius: 10px;

  @media screen and (min-width: 992px) {
    width: 40%;
  }

  .input {
    width: 170px;
    line-height: 28px;
    border: 2px solid transparent;
    border-bottom-color: ${(props) => lilac};
    padding: 0.2rem 0;
    outline: none;
    background-color: transparent;
    color: ${(props) => text};
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .input:focus,
  &:hover {
    outline: none;
    padding: 0.2rem 1rem;
    border-radius: 1rem;
    border-color: ${(props) => lilac};
  }

  .input::placeholder {
    color: ${(props) => lilac};
    text-align: center;
  }

  .input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }

  p {
    padding-top: 10px;
    color: ${(props) => redError};
    font-size: 0.9rem;
    letter-spacing: 3px;
  }
`;

export const ContainerCity = styled.section`
  width: 90%;
  min-height: 380px;

  margin: 0 auto;
  background-color: rgba(0 0 0 /0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 992px) {
    width: 70%;
    height: 900px;
  }

  .card {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .card__header {
      letter-spacing: 3px;
      line-height: 30px;
      text-align: center;
      color: ${(props) => text};

      h3 {
        font-size: 1.8rem;
      }

      p {
        text-transform: capitalize;
        font-size: 0.8rem;
      }
    }
  }

  .card__body {
    figure {
      display: grid;
      place-content: center;
      color: ${(props) => text};
      margin-bottom: 20px;

      img {
        width: 100%;
      }

      figcaption {
        width: 150px;
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: 3px;
        color: ${(props) => primaryD};
        text-transform: uppercase;
        text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.7);
        text-align: center;
      }
    }
  }

  .card__footer {
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    letter-spacing: 3px;
    color: ${(props) => white};

    span {
      font-weight: bold;
    }

    .max__tem {
      color: ${(props) => redError};
    }

    .min__tem {
      color: ${(props) => secondaryD};
    }
  }
`;

export const ContainerMessageErrorData = styled.div`
  width: 90%;
  min-height: 350px;
  margin: 0 auto;
  background-color: rgba(0 0 0 /0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 992px) {
    width: 70%;
  }

  h3 {
    color: ${(props) => redError};
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
`;

export const ContainerFrame = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
  }
`;
