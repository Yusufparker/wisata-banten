import { Link } from "react-router-dom"

import { useState, useEffect } from "react"
import dataTour from "../utils/data_wisata.json"


const CardList = ({data}) =>{

    return(
        <Link to={`/destinasi/${data.id}`} className="item overflow-hidden" data-aos="zoom-in-up">
            <img src={data.image} alt="pantai carita" className="h-100" />
            <p className="fs-14 text-white text-shadow-lg">{data.name}</p>
        </Link>
    )
}







const PopularTours = () => {
    const [tours, setTours] =useState([])
    useEffect(() => {
        setTours(dataTour)
    },[])

    

    return (
        <div className="popular-tours container mt-5 mb-5 text-center">
            <h2>Tempat Wisata Paling Populer</h2>
            <p className="fs-12 ">Temukan pesona dan keindahan Banten dengan menjelajahi destinasi liburan paling populer</p>
            <div className="list-popular-tour mt-4 ">
                
                {tours
                    .filter((data) => data.populer === true)
                    .map((data) => (
                        <CardList key={data.id} data={data} />
                    ))}
            </div>
        </div>
    )
}

export default PopularTours
