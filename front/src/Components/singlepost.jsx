import React, { Component } from 'react';
import Post from './post';
import Config from '../config';

const BACKURL = Config.URL.express;

class SinglePost extends Component {
    state = { 
        
      }    
      render() { 
        const imageurl = BACKURL+'/'+this.props.post.postImg;
        const post = this.props.post;
        return ( 
            <div className="card mx-auto" style={{maxWidth: 400}}>
              
              <button
                className="btn btn-secondary"
                onClick={() => this.props.onClearPost()}
                >Back
              </button>
                <div className="card mx-auto" style={{maxWidth: 400}}>
                <img src={imageurl}
                  alt="patch"
                  className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{post.postTitle}</h5>
                  <p className="card-text">{post.postDescription}</p>
                </div>
                <div className="card-body">
                  <button
                      className="btn btn-secondary"
                      onClick={() => this.props.onVote(this.props.post._id)}
                      >Vote
                  </button>
                  <span className="badge badge-success m-2">{post.postVotes.length}</span>
                </div>
              </div>

            </div>
            
         );
    }
}
 
export default SinglePost;

