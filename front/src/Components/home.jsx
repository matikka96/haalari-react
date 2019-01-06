import React, { Component } from 'react';
import NavBar from './navbar';
import Posts from './posts';
import axios from 'axios';
import Config from '../config';

const BACKURL = Config.URL.express;
const PROXY = Config.URL.proxyurl;

class Home extends Component {

  constructor(props) {
    super(props);
    console.log("Home - Constructor")
  }

  componentDidMount(){
    console.log("Home - Mounted")
    this.loadAllPosts();
    // this.callBackendAPI()
    //   .then(res => this.setState({ data: res.express }))
    //   .catch(err => console.log(err));
  }

  state = {
        posts: []
  }
  
  loadProfile = () => {
    axios.get("auth/profile").then(res => {
      console.log(res.data);
    })
  }

  loadAllPosts = () => {
    console.log("Loading");
    fetch("/post/loadall")
    .then(res => res.json())
    .then(posts => this.setState({posts}))
  }

  loadPost = () => {
    let id = document.getElementById('post-id').value;
    axios.get("/post/loadall", {postId : id}).then(res => {
      console.log(res.data);
    })
  }
  
  handleOpenPost = post => {
    const posts = [...this.state.posts];
    const index = posts.indexOf( post );
    console.log(index)
    const tempid = posts[index].id;
    console.log("Post clicked: "+tempid);
  };

  handleVote = post => {
    console.log("Vote casted")
 
};

  render() {
    return (
     
      <>
        <NavBar>
          <li class="nav-item active">
            <a class="nav-link" href="/form">New Post <span class="sr-only">(current)</span></a>
          </li>
        </NavBar>
        <main className="container">
        
           <Posts 
            posts={this.state.posts}
            onVote={this.handleVote}
            onOpenPost={this.handleOpenPost}
            
            /> 
        </main>
      </>
    );
  }
}

export default Home;
