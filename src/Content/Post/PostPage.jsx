import '../../App.css';
import React from 'react';
import PostTypeSelector from './PostTypeSelector';
import Header  from '../../Header/Header';

function PostPage(){
  return (
    <div className="PostPage">
      <Header />
      <div style={{maxWidth: '1000px', margin:'auto'}}>
        <PostTypeSelector />
      </div>
    </div>
  );
}

export default PostPage;
