import useSWRV from 'swrv'
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage'
const fetcher = (url: string, options: Parameters<typeof fetch>[1]) => fetch(url, options).then(res => res.json())

const useWithAPIKey = (url: string) => {
    return useSWRV([url, {
        headers: {
            'x-api-key': import.meta.env.CAT_API_KEY as string
        }
    }], fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        cache: new LocalStorageCache(),
    })
}

const useCats = () => useWithAPIKey('https://api.thecatapi.com/v1/images/search?limit=20&order=ASC')
export const useCatBreeds = () => useWithAPIKey('https://api.thecatapi.com/v1/breeds/')

export default useCats