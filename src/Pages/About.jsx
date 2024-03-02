
const About = () => {
    return (
        <div className="about-page mb-5 pb-5">
            <div className="sub-header  text-white bg-gelap mt-5 mb-5  position-relative">
                <div className="card-header position-absolute p-5 bg-warning text-dark">
                    "<span className="fw-bold">Traveling</span> – it leaves you speechless, then turns you into a storyteller."  - Ibn Battuta
                </div>
            </div>  
            <div className="container mt-5 mb-5">
                <h2 className="fw-bold">Tentang</h2>
                <div className="row mt-5">
                    <div className="col-md-7 position-relative">
                        <div className="row">
                            <div className="col-6 overflow-hidden" style={{height:"500px"}}>
                                <img src="img/menara banten senja.jpg" alt="menara banten wisata banten" className="w-100" />
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center quotes">
                                <p className="fs-20 ff-serif fst-italic">"The world is a book, and those who do not travel read only one page."</p>
                            </div>
                        </div>
                        <div className="position-absolute p-5 bg-white desc ">
                            Banten, provinsi yang kaya akan sejarah dan keindahan alam, merupakan destinasi yang menakjubkan bagi para pelancong. Dengan pesona alamnya yang menawan, warisan budayanya yang kaya, dan beragam atraksi wisatanya, Banten menawarkan pengalaman yang tak terlupakan bagi setiap pengunjung.
                        </div>
                    </div>
                    <div className="col-md-5 pt-md-5 overflow-hidden" style={{height:"550px"}}>
                        <img src="img/pantai.jpg" alt="pantai" className="w-100" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="mt-5  p-5 pe-3 ps-3 ">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 fs-14 d-flex justify-content-center align-items-center">
                            <div> 
                                <p className="mb-5">Pantai Sawarna  menjadi destinasi favorit bagi wisatawan yang ingin menikmati keindahan alam Banten. Di sini, Anda dapat menikmati pasir  yang lembut, ombak yang tenang, serta panorama matahari terbenam yang memukau.</p>
                                <p className="mb-5">Sesampainya di pantai, Anda akan disambut oleh pasir putih yang lembut di kaki Anda. Ombak yang tenang membelai pantai, menciptakan suasana yang tenang dan menenangkan. Salah satu hal yang paling dinantikan oleh pengunjung adalah menyaksikan matahari terbenam di ufuk barat, menciptakan palet warna yang memukau di langit.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="img/6.jpg" className="w-100" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
