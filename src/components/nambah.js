import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <div className="d-flex justify-content-around mb-3">
        
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://pbs.twimg.com/media/FeYSuECXoAAC3YB.jpg:large" />
        <Card.Body>
          <Card.Title style={{color: "black"}}>Keterangan <span style={{color: "#4070f4"}}>Anime</span></Card.Title>
          <Card.Text style={{color: "black"}}>
           <span style={{color: "blue"}}>Anime</span> ini menceritakan sebuah seorang siswi sma yang tidak mempunyai teman satu pun dan dia berigin seseorang dari planet lain yang manjadi temanya. 
          </Card.Text>
          <Button variant="primary">Tonton Anime</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://galleryamh.files.wordpress.com/2018/06/slime-witch.jpg" />
        <Card.Body>
          <Card.Title style={{color: "black"}}>Keterangan <span style={{color: "#4070f4"}}>Anime</span></Card.Title>
          <Card.Text style={{color: "black"}}>
            <span style={{color: "blue"}}>Anime</span> ini bercerita tentang seorang gadis kantoran yang meninggal karena kelelahan saat bekerja dan berengkarnasi ke isekai dan menjadi puan sihir di padang sihir.
          </Card.Text>
          <Button variant="primary">Tonton Anime</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81stfpk2HvL._AC_UF1000,1000_QL80_.jpg" />
        <Card.Body>
          <Card.Title style={{color: "black"}}>Keterangan <span style={{color: "#4070f4"}}>Anime</span></Card.Title>
          <Card.Text style={{color: "black"}}>
            <span style={{color: "blue"}}>Anime</span> ini bercerita tentang seorang gadis kantoran yang meninggal karena kelelahan saat bekerja dan berengkarnasi ke isekai dan menjadi puan sihir di padang sihir.
          </Card.Text>
          <Button variant="primary">Tonton Anime</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;