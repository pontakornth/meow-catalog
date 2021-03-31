import useSWRV from 'swrv'
const useCats = () => {
    return useSWRV(['https://api.thecatapi.com/v1/images/search?limit=20', {
        headers: {
            'x-api-key': import.meta.env.CAT_API_KEY as string
        }
    }])
}

export default useCats