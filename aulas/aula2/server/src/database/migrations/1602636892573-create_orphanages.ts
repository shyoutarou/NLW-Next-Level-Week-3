import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602636892573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                { name: 'id', type: 'integer', unsigned: true,
                  isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'name', type: 'varchar' },
                { name: 'latitude', type: 'numeric',
                  precision: 10, scale: 2, },
                { name: 'longitude', type: 'numeric',
                  precision: 10, scale: 2, },
                { name: 'about', type: 'text'},
                { name: 'instructions', type: 'text' },
                { name: 'opening_hours', type: 'varchar' },              
                { name: 'open_on_weekends', type: 'boolean', default: false },
                { name: 'whatsapp', type: 'varchar', isNullable:true}
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');        
    }
}
