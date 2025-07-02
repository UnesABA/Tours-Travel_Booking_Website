import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    const fetchData = async ()=>{
      setLoading(true)
      try { 
        const res = await fetch(url)
        if(!res.ok){
          setError("Failed to fetch")
          alert("Failed to fetch")
        }

        const resultat = await res.json()
        setData(resultat.data)
        
      } catch (error) {
        setError(error.message)
        alert("Failed to fetch")
        setLoading(false)
      }
    }

    fetchData()
  }, [url])
  return {
    data,
    error,
    loading
  }
}

export default useFetch