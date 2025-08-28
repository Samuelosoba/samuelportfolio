import axiosInstance from "../utils/axiosInstace";

export const postContact = async (formData) => {
  return await axiosInstance.post("/contact", formData);
};
