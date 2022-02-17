import { useEffect, useState } from "react"
import { loadAllAnimes } from "../helpers/loadAllAnimes"
import { Anime } from "../interfaces/getAllAnimes"

export const useAnimes = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [animes, setAnimes] = useState<Anime[]>([])


  useEffect(() => {
      
    loadAllAnimes()
        .then( animes => {
            setIsLoading(false)
            setAnimes( animes )
        })

  }, [])


  return {
      isLoading,
      animes
    }


}
