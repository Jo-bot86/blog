import React from 'react';

import Layout from '../components/layout';
import PostList from '../components/postlist';

export default function homepage() {
  return (
    <div>
      <div className="about">
        Hi! I'm Josef. In the past I did my bachelor in math. Since then I have been working with various programming languages and concepts. I will post about these at regular intervals. From time to time, non-programming topics will come up as well. Just everything I'm interested in :)
      </div>
      <div>
        <Layout>
          <PostList />
        </Layout>
      </div>
    </div>
  )
}
