import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import style from "./MovieComponent.module.css"

function UniToHtml(str){
    return str.replaceAll('&#39;', '\'')
        .replaceAll('&nbsp', ' ')
        .replaceAll('&amp;', '&')
        .replaceAll('&lt;;', '<')
        .replaceAll('&rt;', '>')
        .replaceAll('&#40;', '(')
        .replaceAll('&#41;', ')');
}

function Moive({id, coverImage, title, year, summary, genres}){
    let text = UniToHtml(summary);

    return(
            <div className={style.movie}>
                <img className={style.movie__img} src={coverImage} alt={title}/>
                <div>
                    <Card.Header>
                    <h2 className={style.movie__title}>
                        <Link to={`/movie/${id}`} >{title}</Link>
                    </h2>
                    <h3 className={style.movie__year}>{year}</h3>
                    </Card.Header>
                    <p>
                        {text.length > 235 ? `${text.slice(0,235)}...` : text}
                    </p>
                    <ul className={style.movie__genres}>
                        {genres.map((g, idx) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
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