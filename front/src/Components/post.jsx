import React, { Component } from 'react';
import Config from '../config';

const BACKURL = Config.URL.express;

class Post extends Component {
    render() { 
        const imageurl = BACKURL+'/'+this.props.post.postImg;
        return (
            <div className="card mx-auto" style={{maxWidth: 400}}>
              <img src={imageurl}
                alt="patch"
                onClick={() => this.props.onOpenPost(this.props.post)}
                className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{this.props.post.postTitle}</h5>
                <p className="card-text">{this.props.post.postDescription}</p>
              </div>
              <div className="card-body">
                <button
                    className="btn btn-secondary"
                    onClick={() => this.props.onVote(this.props.post._id)}
                    >Vote
                </button>
                <span className="badge badge-success m-2">{this.props.post.postVotes.length}</span>
              </div>
            </div>
        );
    }
}
 
export default Post;