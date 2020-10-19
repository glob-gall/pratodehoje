import Redis from 'ioredis'
import cacheConfig from '../../../../config/cache'
import ICacheProvider from '../ICacheProvider'

class RedisCacheProvider implements ICacheProvider {
  constructor(private client = new Redis(cacheConfig.config.redis)) {}

  public async save(key: string, value: string): Promise<void> {}

  public async recover(key: string): Promise<string> {}

  public async invalidate(key: string): Promise<void> {}
}

export default RedisCacheProvider
