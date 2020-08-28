import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

export class JoinTablesRecipesIngredients1597010267612
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('recipes', 'ingredients')
    await queryRunner.createForeignKey(
      'ingredients',
      new TableForeignKey({
        columnNames: ['recipe_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'recipes',
        onDelete: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ingredients', 'recipe_id')

    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        name: 'ingredients',
        type: 'varchar',
      }),
    )
  }
}
