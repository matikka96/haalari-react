import React, { Component } from "react";
import NavBar from "./navbar";
import Posts from "./posts";
import axios from "axios";
import Config from "../config";
import SinglePost from "./singlepost";

const SERVER = Config.URL.express;

class Home extends Component {
  componentDidMount() {
    this.loadAllPosts();
  }
  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      this.loadAllPosts();
    }
  }

  state = {
    posts: [],
    userToken: "",
    selectedPost: null
  };

  setSelectedPost = post => {
    this.setState({ selectedPost: post._id });
  };

  clearPost = () => {
    this.setState({ selectedPost: null });
  };

  loadAllPosts = () => {
    // Axios API request
    axios.get(SERVER + "/public/loadall").then(res => {
      this.setState({ posts: res.data });
    });
  };

  handleVote = postid => {
    let post = this.state.posts.find(post => post._id === postid);
    const checkVote = obj => obj.userId === this.props.userData.userInfo._id;

    if (post.postVotes.some(checkVote) === false) {
      axios
        .post("/user/vote", { token: this.props.userData.userToken, postId: postid })
        .then(response => {
          if (response.data === "User not verified") {
            // HANDLE SOME KINDA TOAST HERE
          }
        });
    } else {
      this.handleUnvote(postid);
    }
  };

  handleUnvote = postid => {
    axios
      .post("/user/unvote", { token: this.props.userData.userToken, postId: postid })
      .then(response => {});
  };

  render() {
    return (
      <>
        <NavBar userData={this.props.userData} />
        <main className="container col-md-6 col-md-offset-3">
          {this.state.selectedPost ? (
            <SinglePost
              post={this.state.posts.find(post => post._id === this.state.selectedPost)}
              onClearPost={this.clearPost}
              onVote={this.handleVote}
              onOpenPost={this.setSelectedPost}
              userData={this.props.userData}
            />
          ) : (
            <Posts
              onLoadAll={this.loadAllPosts}
              posts={this.state.posts}
              onVote={this.handleVote}
              onOpenPost={this.setSelectedPost}
              userData={this.props.userData}
            />
          )}
        </main>
      </>
    );
  }
}

export default Home;
