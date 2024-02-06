import React, { useState, useEffect } from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';

const Tugas = () => {
    const [costumes, setCostumes] = useState([]);
    const [figurines, setFigurines] = useState([]);
    const [hodies, setHodies] = useState([]);
    const [gantunganKunciAnime, setGantunganKunciAnime] = useState([]);
    const [posterAnime, setPosterAnime] = useState([]);

    useEffect(() => {
        const fetchCostumes = async () => {
            try {
                const response = await fetch("http://localhost:3030/products");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCostumes(data);
            } catch (error) {
                console.error('Error fetching costume data:', error);
            }
        };
        fetchCostumes();
    }, []);

    useEffect(() => {
        const fetchFigurines = async () => {
            try {
                const response = await fetch("http://localhost:3030/figuran_anime");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFigurines(data);
            } catch (error) {
                console.error('Error fetching figurine data:', error);
            }
        };
        fetchFigurines();
    }, []);

    useEffect(() => {
        const fetchHodies = async () => {
            try {
                const response = await fetch("http://localhost:3030/hodie_anime");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setHodies(data);
            } catch (error) {
                console.error('Error fetching hodie data:', error);
            }
        };
        fetchHodies();
    }, []);

    useEffect(() => {
        const fetchGantunganKunciAnime = async () => {
            try {
                const response = await fetch("http://localhost:3030/gantungan_kunci_anime");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGantunganKunciAnime(data);
            } catch (error) {
                console.error('Error fetching gantungan kunci anime data:', error);
            }
        };
        fetchGantunganKunciAnime();
    }, []);
    useEffect(() => {
        const fetchPosterAnime = async () => {
            try {
                const response = await fetch("http://localhost:3030/poster_anime");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosterAnime(data);
            } catch (error) {
                console.error('Error fetching poster  anime data:', error);
            }
        };
        fetchPosterAnime();
    }, []);

    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.velofee.com/wp-content/uploads/2023/11/toko-jual-baju-anime.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Baju Anime nya onican</h3>
                        <p>Kami menyediakan baju anime yang beragam.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Tambahkan Carousel.Item untuk slide lain jika diperlukan */}
            </Carousel>
    <br />
    <br />
    <br />
            <div className="row">
                {costumes.map((costume) => (
                    <div key={costume.id} className="col-md-4 mb-4">
                        <Card>
                            <Card.Img variant="top" src={costume.image} alt={costume.nama_costume} style={{ height: '250px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{costume.nama_costume}</Card.Title>
                                <Card.Text>
                                    <p>Ukuran: {costume.ukuran}</p>
                                    <p>Harga: {costume.harga}</p>
                                </Card.Text>
                                <Button variant="primary">Beli Sekarang</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="row">
                {figurines.map((figurine) => (
                    <div key={figurine.id} className="col-md-4 mb-4">
                        <Card>
                            <Card.Img variant="top" src={figurine.image} alt={figurine.nama_figurine} style={{ height: '250px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{figurine.nama_figurine}</Card.Title>
                                <Card.Text>
                                    <p>Ukuran: {figurine.ukuran}</p>
                                    <p>Harga: {figurine.harga}</p>
                                </Card.Text>
                                <Button variant="primary">Beli Sekarang</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="row">
                {hodies.map((hodie) => (
                    <div key={hodie.id} className="col-md-4 mb-4">
                        <Card>
                            <Card.Img variant="top" src={hodie.image} alt={hodie.nama_hodie} style={{ height: '250px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{hodie.nama_hodie}</Card.Title>
                                <Card.Text>
                                    <p>Ukuran: {hodie.ukuran}</p>
                                    <p>Harga: {hodie.harga}</p>
                                </Card.Text>
                                <Button variant="primary">Beli Sekarang</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="row">
                {gantunganKunciAnime.map((gantunganKunci) => (
                    <div key={gantunganKunci.id} className="col-md-4 mb-4">
                        <Card>
                            <Card.Img variant="top" src={gantunganKunci.image} alt={gantunganKunci.nama_gantungan_kunci} style={{ height: '250px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{gantunganKunci.nama_gantungan_kunci}</Card.Title>
                                <Card.Text>
                                    <p>Harga: {gantunganKunci.harga}</p>
                                </Card.Text>
                                <Button variant="primary">Beli Sekarang</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="row">
                {posterAnime.map((posterAnime) => (
                    <div key={posterAnime.id} className="col-md-4 mb-4">
                        <Card>
                            <Card.Img variant="top" src={posterAnime.image} alt={posterAnime.nama_poster} style={{ height: '250px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{posterAnime.nama_poster}</Card.Title>
                                <Card.Text>
                                    <p>Ukuran: {posterAnime.ukuran}</p>
                                    <p>Harga: {posterAnime.harga}</p>
                                </Card.Text>
                                <Button variant="primary">Beli Sekarang</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            </div>

    );
}

export default Tugas;
