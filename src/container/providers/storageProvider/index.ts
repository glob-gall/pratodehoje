import { container } from 'tsyringe'
import IStorageProvider from './IStorageProvider'
import S3StorageProvider from './implementations/S3StorageProvider'
import uploadConfig from '../../../config/upload'

const providers = {
  s3: S3StorageProvider,
}

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[uploadConfig.driver],
)
