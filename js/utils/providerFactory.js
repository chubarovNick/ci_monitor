import SemaphoreCiAdapter from './adapters/SemaphoreCiAdapter'

class ProviderFactory {
  static deduceProvider(providerType) {
    switch (providerType) {
      case 'SEMAPHORE':
        return SemaphoreCiAdapter
      default:
        throw(`Undefined adapter: ${providerType}`)
    }
  }
}

export default ProviderFactory
