import axios from "axios";
const url = "http://localhost:8000";
export const AddUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(error);
  }
};
