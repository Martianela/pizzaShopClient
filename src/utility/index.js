import axios from "axios";
import Cookies from "js-cookie";
let baseUrl = "http://localhost:3001/";
export const fetchData = async (url) => {
  const data = await axios.get(`${baseUrl}${url}`);
  return data;
};
export const logout = async () => {
  try {
    Cookies.remove("user");
    await axios.get(`${baseUrl}user/logout`, {
      withCredentials: true,
      credentials: "include",
    });
  } catch (error) {
    window.alert(error.message);
  }
};
export const getUserInfo = async () => {
  try {
    const user = await axios.get(`${baseUrl}user/userProfile`, {
      withCredentials: true,
      credentials: "include",
    });
    if (user?.data) return user?.data.data;
    else return null;
  } catch (error) {
    window.alert(error.message);
  }
};
export const getReviewByUserId = async () => {
  try {
    const reviews = await axios.get(`${baseUrl}reviews/`, {
      withCredentials: true,
      credentials: "include",
    });
    return reviews;
  } catch (error) {
    window.alert(error.message);
  }
};
export const deleteUserReview = async (id) => {
  try {
    const {
      data: { message },
    } = await axios.post(`${baseUrl}reviews/crud/${id}`);
    if (message) {
      window.alert(message);
    }
  } catch (error) {
    window.alert(error.message);
  }
};
export const getAllPlans = async (id) => {
  try {
    const plans = await axios.get(`${baseUrl}plans/allPlans`, {
      withCredentials: true,
      credentials: "include",
    });
    if (plans) {
      window.alert(plans?.data.message);
      return plans?.data;
    }
  } catch (error) {
    window.alert(error.message);
  }
};
export const createUser = async (newUser) => {
  try {
    const user = await axios.post(`${baseUrl}user/signup`, newUser, {
      withCredentials: true,
      credentials: "include",
    });
    if (user) {
      return user;
    }
  } catch (error) {
    window.alert(error.message);
  }
};
export const getPlanById = async (id) => {
  try {
    const plan = await axios.get(`${baseUrl}plans/plan/${id}`, {
      withCredentials: true,
      credentials: "include",
    });
    if (plan) {
      return plan;
    }
  } catch (error) {
    window.alert(error.message);
  }
};
export const getReviewById = async (id) => {
  try {
    console.log(id);
    const reviews = await axios.get(`${baseUrl}reviews/${id}`, {
      withCredentials: true,
      credentials: "include",
    });
    if (reviews) {
      return reviews;
    }
  } catch (error) {
    window.alert(error.message);
  }
};
export const createReview = async (review) => {
  try {
    console.log(review);
    const data = await axios.post(
      `${baseUrl}reviews/crud/${review.plan}`,
      review
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
