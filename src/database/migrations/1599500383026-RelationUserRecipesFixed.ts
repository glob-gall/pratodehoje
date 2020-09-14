import { MigrationInterface, QueryRunner } from 'typeorm'

export class RelationUserRecipesFixed1599500383026
  implements MigrationInterface {
  name = 'RelationUserRecipesFixed1599500383026'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "recipes" DROP CONSTRAINT "FK_67d98fd6ff56c4340a811402154"`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes" ALTER COLUMN "user_id" SET NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes" ADD CONSTRAINT "FK_67d98fd6ff56c4340a811402154" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "recipes" DROP CONSTRAINT "FK_67d98fd6ff56c4340a811402154"`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes" ALTER COLUMN "user_id" DROP NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "recipes" ADD CONSTRAINT "FK_67d98fd6ff56c4340a811402154" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }
}
