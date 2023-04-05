import React from "react";


const Favs = () => {

  const borrarStorage=()=>{
    localStorage.clear()
    window.location.reload()
  }

  const fav=JSON.parse(localStorage.getItem('favs')) 

  return (
    <>
      <h1>Dentists favs</h1>
      <div className="fav" >
        
        {fav ? <img src="./images/doctor.jpg" alt=""width={200}height={200} /> : null}

        {fav ? <p>{fav.name} <p>{fav.username}</p></p> : null}

        {fav ? <button className="btn2" onClick={borrarStorage}>Eliminar</button> : null}
        
      </div>
      
    </>
  )
}

export default Favs;
