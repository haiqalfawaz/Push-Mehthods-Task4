import { useEffect, useState } from "react";
import { user } from "@/hooks/user.interface";
import axios from "axios";

const useUsers = (
  initialPage: number,
  results: number,
  search: string,
  selectedGender: string
) => {
  const [data, setData] = useState<user[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const getData = async () => {
    setLoading(true);
    try {
      let url = `/api/users?results=${results}&page=${currentPage}`;

      if (selectedGender) {
        url = `api/users?results=${results}&page=${currentPage}&gender=${selectedGender}`;
      }

      const res = await axios.get(url);

      let filteredData = res.data;

      if (search) {
        const lowercasedSearch = search.toLowerCase();
        filteredData = filteredData.filter((user: user) =>
          `${user.name.first} ${user.name.last}`
            .toLowerCase()
            .includes(lowercasedSearch)
        );
      }

      setData(filteredData);
    } catch (error) {
      setError("Failed to fetch data User");
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
  }, [currentPage, results, search, selectedGender]);

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
