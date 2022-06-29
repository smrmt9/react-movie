import {useEffect, useState} from "react";
import Moive from "../components/MovieComponent";
import style from "./Home.module.css"

function Books() {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const getBooks = async() => {
        // cors 문제로 좀더 고민해봐야함
        const key = "";
        const response = await fetch(`https://book.interpark.com/api/bestSeller.api?key=${key}&categoryId=100&output=json`);
        console.log(response)
        const json = await response.json();
        console.log(json)
        setBooks([]);
        setLoading(false);

    }

    useEffect(() => {
        //getBooks();
    }, [])

    return (
        <div className={style.container}>
            {loading? <h1 className={style.loader}>Loading.....</h1> :
                <div className={style.movies}>
                {books.map((book) => (
                    <Moive
                        key={book.itemId}
                        id={book.itemId}
                        coverImage={book.coverLargeUrl}
                        title = {book.title}
                        year = {book.pubDate}
                        summary={book.description != null ? book.description : ""}
                        genres={book.genres}
                    />
                ))}
                </div>
            }
        </div>
    );
}
export default Books;