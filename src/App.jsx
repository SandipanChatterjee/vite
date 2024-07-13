// eslint-disable-next-line no-unused-vars
import React from "react";
import { useFetch } from "./hooks/useFetch";
import {
  AppContainer,
  Gallery,
  LoaderContainer,
  Photo,
  Spinner,
  StyledImage,
} from "./styles/styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

function App() {
  const params = {
    query: "nature",
    per_page: 10,
    page: 1,
  };
  const { photos, isLoading, lastPhotoElementRef } = useFetch({
    params: params,
  });

  return (
    <AppContainer>
      <Gallery>
        {photos.map((photo, index) => {
          if (index === photos.length - 1) {
            return (
              <Photo ref={lastPhotoElementRef} key={photo.id}>
                <StyledImage src={photo.src.medium} alt={photo.alt} />
              </Photo>
            );
          }
          return (
            <Photo key={photo.id}>
              <StyledImage src={photo.src.medium} alt={photo.alt} />
            </Photo>
          );
        })}
      </Gallery>
      {isLoading && <Loader />}
    </AppContainer>
  );
}

export default App;
