import React from "react";
import { useState } from "react";
import Bloglist from "./Bloglist/Bloglist";
import Header from "./Header";
import Search from "./search bar/Search";
import { blogList } from "../../config/Data";
import Nav from "../../components/navbar/Nav";
import '../blog/home.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Empty from "../../components/common/empty/Empty";
import Pages from "./Bloglist/Pages";
const Home = () => {
 const [blogs, setBlogs] = useState(blogList);
 const  [searchKey, setSearchKey] = useState('');
 //search submit
 const handelSearchSubmit=event =>{
  event.preventDefault();
  handelSearchResults()
 }
 //search for blogs 
 const handelSearchResults=()=>{
 const allblogs=blogList;
 const filterdBlogs=allblogs.filter(blog=> blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()))
 setBlogs(filterdBlogs);
  };
  const handelClearSearch =() =>{
    setBlogs(blogList);
    setSearchKey('');
  }
 

  return (
    <div className="Homepage">
      <Pages />
      <Header />
      <Search  value={searchKey} 
      clearsearch={handelClearSearch}
      handelsearchkey={(e)=> setSearchKey(e.target.value)}
      formSubmit={handelSearchSubmit}
      />
     {!blogs.length ? <Empty/> : <Bloglist blogs={blogs}/>}
    </div>
  );
};

export default Home;
