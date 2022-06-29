import {Link} from "react-router-dom";

function Main(){
    return(
        <div>
            <h1>Main</h1>
            <ul>
                <li><Link to={"react-movie/movies"}>영화</Link></li>
                <li><Link to={"react-movie/books"}>도서 제작중....</Link></li>
            </ul>
        </div>
    )
}

export default Main;