import useSWRV from 'swrv'
const useCats = () => {
    return useSWRV(['https://api.thecatapi.com/v1/images/search?limit=20?order=ASC', {
        headers: {
            'x-api-key': import.meta.env.CAT_API_KEY as string
        }
    }], fetch, {
        revalidateOnFocus: true
    })
}

export default useCats