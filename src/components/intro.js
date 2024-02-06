function Intro(props) {
  return (
    <>
     <p style={{margin: "1px 1px", fontSize:"20px"}}><strong>Nama:</strong> {props.nama}</p>
     <p style={{margin: "10px 1px", fontSize:"20px"}}><strong>Kelas:</strong> {props.kelas}</p>
     <p style={{margin: "10px 1px", fontSize:"20px"}}><strong>Sekolah:</strong> {props.sekolah}</p>
    
    </>
  );
}

export default Intro;
