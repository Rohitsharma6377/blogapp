import React from 'react'
import Blogitem from  './blog items/Blogitem'
import './Bloglist.css'
const Bloglist = ({blogs}) => {
    return (
        
        <div className="bloglist">
        {blogs.map(blog =>  <Blogitem blog={blog} key={blog.id}/>)}
    </div>

)
}

export default Bloglist;
