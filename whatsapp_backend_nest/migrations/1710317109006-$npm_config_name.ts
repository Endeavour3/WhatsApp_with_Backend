import { Logger } from "@nestjs/common";
import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1710317109006 implements MigrationInterface {

    private readonly logger = new Logger($npmConfigName1710317109006.name)

    public async up(queryRunner: QueryRunner): Promise<void> {
        this.logger.log('Up')
        await queryRunner.query('UPDATE item SET public = 1');
    }

    // public async down(queryRunner: QueryRunner): Promise<void> {
    // }

    public async down(): Promise<void> {
        this.logger.log('Down')
    }

}
