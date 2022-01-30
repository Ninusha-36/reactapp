import React, { Component } from 'react';
import './post.css'
import axios from 'axios';
import PostForm from './PostForm';

export default class PostList extends Component {
  
  constructor(props){ // State Variable , rconst
    super(props)
  
    this.state = {
      posts :  []  // Empty array
    }
  }
  
    componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      this.setState({
        posts : response.data
      })
      console.log(response.data)
    })
  }

  render(){
    const {posts} = this.state
    return <div className="postLit"> 
       
      <h2>Post List 123</h2>
      <PostForm/> 
      <p className="Notice">Note : API Link <a href='https://jsonplaceholder.typicode.com/posts' target="_blank">https://jsonplaceholder.typicode.com/posts</a> </p>
      {
        posts.map(posts => <div key={posts.id}><h3>{posts.title}</h3><p>{posts.body}</p></div>)
      }
    </div>;
}
}
