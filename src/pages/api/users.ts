import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const usersAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;

    if (!apiURL) {
      return res
        .status(500)
        .json({ error: "API URL is not defined in the environment variables" });
    }

    const results = req.query.results || 10;
    const page = req.query.page || 1;

    const response = await axios.get(
      `${apiURL}/?results=${results}&page=${page}`
    );

    return res.status(200).json(response.data.results);
  } catch (error) {
    console.error("Error Fetching Users", error);
    return res.status(500).json({ error: "failed to fetch users" });
  }
};

export default usersAPI;
