import React, { useEffect, useState } from "react";
import { user } from "@/hooks/user.interface";
import axios from "axios";

const useUsers = (initialPage: number, results: number) => {
  const [data, setData] = useState<user[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `/api/users?results=${results}&page=${currentPage}`
      );
      setData(res.data);
    } catch (error) {
      setError("Failed to fetching data User");
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const day = newDate.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    getData();
  }, [currentPage, results]);

  return {
    data,
    loading,
    error,
    handleNextPage,
    handlePrevPage,
    currentPage,
    formatDate,
  };
};

export default useUsers;
