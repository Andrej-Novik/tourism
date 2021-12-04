import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create();
  }
}

export default new Connector();
