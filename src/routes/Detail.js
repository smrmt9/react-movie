import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Moive from "../components/MovieComponent";


function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovieDetail = async ()  => {
        const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const data = await res.json();
        const movieData = data.data.movie;
        console.log(movieData);
        setMovie(movieData);
        setLoading(false);

    }

    useEffect(() => {
        getMovieDetail();
    },[]);

    return(
        <div>
            <h1>Detail</h1>
            {loading ?
                <h2>Loading ...... </h2> :
                <Moive
                    id={movie.id}
                    coverImage={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary != null ? movie.summary : "설명 없음"}
                    genres={movie.genres}
                />
            }
        </div>
    );
}

export default Detail;