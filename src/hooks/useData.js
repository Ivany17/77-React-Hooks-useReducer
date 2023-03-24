import { useState, useEffect } from 'react';

export default function useData() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        getUsersJSON()
            .then((data) => setData({data}))
            .catch((err) => setError({err}))
            .finally(() => setIsFetching(false))
    }, [])

    return{
        data,
        error,
        isFetching
    }
}