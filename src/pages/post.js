import React from 'react';
import { Redirect } from 'react-router-dom';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'


import postList from '../posts/posts.json';
import Layout from '../components/layout';
import './style.css';

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props} />
    )
  }
}

const Post = (props) => {
  const validId = parseInt(props.match.params.id)
  if (!validId) {
    return <Redirect to="/404" />
  }
  const fetchedPost = {}
  postList.forEach((post, i) => {
    if (validId === post.id) {
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
        <Markdown children={fetchedPost.content} components={components} />
      </div>
    </Layout>
  )
}

export default Post
