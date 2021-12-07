"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class DBConnector {
    constructor() {
        this.createConnection = async () => {
            this.connector = await typeorm_1.createConnection({
                type: 'postgres',
                host: "localhost",
                username: "postgres",
                password: "Robin_2002",
                database: "tourism",
                entities: ['dist/models/dbm/*{.ts,.js}'],
                migrations: ['dist/migrations/*{.ts,.js}'],
                logging: true,
            });
            const isMigrationsNeed = await this.connector.showMigrations();
            if (isMigrationsNeed) {
                console.log('STARTING MIGRATION');
                await this.connector.runMigrations();
                console.log('MIGRATION SUCCEED');
            }
        };
    }
}
exports.default = new DBConnector();
