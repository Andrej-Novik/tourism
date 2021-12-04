"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateObjectsTable20210212094500 = void 0;
const typeorm_1 = require("typeorm");
class CreateObjectsTable20210212094500 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'objects',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                    isPrimary: true,
                },
                {
                    name: 'img',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'country',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'text',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'rate',
                    type: 'int',
                    isNullable: false,
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('objects');
    }
}
exports.CreateObjectsTable20210212094500 = CreateObjectsTable20210212094500;
