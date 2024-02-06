
import React from 'react';
import { Carousel } from 'react-bootstrap';

function Tambahan() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="https://i0.wp.com/waritaku.com/wp-content/uploads/2023/05/20230515_235915.jpg"
          alt=""
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto "
          src="https://i0.wp.com/www.rukita.co/stories/wp-content/uploads/2022/10/Kage-no-Jitsuryoukusha-ni-Naritakute-The-Eminence-in-Shadow-Visual-Utama-1.jpeg?fit=800%2C565&ssl=1"
          alt=""
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="https://assets.ggwp.id/2024/01/anime-blue-archive-featured-640x360.jpg"
          alt=""
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Tambahan;

