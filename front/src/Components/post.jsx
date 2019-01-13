import React, { Component } from 'react';
import Config from '../config';

const BACKURL = Config.URL.express;

class Post extends Component {
    render() { 
        const imageurl = BACKURL+'/'+this.props.post.postImg;
        return <div className="card mx-auto" style={{ maxWidth: 400 }}>
            <img src={imageurl} alt="patch" onClick={() => this.props.onOpenPost(this.props.post)} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">
                {this.props.post.postTitle}
              </h5>
              <p className="card-text">
                {this.props.post.postDescription}
              </p>
            </div>
            <div className="card-body">
              {this.props.post.postVotes.filter(f => f.userId === this.props.userData.userInfo._id).length === 0 ? 
                <button className="btn btn-success" onClick={() => this.props.onVote(this.props.post._id)}>
                  Vote
                </button> : 
                <button className="btn btn-danger" onClick={() => this.props.onVote(this.props.post._id)}>
                  Unvote
                </button>
              }

              <span className="badge badge-secondary m-2">
                {this.props.post.postVotes.length}
              </span>
            </div>
          </div>;
    }
}
 
export default Post;