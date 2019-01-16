import React, { Component } from "react";
import Post from "./post";

class Posts extends Component {
  componentDidMount() {
    //   this.props.onLoadAll();
  }

  render() {
    const { onVote, onUnvote, posts, onOpenPost } = this.props;
    return <div className="posts">
        {posts
          .reverse()
          .map(post => (
            <Post
              key={post._id}
              onVote={onVote}
              onUnvote={onUnvote}
              onOpenPost={onOpenPost}
              post={post}
              userData={this.props.userData}
            />
          ))}
      </div>;
  }
}

export default Posts;
