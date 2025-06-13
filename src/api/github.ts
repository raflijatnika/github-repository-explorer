 
import axiosInstance from "@/lib/axios";

export const useGithub = () => {
  // Axios hooks
  const axios = axiosInstance();

    /**
     * @description get repository by username
     * 
     * @param username 
     * @param perPage 
     * @param page 
     * 
     * @returns 
     */
  const getUsersRepos = (
    username: string | null | undefined,
    perPage: number = 10,
    page: number = 1
  ) =>
    axios.get(`/users/${username}/repos`, {
      params: {
        per_page: perPage,
        page
      },
    });

  /**
   * 
   * @description get users list
   * 
   * @param perPage 
   * @param page 
   * @returns 
   */
  const getUsers = (
    perPage: number = 10,
    page: number = 1
  ) =>
    axios.get("/users", {
      params: { 
        per_page: perPage,
        page
      },
    });

  /**
   * 
   * @description get user detail data
   * 
   * @param username 
   * 
   * @returns 
   */
  const getUsersDetail = (username: string) => axios.get(`/users/${username}`);

  /**
   * 
   * @description get github users by search query (username)
   * 
   * @param username 
   * @param perPage 
   * @param page 
   * @returns 
   */
  const getUsersSearch = (
    username: string,
    perPage: number = 10,
    page: number = 1
  ) =>
    axios.get(`/search/users?q=${username}`, {
      params: {
        per_page: perPage,
        page
      },
    });

  return {
    getUsersRepos,
    getUsers,
    getUsersDetail,
    getUsersSearch,
  };
};