import { MigrationInterface, QueryRunner } from 'typeorm'

export class deleteEquipamentsRow1599498860876 implements MigrationInterface {
  name = 'deleteEquipamentsRow1599498860876'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "equipaments"`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "recipes" ADD "equipaments" character varying NOT NULL`,
    )
  }
}
