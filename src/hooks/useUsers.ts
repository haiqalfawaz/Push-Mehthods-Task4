import React, { useEffect, useState } from "react";
import { user } from "@/hooks/user.interface";
import axios from "axios";

const useUsers = () => {
  const [data, setData] = useState<user[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/users");
      setData(res.data);
    } catch (error) {
      setError("Failed to fetching data User");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error };
};

export default useUsers;
