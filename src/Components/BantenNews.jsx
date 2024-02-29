import { useEffect, useState, lazy, Suspense, useRef } from "react"
import axios from "axios"


const api = "https://api-berita-indonesia.vercel.app/republika/terbaru/";
const CardNews = lazy(() => import('../Components/CardNews'))


function Spinner() {
    return(
        <div className="text-center mt-5 mb-5 pt-5 pb-5">
            <div className="spinner-border text-primary" style={{width: "5rem", height: "5rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
    
}


const BantenNews = () => {
    const [news, setNews] = useState([])
    const carouselRef = useRef(null);

    useEffect(() =>{
        const fetchNews = async () =>{
            try {
                const response = await axios.get(api)
                setNews(response.data.data.posts)
            } catch (error) {
                console.log(error);
            }
        }

        fetchNews()
    },[])

    const handleScroll = (scrollOffset) => {
        carouselRef.current.scrollLeft += scrollOffset;
    };


    return (
        <div className="berita mb-5 mt-5">
            <div className="container d-flex justify-content-between">
                <h2>Berita Terbaru</h2>
                <div className="btn-review d-flex justify-content-end mt-4">
                    <button className="btn-left me-3 border-0 bg-warning p-2 ps-3 pe-3" onClick={() => handleScroll(-700)}><i className="bi bi-arrow-left"></i></button>
                    <button className="btn-right border-0 bg-warning p-2 ps-3 pe-3" onClick={() => handleScroll(700)}><i className="bi bi-arrow-right"></i></button>
                </div>

            </div>
            <div className="carousel-news d-flex mt-5" ref={carouselRef}>
                <Suspense fallback={<Spinner/>}>
                    {
                        news.slice(0, 5).map((n, index) => (
                            <CardNews n={n} key={index} />
                        ))
                    }
                </Suspense>
            </div>
        </div>
    )
}

export default BantenNews
