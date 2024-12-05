import axios from 'axios';

const BASE_URL = 'http://localhost:9000/api';

// Login: Authenticates the user and returns a token
export const login = async ({ username, password }) => {
  try {
    const payload = { username: username.trim(), password: password.trim() };
    const response = await axios.post(`${BASE_URL}/login`, payload);
    return response.data; // Expected to include the token
  } catch (error) {
    console.error('Error logging in:', error);
    throw error.response.data; // Rethrow for handling in components
  }
};

// Fetch all articles
export const getArticles = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/articles`, {
      headers: { Authorization: token },
    });
    return response.data; // Returns the list of articles
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error.response.data;
  }
};

// Create a new article
export const createArticle = async (token, { title, text, topic }) => {
  try {
    const payload = {
      title: title.trim(),
      text: text.trim(),
      topic,
    };
    const response = await axios.post(`${BASE_URL}/articles`, payload, {
      headers: { Authorization: token },
    });
    return response.data; // Returns the created article
  } catch (error) {
    console.error('Error creating article:', error);
    throw error.response.data;
  }
};

// Update an existing article
export const updateArticle = async (token, articleId, { title, text, topic }) => {
  try {
    const payload = {
      title: title.trim(),
      text: text.trim(),
      topic,
    };
    const response = await axios.put(`${BASE_URL}/articles/${articleId}`, payload, {
      headers: { Authorization: token },
    });
    return response.data; // Returns the updated article
  } catch (error) {
    console.error('Error updating article:', error);
    throw error.response.data;
  }
};

// Delete an article
export const deleteArticle = async (token, articleId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/articles/${articleId}`, {
      headers: { Authorization: token },
    });
    return response.data; // Returns success message
  } catch (error) {
    console.error('Error deleting article:', error);
    throw error.response.data;
  }
};
