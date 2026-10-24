import React from 'react'
import {AiFillStar,AiTwotoneCalendar,AiFillTag} from 'react-icons/ai'
export default function UtilityInfo(props) {
  return (
    <div className="utility-info">
    <ul className="utility-list">
      <li>
        <AiFillStar className='licon'></AiFillStar>
       {props.rating}
      </li>
     
      <li>
        <AiTwotoneCalendar className="licon icon-dat"></AiTwotoneCalendar>{props.year}
      </li>
      <li>
        <AiFillTag className="licon icon-tag"></AiFillTag>
        {props.genres.join(", ")}
      </li>
    </ul>
  </div>
  )
}
