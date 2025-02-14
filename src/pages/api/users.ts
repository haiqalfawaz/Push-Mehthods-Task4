import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const usersAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const { gender, results = 10, page = 1 } = req.query;

    if (!apiURL) {
      return res
        .status(500)
        .json({ error: "API URL is not defined in the environment variables" });
    }

    const genderQuery = gender ? `&gender=${gender}` : "";
    const response = await axios.get(
      `${apiURL}/?results=${results}&page=${page}${genderQuery}`
    );

    return res.status(200).json(response.data.results);
  } catch (error) {
    console.error("Error Fetching Users", error);
    return res.status(500).json({ error: "Failed to fetch users" });
  }
};

export default usersAPI;
