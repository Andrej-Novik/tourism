import Connector from "./connector";

export class Core {
  getObjects = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get("/api/objects");
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
  deleteObject = async (id) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.delete(`/api/objects/${id}`);
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };

  createObject = async (img, name, country, text, rate) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.post(`/api/objects/`, {
        img,
        name,
        country,
        text,
        rate,
      });
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };

  updateObject = async (id, rate) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.patch(`/api/objects/${id}`, {
        rate,
      });
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };

  getObject = async (id) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`/api/objects/${id}`);
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
  searchObject = async (name) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`/api/objects/search/${name}`);
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
}

export default new Core();
