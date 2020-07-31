import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateRecipeTable1594161140872
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'recipes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_V4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'method',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'image_url',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ingredients',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'equipaments',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('recipes')
  }
}
