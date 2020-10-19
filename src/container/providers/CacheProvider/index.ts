import { container } from 'tsyringe'
import ICacheProvider from './ICacheProvider'
import RedisCacheProvider from './implementations/RedisCacheProvider'

const providers = {
  redis: RedisCacheProvider,
}

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis)
