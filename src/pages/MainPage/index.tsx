
import { useAnimes } from "../../hooks/useAnimes"
import Loading from '../../components/Loading';

import './index.css'
import star from '../../assets/icons/star.svg'

const HomePage = () => {

    const { isLoading, animes } = useAnimes()

    if ( isLoading ) {
        return <Loading />
    }

    return (
        <div className="mt-5">
            <h1 className="text-white">List of Animes</h1>
            <hr style={{ color: 'white'}} />
            {
                animes.map( ({mal_id, title, url, synopsis, images, score}) => (
                    <div className="card" key={mal_id} style={{ marginBottom: 15}}>
                        <div className="container">
                            <div className="card-body">
                                <div className="card-full-title">
                                    <h2 className="card-title">{title}</h2><h5 className="card-score"><img src={star} alt="star" style={{ width: 25 }}/>{score}</h5>
                                </div>
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
        </div>
    )
}

export default HomePage
