import useSWRV from 'swrv'
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage'
const fetcher = (url: string, options: Parameters<typeof fetch>[1]) => fetch(url, options).then(res => res.json())
const useCats = () => {
    return useSWRV(['https://api.thecatapi.com/v1/images/search?limit=20&order=ASC', {
        headers: {
            'x-api-key': import.meta.env.CAT_API_KEY as string
        }
    }], fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        cache: new LocalStorageCache(),
    })
}

export default useCats