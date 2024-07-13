import React from "react";
import { useFetch } from "./hooks/useFetch";
import {
  AppContainer,
  ContentWrapper,
  Gallery,
  Photo,
  StyledImage,
} from "./styles/styles";

function App() {
  const params = {
    query: "nature",
    per_page: 10,
    page: 1,
  };
  const { photos, isLoading } = useFetch({ params: params });

  return (
    <AppContainer>
      <Gallery>
        {photos.map((photo) => (
          <Photo key={photo.id}>
            <StyledImage src={photo.src.medium} alt={photo.alt} />
          </Photo>
        ))}
      </Gallery>
    </AppContainer>
  );
}

export default App;
