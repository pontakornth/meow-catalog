import useSWRV from 'swrv'
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage'
const useCats = () => {
    return useSWRV(['https://api.thecatapi.com/v1/images/search?limit=20&order=ASC', {
        headers: {
            'x-api-key': import.meta.env.CAT_API_KEY as string
        }
    }], undefined, {
        revalidateOnFocus: false,
        dedupingInterval: 30000,
        shouldRetryOnError: false,
        cache: new LocalStorageCache(),
    })
}

export default useCats