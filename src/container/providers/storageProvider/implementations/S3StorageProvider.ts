import fs from 'fs'
import path from 'path'
import aws, { S3 } from 'aws-sdk'
import mime from 'mime'
import uploadConfig from '../../../../config/upload'
import IStorageProvider from '../IStorageProvider'
import AppError from '../../../../utils/errors/AppError'

class S3StorageProvider implements IStorageProvider {
  private client = new S3()

  constructor() {
    this.client = new aws.S3({
      region: process.env.AWS_DEFAULT_REGION,
    })
  }

  public async saveFile(file: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.tmpFolder, file)
    const ContentType = mime.getType(originalPath)

    if (!ContentType) {
      throw new AppError('Image not found')
    }

    const fileContent = await fs.promises.readFile(originalPath)

    await this.client
      .putObject({
        Bucket: uploadConfig.config.aws.bucket,
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentType,
        ContentDisposition: `inline; filename=${file}`,
      })
      .promise()

    await fs.promises.unlink(originalPath)
    return file
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: uploadConfig.config.aws.bucket,
        Key: file,
      })
      .promise()
  }
}

export default S3StorageProvider
