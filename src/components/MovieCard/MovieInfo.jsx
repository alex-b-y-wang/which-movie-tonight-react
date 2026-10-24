import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function MovieInfo(props) {
  return (
    <div className="card-info">
      <p onClick={props.chooseMovie}>{props.intro}</p>{" "}
      <a href={props.link} target="_blank" rel="noreferrer">
        Read more
        <AiOutlineArrowRight className="licon icon-arr icon-black"></AiOutlineArrowRight>
      </a>
    </div>
  );
}
