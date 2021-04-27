import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, styles } from "../../config/theme";

export const Container = styled.section`
  width: 100%;
  padding: 2rem 0;
  h4 {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  gap: 2rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Item = styled(Link)`
  border-radius: ${styles.borderRadiusSec};
  position: relative;
  overflow: hidden;
  border: 4px solid ${colors.colorGray};
  box-shadow: ${styles.boxShadow};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: ${styles.boxShadowSec};
    border-color: ${colors.colorWhite};
  }
`;
