import React from 'react'
import './Blogitem.css'
import Chip from '../../../../components/common/Chip'
import { Link } from 'react-router-dom'

const Blogitem = ({blog :{id,description,title,category,createdAt,cover,authorname , authavatar}}) => {
  return (
<div className="blogitem">
  <img src={cover} alt="cover" className='cover' />
  <Chip lable= {category}/>
  <h3>{title}</h3>
  <p className='blogdata'>{description}</p>
  <footer>
    <div className="blogauth">
      <img src={cover} alt="authavatar" />
    </div>
    <h6>{authorname}</h6>
    <p>{createdAt}</p>
    <Link to={ `/blog/${id}` } className='linka'>
      <p>Learn more</p>
       </Link>
  </footer>
</div>
  )
}

export default Blogitem;
