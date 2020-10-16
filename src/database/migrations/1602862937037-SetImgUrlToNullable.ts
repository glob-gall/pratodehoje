import { TableColumn, MigrationInterface, QueryRunner } from 'typeorm'

export default class SetImgUrlToNullable1602862937037
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('recipes', 'image_url')
    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        type: 'varchar',
        name: 'image_url',
        isNullable: true,
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('recipes', 'image_url')
    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        type: 'varchar',
        name: 'image_url',
      }),
    )
  }
}
