import connector from './connector'
import ObjectRepository from './object'
import IDB, {
	IConnector,
	IObjectsRepository,
} from './interfaces'

class DB implements IDB {
	connector: IConnector
	objects: IObjectsRepository
	
	constructor() {
		this.connector = connector
		this.objects = ObjectRepository
	}
}
export default new DB()
