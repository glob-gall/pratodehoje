/* eslint-disable @typescript-eslint/ban-types */
import multer, { StorageEngine } from 'multer'

import path from 'path'
import crypto from 'crypto'

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')

interface IUploadConfig {
  driver: 's3'
  tmpFolder: string
  uploadsFolder: string

  multer: {
    storage: StorageEngine
  }
  config: {
    disk: {}
    aws: {
      bucket: string
    }
  }
}

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  config: {
    disk: {},
    aws: {
      bucket: 'pratodehoje',
    },
  },

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex')
        const fileName = `${fileHash}-${file.originalname}`

        return callback(null, fileName)
      },
    }),
  },
} as IUploadConfig
