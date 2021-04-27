import styled from "styled-components";
import { colors, styles } from "../../config/theme";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background: ${colors.colorPrimaryDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  z-index: 3;
  letter-spacing: 0.3rem;
`;

export const Logo = styled.a`
  margin-top: 0.3rem;
  width: 110px;
  max-height: 100px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 3rem;
  gap: 4rem;

  @media (max-width: 1378px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 2rem;
  text-transform: uppercase;

  transition: 0.3s;

  span {
    position: relative;
    &::after {
      position: absolute;
      bottom: -3px;
      left: 0px;

      border-radius: ${styles.borderRadius};
      content: "";
      width: 100%;
      height: 3px;
      background: ${colors.colorWhite};
      opacity: 0;

      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
    }
  }

  &:hover {
    span::after {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;

export const Login = styled.a`
  cursor: pointer;
  display: block;
  background: ${colors.colorBlackLight};
  padding: 1.4rem;
  font-size: 2.4rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: ${styles.borderRadius};
  border: 1px solid ${colors.colorLight};

  transition: all 0.2s ease 0s;

  &:hover {
    background: ${colors.colorLight};
    color: ${colors.colorBlack};
    border-color: transparent;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  right: 0;
  bottom: -50px;

  padding: 1.2rem;
  background: ${colors.colorGrayDark};
  border: 1px solid ${colors.colorGray};
  border-radius: ${styles.borderRadius};
  box-shadow: ${styles.boxShadow};

  font-weight: bold;
  font-size: 2rem;

  &:hover {
    background: ${colors.colorBlackLight};
  }
  opacity: 0;
  transition: 0.5s;
`;

export const SignOut = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    ${Dropdown} {
      opacity: 1;
    }
  }
`;

export const UserPhoto = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;
