import styled from "styled-components";
import { colors, styles } from "../../config/theme";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 4rem;

  width: 100%;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 4px solid ${colors.colorGray};
  border-radius: ${styles.borderRadius};

  box-shadow: ${styles.boxShadowSec};
  border-radius: ${styles.borderRadiusSec};
  overflow: hidden;

  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    transform: scale(1.05);
    border-color: ${colors.colorWhite};

    video {
      opacity: 1;
    }
  }

  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`;
