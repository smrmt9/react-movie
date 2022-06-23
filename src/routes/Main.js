import {Link} from "react-router-dom";

function Main(){
    return(
        <div>
            <ul>
                <li><Link to={"movies"}>영화</Link></li>
            </ul>
        </div>
    )
}

export default Main;