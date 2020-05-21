import axios from "axios";

export const request = config =>
  new Promise((resolve, request) => {
    axios(config)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
