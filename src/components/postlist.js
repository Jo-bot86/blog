import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Markdown from 'react-markdown';

import postlist from '../posts/posts.json';
import './style.css';

const Postlist = () => {
  const excerptList = postlist.map(post => {
    return post.content.split(" ").slice(0,15).join(" ")
  })
  console.log(excerptList)
  return (
    <Router>
      <div className="postlist">
        <h1 className="title">All Posts</h1>
        {postlist.length &&
          postlist.map((post, i) => {
            return (
              <div className="post" key={post.id}>
                <h3>{post.title}</h3>
                <small>Published on {post.date} by {post.author}</small>
                <hr />
                <div className="content">
                  <Markdown children={excerptList[i] + " ..."} />
                  read more
                </div>
              </div>
            )
          })}
      </div>
    </Router>
  )
}

export default Postlist;