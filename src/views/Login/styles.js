import styled from "styled-components";
import { colors, styles } from "../../config/theme";

export const Container = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
  font-size: 1.8rem;

  padding: 0 4rem;

  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;

export const CTALogo = styled.img`
  width: 100%;
  max-width: 800px;
  display: block;
`;

export const SignUp = styled.a`
  font-weight: bold;

  font-size: 2.3rem;
  width: 100%;
  padding: 2.4rem;
  background-color: ${colors.colorPrimary};
  border-radius: ${styles.borderRadius};
  letter-spacing: 0.4rem;
  color: ${colors.colorLight};

  &:hover {
    background-color: ${colors.colorPrimaryLight};
  }
  margin: 1.2rem 0;
  transition: 0.3s;
`;

export const Description = styled.p`
  margin-bottom: 1.2rem;
  line-height: 3rem;

  color: ${colors.colorLight};
`;
