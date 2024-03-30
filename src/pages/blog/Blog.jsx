import { useEffect, useState } from 'react';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { blogList } from '../../config/Data';
import Chip from '../../components/common/Chip';
import Empty from '../../components/common/empty/Empty';
import '../blog/Blog.css'

const Blog = () => {
  const{id}=useParams();
  const [blog, setBlog] = useState(null);

  useEffect(()=> {
    let blog=blogList.find(blog=>blog.id === parseInt(id));
    if(blog){
      setBlog(blog);
    }
  },[]);
    return (
    <div className='color'>
      <Link to= '/' className='goback'><span>&#8592;</span> Go back</Link>
      {
        blog ? (
        <div className="blogwrap">
         <header> 
          <p className="blogdate">
            Published{blog.createdAt}
          </p>
          <h1>{blog.title}</h1>
          <div className="subcategory">
            {blog.subcategory && blog.subcategory.map((category, index) => (
            <div>
               <Chip key={index} lable={category}/>
               </div>))}
          </div>
         </header>
         <img src={blog.cover} alt="blogcover" />
         <p className="blogdiscription">{blog.description}</p>
        </div>) : (<Empty/>)
      }
    </div>
  )
};

export default Blog;
