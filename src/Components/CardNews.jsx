
import { Link } from "react-router-dom"
const CardNews = ({n}) => {
    return (
        <Link to={n.link}  target="_blank"  className="news-card text-decoration-none text-dark"  data-aos="zoom-in-up" >
            <img src={n.thumbnail} className="w-100" alt={n.title} />
            <div className="mt-3">
                <h5 className="fs-16 fw-bold ">{n.title}</h5>
            </div>
        </Link>
    )
}

export default CardNews
 