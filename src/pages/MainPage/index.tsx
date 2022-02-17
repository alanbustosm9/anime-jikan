
import { useAnimes } from "../../hooks/useAnimes"
import Loading from '../../components/Loading';

import './index.css'

const HomePage = () => {

    const { isLoading, animes } = useAnimes()

    return (
        <div className="mt-5">
            <h1 className="text-white">Lista de Animes</h1>
            <hr style={{ color: 'white'}} />
            {
                animes.map( ({mal_id, title, url, synopsis, images}) => (
                    <div className="card" key={mal_id} style={{ marginBottom: 15}}>
                        <div className="container">
                            <div className="card-body">
                                <h2 className="card-title">{title}</h2>
                                <div className="card-anime">
                                    <a href={url} className="card-text">
                                        <img 
                                            alt={title}
                                            src={images.jpg.image_url}
                                        />
                                    </a>
                                    <p className="card-text m-3">{synopsis}</p>
                                </div>
                            </div>
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

export default HomePage
