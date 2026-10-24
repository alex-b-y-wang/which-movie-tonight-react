import React from 'react'

export default function MovieTitle(props) {
    const changeHandler=()=>{
        props.chooseMovie();
        props.setLoadMovie(true)
    }
  return (
    <div className="title-content"  onClick={changeHandler}>
        <h3>
         {!props.loadMovie&& <p>Which movie for tonight?</p>}
         {props.loadMovie&&<p>{props.title}</p>}
        </h3>
        <div className="intro">
          {" "}
          {props.loadMovie &&<p>{props.promote}</p>}
         {!props.loadMovie&&<p>Click for inspriation</p>} 
          {" "}
        </div>
      </div>
  )
}
