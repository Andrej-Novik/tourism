import { createConnection, Connection } from "typeorm";

class DBConnector {
  connector: Connection;

	createConnection = async () => {
		this.connector = await createConnection({
			type: 'postgres',
			host: "localhost",
			username: "postgres",
			password: "Robin_2002",
			database: "tourism",
			entities: ['dist/models/dbm/*{.ts,.js}'],
			migrations: ['dist/migrations/*{.ts,.js}'],
			logging: true,
		})
		const isMigrationsNeed = await this.connector.showMigrations()
		if (isMigrationsNeed) {
			console.log('STARTING MIGRATION')
			await this.connector.runMigrations()
			console.log('MIGRATION SUCCEED')
		}
	}
}
export default new DBConnector();
