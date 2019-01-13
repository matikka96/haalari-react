import React, { Component } from "react";
import NavBar from "./navbar";
import Posts from "./posts";
import axios from "axios";
import Config from "../config";
import SinglePost from "./singlepost"

const SERVER = Config.URL.express;

class Home extends Component {
  componentDidMount() {
    console.log("Home - Mounted");
    this.loadAllPosts();
  }

  state = {
    posts: [],
    userToken: '',
    selectedPost: null
  };

  
  setSelectedPost = (post) => {
    this.setState({selectedPost: post});
    this.loadAllPosts();
  }

  clearPost = () => {
    this.setState({selectedPost: null});
    this.loadAllPosts();
  }
  
  loadAllPosts = () => {
    console.log("Loading posts");
    // Axios API request
    axios.get(SERVER+"/public/loadall").then(res => {
      this.setState({ posts: res.data });
    });
  };

  // loadPost = () => {
  //   let id = document.getElementById("post-id").value;
  //   axios.get("/post/loadall", { postId: id }).then(res => {
  //     console.log(res.data);
  //   });
  // };

  handleOpenPost = post => {
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    console.log(index);
    const tempid = posts[index].id;
    console.log("Post clicked: " + tempid);
  };

  handleVote = postid => {
    let post = this.state.posts.find(post => post._id === postid)
    const checkVote = obj => obj.userId === this.props.userData.userInfo._id;

    if(post.postVotes.some(checkVote)===false){
      axios.post("/user/vote", {token: this.props.userData.userToken, postId : postid}).then(response => {
        console.log(response.data);
        if(response.data === 'User not verified'){
          // HANDLE SOME KINDA TOAST HERE
        }
        this.loadAllPosts();
      })  
    }else{
      this.handleUnvote(postid);
    }
  };

  handleUnvote = postid => {
    axios.post("/user/unvote", {token: this.props.userData.userToken, postId : postid}).then(response => {
      console.log(response.data);
      this.loadAllPosts();
    })  
};

  render() {
    return (
      <>
        <NavBar/>
        <main className="container col-md-6 col-md-offset-3">
        {this.state.selectedPost ? (
            <SinglePost 
              post={this.state.selectedPost} 
              onClearPost={this.clearPost}
              onVote={this.handleVote}
              />
          ) : 
            <Posts
              onLoadAll={this.loadAllPosts}
              posts={this.state.posts}
              onVote={this.handleVote}
              onOpenPost={this.setSelectedPost}
        />}
        </main>
      </>
    );
  }
}

export default Home;
