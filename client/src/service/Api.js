import axios from "axios";
const url = "http://localhost:8000";

export const AddUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(error);
  }
};
export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const setConversaction = async (data) => {
  try {
    await axios.post(`${url}/conversaction/add`, data);
  } catch (err) {
    console.log(err);
  }
};
