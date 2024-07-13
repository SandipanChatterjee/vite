import styled from "styled-components";

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three photos per row */
  gap: 10px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Two photos per row on smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* One photo per row on very small screens */
  }
`;

export const Photo = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px; /* Set a fixed height for the photo containers */
  background-color: #e0e0e0; /* Placeholder background color */
`;

export const StyledImage = styled.img`
  max-height: 100%;
  width: auto;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 200px;
  border-radius: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Adjust based on your design */
  padding: 20px;
`;
