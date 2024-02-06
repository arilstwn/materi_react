import React from 'react'

function event() {

      const handleClick = () => {
        alert("Berhasil!!!");
      };

    //   function MissedGoal() {
    //     return <h1>MISSED!</h1>;
    //   }

     

    //   function Goal(props) {
    //     const isGoal = props.isGoal;
    //     if (isGoal) {
    //         return<MadeGoal/>;
    //     }
    //     return <MissedGoal/>;
    //   }
 
  return (
    <div>
        <button onClick={handleClick}>Click Here</button>
    </div>
  )

}

export default event