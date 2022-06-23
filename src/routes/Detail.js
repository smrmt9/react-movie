import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Moive from "../components/MovieComponent";
import {Container} from "react-bootstrap";


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
        <Container>
            {loading ?
                <h2>Loading ...... </h2> :
                <Moive
                    id={movie.id}
                    coverImage={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.description_full != null ? movie.description_full : "..."}
                    genres={movie.genres}
                />
            }
        </Container>
    );
}

export default Detail;