import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as ArrowDiag } from '../assets/img/arrow.diag.svg';

export default function Footer(props) {
  const num = props.nextNum.split(/([0-9a-z]+)/);
  const data = num[1].split(/([0-9]+)/);

  return (
    <div className={`Footer Footer--${props.type}`}>
      <div className='Footer__left'>
        {
          props.prevNum && props.prevTitle && props.prevUrl ?
            <Link to={props.prevUrl} className='Footer__link'>
              <div className={`Footer__num ${props.prevType ? `Footer__num--${props.prevType}` : ''}`}>{props.prevNum}</div>
              <div className='Footer__title'>{props.prevTitle}</div>
            </Link>
          : ''
        }
      </div>
      <Link to={props.nextUrl} className='Footer__right'>
        <div className='Footer__container'>
          <div className='Footer__heading' data-num={data[1]} data-let={data[2]}>next</div>
        </div>
        <ArrowDiag className='Footer__icon' />
        <div className='Footer__link'>
          <div className='Footer__num'>{props.nextNum}</div>
          <div className='Footer__title'>{props.nextTitle}</div>
        </div>
      </Link>
    </div>
  )
};
