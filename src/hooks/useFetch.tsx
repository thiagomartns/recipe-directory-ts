import React, { useState, useEffect } from 'react'

const useFetch = <T extends unknown> (url: string) => {

  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            console.log("the fetch was aborted");
          } else {
            setIsPending(false);
            setError("Could not fetch the data");
          }
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    }
  }, [url])

  return (
    {  data, isPending, error }
  )
}

export default useFetch