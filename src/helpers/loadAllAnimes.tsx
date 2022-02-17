import { animesApi } from "../api/animeApi"
import { Anime, Datum, GetAllAnimes } from "../interfaces/getAllAnimes"


export const loadAllAnimes = async (): Promise<Anime[]> => {
    const resp = await animesApi.get<GetAllAnimes>('/anime')
    const animeList = resp.data.data

    return AnimeAllList( animeList )

}

const AnimeAllList = ( animeList: Datum[] ): Anime[] => {
    const animeArr: Anime[] = animeList.map( anime => {


        
        return {
            mal_id: anime.mal_id,
            url: anime.url,
            title: anime.title,
            synopsis: anime.synopsis,
            background: anime.background,
            images: anime.images
        }
    })

    return animeArr;
}