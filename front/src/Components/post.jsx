import React, { Component } from "react";
import Config from "../config";

const BACKURL = Config.URL.express;

class Post extends Component {
  render() {
    const imageurl = BACKURL + "/" + this.props.post.postImg;
    const { postTitle, postDescription, postVotes } = this.props.post;
    return <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <img src={imageurl} alt="patch" onClick={() => this.props.onOpenPost(this.props.post)} className="responsive-img" />
              <span className="card-title">{postTitle}</span>
              <p>{postDescription}</p>
            </div>
            <div className="card-action " style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="valign-wrapper">
                <i className="small material-icons post-action" onClick={() => this.props.onVote(this.props.post._id)} style={{ color: postVotes.filter(f => f.userId === this.props.userData.userInfo._id).length === 0 ? "black" : "red" }}>
                  favorite
                </i>
                <p className="post-badge grey">{postVotes.length}</p>
              </div>
              <div className="valign-wrapper">
                <i className="small material-icons">comment</i>
                <p className="post-badge grey">2</p>
              </div>
              <div className="valign-wrapper">
                <i className="small material-icons">more_horiz</i>
              </div>
            </div>
          </div>
        </div>
      </div>;
    // <div className="card mx-auto m-3" style={{ maxWidth: 400 }}>
    //   <img
    //     src={imageurl}
    //     alt="patch"
    //     onClick={() => this.props.onOpenPost(this.props.post)}
    //     className="card-img-top"
    //   />
    //   <div className="card-body">
    //     <h5 className="card-title">{this.props.post.postTitle}</h5>
    //     <p className="card-text">{this.props.post.postDescription}</p>
    //     {this.props.post.postVotes.filter(f => f.userId === this.props.userData.userInfo._id)
    //       .length === 0 ? (
    //         <button
    //           className="btn btn-secondary"
    //           onClick={() => this.props.onVote(this.props.post._id)}
    //         >
    //           ♡
    //       </button>
    //       ) : (
    //         <button
    //           className="btn btn-danger"
    //           onClick={() => this.props.onVote(this.props.post._id)}
    //         >
    //           ♡
    //       </button>
    //       )}
    //     <span className="badge badge-secondary m-2">{this.props.post.postVotes.length}</span>
    //   </div>

    // </div>
  }
}

export default Post;
