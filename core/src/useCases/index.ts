import ObjectsService from "./objectsService"

class UseCases {
	ObjectsService;
  constructor() {
		this.ObjectsService = ObjectsService;
  }
}
export default new UseCases();
