import React, { Component } from "react";
import NavBar from "./navbar";
import Posts from "./posts";
import axios from "axios";
import Config from "../config";

const SERVER = Config.URL.express;

class Home extends Component {
  

  componentDidMount() {
    console.log("Home - Mounted");
    this.loadAllPosts();
    this.getToken();
  }

  state = {
    posts: [],
    userToken: ''
  };

  getToken = () => {
    let token = this.props.location.search.split('?token=')[1];
    this.setState({userToken: token});
  }

  loadProfile = () => {
    axios.get("auth/profile").then(res => {
      console.log(res.data);
    });
  };

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
      console.log(this.state.posts.find(post => post._id == postid))
      let post = this.state.posts.find(post => post._id == postid)
      if(post.postVotes)
      axios.post("/user/vote", {token: this.state.userToken, postId : postid}).then(response => {
        console.log(response.data);
        this.loadAllPosts();
      })
  };

  handleUnvote = postid => {
    axios.post("/user/unvote", {token: this.state.userToken, postId : postid}).then(response => {
      console.log(response.data);
    })
};

  render() {
    return (
      <>
        <NavBar/>
        <main className="container col-md-6 col-md-offset-3">
          <Posts
            posts={this.state.posts}
            onVote={this.handleVote}
            onUnvote={this.handleUnvote}
            onOpenPost={this.handleOpenPost}
          />
        </main>
      </>
    );
  }
}

export default Home;
