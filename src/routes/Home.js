import {useEffect, useState} from "react";
import Moive from "../components/MovieComponent";
import style from "./Home.module.css"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // Async & Await 란?
    // 비동기 함수를 만들기 위해서는 단순하게 함수 앞에 async를 붙이고
    // 해당 함수 내부에서 Promise 앞부분에 await 키워드를 사용한다.
    // 코드가 간결해지고, 가독성이 높아진다.
    // try / catch로 에러를 핸들링할 수 있다.
    // error 확인이 쉽다.
    const getMovies = async() => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
        const json = await response.json();
        console.log(json)
        setMovies(json.data.movies);
        setLoading(false);

    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div className={style.container}>
            {loading? <h1 className={style.loader}>Loading.....</h1> :
                <div className={style.movies}>
                {movies.map((movie) => (
                    <Moive
                        key={movie.id}
                        id={movie.id}
                        coverImage={movie.medium_cover_image}
                        title = {movie.title}
                        year = {movie.year}
                        summary={movie.summary != null ? movie.summary : ""}
                        genres={movie.genres}
                    />
                ))}
                </div>
            }
        </div>
    );
}
export default Home;