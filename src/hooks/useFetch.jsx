import { useCallback, useEffect, useRef, useState } from "react";
import axios from "../AxiosInstance";

export const useFetch = ({ params = {} }) => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef();

  const lastPhotoElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  const fetchPhotos = useCallback(async (page) => {
    setIsLoading(true);
    try {
      const modifiedParams = {
        ...params,
        page: page,
      };
      const response = await axios.get("/search", { params: modifiedParams });
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data.photos]);
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchPhotos(page);
  }, [fetchPhotos, page]);

  return {
    lastPhotoElementRef,
    photos,
    isLoading,
  };
};
