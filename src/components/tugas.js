import { React } from "react";
// import { Table } from "react-bootstrap/Table";

function Tugas() {
    const makanans = [
        {
            nama: "Seblak",
            harga: 20000,
        },
        {
            nama: "Ayam Geprek",
            harga: 15000,
        },
        {
            nama: "Sate ayam",
            harga: 8000,
        },
    ];

    const total_bayar = makanans.reduce((total_bayar, makanan) => total_bayar + makanan.harga, 0);

   

    return (
        <div style={{ padding: "50px" }} className="table">
            <h2 style={{margin: "10px 1px", fontSize:"20px"}}>Daftar Makanan </h2>
            <table border={1}>
                <thead>
                    <tr className="makan">
                        <th style={{ width: "20px" }}>No</th>
                        <th>Nama Makanan</th>
                        <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    
                {makanans
                        // .filter((makanan) => makanan.harga < 11000)
                        .map((makanan, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{makanan.nama}</td>
                                <td>{makanan.harga}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <br/>
            <h2 style={{margin: "10px 1px", fontSize:"20px"}}>Daftar Makanan di bawah Rp.10000 </h2>
            <table border={1}>
                <thead>
                    <tr className="makan">
                        <th style={{ width: "20px" }}>No</th>
                        <th>Nama Makanan</th>
                        <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {makanans
                        .filter((makanan) => makanan.harga < 11000)
                        .map((makanan, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{makanan.nama}</td>
                                <td>{makanan.harga}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <h1 style={{margin: "10px 1px", fontSize:"20px"}}>Total Harga: {total_bayar}</h1>
            <br />
        </div>
        
    );
}

export default Tugas;