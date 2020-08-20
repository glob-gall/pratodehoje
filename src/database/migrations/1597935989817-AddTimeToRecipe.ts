import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AddTimeToRecipe1597935989817 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        name: 'time',
        type: 'int',
        isNullable: true,
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('recipes', 'time')
  }
}
