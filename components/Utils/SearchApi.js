const apiUrl = process.env.NEXT_PUBLIC_SPACEX_API;
import axios from "axios";

export const searchApi = (launch_year, launch_success, land_success) => {
  return axios.get(apiUrl, {
    params: {
      launch_year: launch_year || "",
      launch_success: launch_success || "",
      land_success: land_success || "",
    },
  });
};
