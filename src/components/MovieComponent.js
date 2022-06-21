import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function Moive({id, coverImage, title, summary, genres}){
    return(
            <div>
                <img src={coverImage} alt={title}/>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                 </h2>
                <p>{summary}</p>
                <ul>
                    {genres.map((g, idx) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
    )
}

Moive.propTypes = {
    id : PropTypes.number.isRequired,
    coverImage : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
}

export default Moive;