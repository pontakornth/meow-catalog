import useSWRV from 'swrv'
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage'
import { Ref } from 'vue'
const fetcher = (url: string, options: Parameters<typeof fetch>[1]) => fetch(url, 
        {...options, 
            headers: {
                'x-api-key': import.meta.env.CAT_API_KEY as string
            }
        })
    .then(res => res.json())

const useWithAPIKey = (url: string | (() => string)) => {
    return useSWRV(url , fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        cache: new LocalStorageCache(),
    })
}

const useCats = (breedId: Ref<string>) => useWithAPIKey(() => `https://api.thecatapi.com/v1/images/search?limit=20&order=ASC${breedId.value.length > 0 && `&breed_id=${breedId.value}`}`)
export const useCatBreeds = () => useWithAPIKey('https://api.thecatapi.com/v1/breeds/')

export default useCats