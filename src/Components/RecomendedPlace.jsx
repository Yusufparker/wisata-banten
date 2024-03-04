import { Link } from "react-router-dom"

const RecomendedPlace = ({penginapan}) => {
    const jumlah = penginapan.length
    return (
        <div className="container mt-5  mb-5">
            <h4 className="fw-bold">Penginapan Terdekat</h4>
            <p>{jumlah} Penginapan terdekat ditemukan</p>

            <div className="row mt-5">
                {
                    penginapan.map(p => (
                        <div className="col-md-4 mb-5" key={p.id}>
                            <div style={{height:"300px"}} className="overflow-hidden ">
                                <img src={p.image} alt={p.name} className="h-100 w-100" />
                            </div>
                            <div className="mt-3">
                                <div>
                                    <h6 className="fw-bold">{p.name}</h6>
                                    {
                                        p.harga <= 0 ?
                                            <p className="fs-14">Harga tidak diketahui</p>

                                        :
                                            <p className="fs-14">Harga Mulai dari <span className="text-danger ms-3">Rp. {p.harga.toLocaleString()}</span></p>

                                    }
                                    <Link className="fs-12 d-inline-block btn btn-success" to={`https://wa.me/${p.contact}?text=Halo Kak, apa masih ada kamar kosong?`} target="_blank">Hubungi Admin</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecomendedPlace
