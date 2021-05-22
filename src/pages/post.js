import React from 'react';
import { Redirect } from 'react-router-dom';
import Markdown from 'react-markdown';

import postList from '../posts/posts.json';
import Layout from '../components/layout';
import './style.css';



const Post = (props) => {
  const validId = parseInt(props.match.params.id)
  if(!validId){
    return <Redirect to="/404" />
  }
  const fetchedPost = {}
  postList.forEach((post,i) => {
    if(validId === post.id){
      fetchedPost.title = post.title
      fetchedPost.author = post.author
      fetchedPost.date = post.date
      fetchedPost.content = post.content
    }
  })
  return (
    <Layout>
      <div className="post">
        <h2>{fetchedPost.title}</h2>
        <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
        <hr />
        <Markdown children={fetchedPost.content} escapeHtml={false}/>
      </div>
    </Layout>
  )
}

export default Post
