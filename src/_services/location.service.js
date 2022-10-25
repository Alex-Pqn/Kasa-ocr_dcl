import { requestOptions } from '../_helpers/request-options';

const getApiBaseUrl = () => '/logements.json';

export const locationService = {
  findAll,
  findOne,
};

async function findAll() {
  return fetch(getApiBaseUrl(), requestOptions.get())
    .then((res) => {
      if (!res.ok)
        return Promise.reject(
          `Unable to get locations from ${getApiBaseUrl()}.`
        );

      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
}

async function findOne(params) {
  return fetch(getApiBaseUrl(), requestOptions.get())
    .then((res) => {
      if (!res.ok)
        return Promise.reject(
          `Unable to get the location from ${getApiBaseUrl()}.`
        );

      return res.json();
    })
    .then((data) => {
      const location = data.find((location) => location.id === params.id);

      if (!location)
        return Promise.reject(
          `Unable to get the location from ${getApiBaseUrl()}.`
        );

      return location;
    })
    .catch((err) => {
      throw err;
    });
}
