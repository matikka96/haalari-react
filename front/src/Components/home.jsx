import React, { Component } from "react";
import NavBar from "./navbar";
import Posts from "./posts";
import axios from "axios";
import Config from "../config";
import SinglePost from "./singlepost";
import M from "materialize-css";

const SERVER = Config.URL.express;

class Home extends Component {
  state = {
    posts: [],
    userToken: "",
    selectedPost: null
  };
  componentDidMount() {
    this.loadAllPosts();
    M.AutoInit();
  }
  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      this.loadAllPosts();
    }
  }
  setSelectedPost = post => {
    this.setState({ selectedPost: post._id });
  };
  clearPost = () => {
    this.setState({ selectedPost: null });
  };
  loadAllPosts = () => {
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
    return <>
        <NavBar userData={this.props.userData} />
        <div>
          <ul id="tabs-swipe" className="tabs center z-depth-1">
            <li className="tab active">
              <a href="#tab-tasks">tasks</a>
            </li>
            <li className="tab">
              <a href="#tab-completed">Completed</a>
            </li>
          </ul>
        </div>
        <main className="container">
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
      </>;
  }
}

export default Home;
