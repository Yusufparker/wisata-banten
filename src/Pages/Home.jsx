import heroVideo from "../assets/video/0221.mp4"





const Home = () => {
    return (
    <div className="home">
        <div className="hero overflow-hidden position-relative">
            <video src={heroVideo} className="w-100 object-fit-cover" autoPlay loop muted />
            <div className="position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="text-white text-center p-3 desc">
                    <h3  className="fw-bold text-shadow">Panduan Wisata</h3>
                    <h3 className="fw-bold text-shadow" style={{marginTop:'-10px'}}>Menggali Kekayaan Wisata Banten</h3>
                    <div className="input-grup mt-4   position-relative ">
                        <input type="text" className="w-100  border-0 shadow-lg "/>
                        <button className=" position-absolute border-0 bg-warning"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
    )
}

export default Home
