import { Loading } from "../components/Loading"
import { useAnimes } from "../hooks/useAnimes"

export const HomePage = () => {

    const { isLoading, animes } = useAnimes()


    return (
        <div className="mt-5">
            <h1 className="text-white">Lista de Animes</h1>
            <hr style={{ color: 'white'}} />


            {
                animes.map( ({mal_id, title, synopsis, url, images}) => (
                    <div className="card" key={mal_id} style={{ marginBottom: 15}}>
                    {/* <img src="..." className="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <h5 className="card-title">{title }</h5>
                            <p className="card-text">{synopsis}</p>
                            <a href={url} className="card-text">{url}</a>
                            <br />
                            <img 
                                alt={title}
                                // src={images}
                            />
                        </div>
                    </div>
                ))
            }

            {
                isLoading && <Loading />
            }

           
        </div>
    )
}
