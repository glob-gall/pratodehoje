import { MigrationInterface, QueryRunner } from 'typeorm'

export default class CreateManyToManyRecipeIngredients1599498551119
  implements MigrationInterface {
  name = 'CreateManyToManyRecipeIngredients1599498551119'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "ingredients" DROP CONSTRAINT "FK_e099bf7407edb6047abb97c4922"`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes" DROP CONSTRAINT "recipesUser"`,
    )
    await queryRunner.query(
      `CREATE TABLE "recipes_ingredients_ingredients" ("recipesId" uuid NOT NULL, "ingredientsId" uuid NOT NULL, CONSTRAINT "PK_b1e16acd8bc92eccf1463df1b3e" PRIMARY KEY ("recipesId", "ingredientsId"))`,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_698d9343327827895a6824c453" ON "recipes_ingredients_ingredients" ("recipesId") `,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_39b388ccc78dde4d852ea76f1b" ON "recipes_ingredients_ingredients" ("ingredientsId") `,
    )
    await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "recipe_id"`)
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes" ALTER COLUMN "time" SET NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes" ADD CONSTRAINT "FK_67d98fd6ff56c4340a811402154" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes_ingredients_ingredients" ADD CONSTRAINT "FK_698d9343327827895a6824c4536" FOREIGN KEY ("recipesId") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes_ingredients_ingredients" ADD CONSTRAINT "FK_39b388ccc78dde4d852ea76f1b6" FOREIGN KEY ("ingredientsId") REFERENCES "ingredients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "recipes_ingredients_ingredients" DROP CONSTRAINT "FK_39b388ccc78dde4d852ea76f1b6"`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes_ingredients_ingredients" DROP CONSTRAINT "FK_698d9343327827895a6824c4536"`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes" DROP CONSTRAINT "FK_67d98fd6ff56c4340a811402154"`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes" ALTER COLUMN "time" DROP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`,
    )
    await queryRunner.query(`ALTER TABLE "ingredients" ADD "recipe_id" uuid`)
    await queryRunner.query(`DROP INDEX "IDX_39b388ccc78dde4d852ea76f1b"`)
    await queryRunner.query(`DROP INDEX "IDX_698d9343327827895a6824c453"`)
    await queryRunner.query(`DROP TABLE "recipes_ingredients_ingredients"`)
    await queryRunner.query(
      `ALTER TABLE "recipes" ADD CONSTRAINT "recipesUser" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "ingredients" ADD CONSTRAINT "FK_e099bf7407edb6047abb97c4922" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    )
  }
}
