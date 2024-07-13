import React, { useEffect, useState } from "react";
import axios from "../AxiosInstance";

export const useFetch = ({ params = {} }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchPhotos = async () => {
    const response = await axios.get("/search", { params: params });
    setPhotos(response?.data?.photos);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return {
    photos,
    isLoading,
  };
};
