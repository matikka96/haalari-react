import React, { Component } from 'react';
import Post from './post';

class SinglePost extends Component {
    state = { 
        
      }    
      render() { 
        const { onVote, onUnvote, onOpenPost } = this.props;
        const post = this.props.post;
        return ( 
            <div className="m-3 mx-auto" style={{maxWidth: 400}}>
              
              <button
                className="btn btn-secondary"
                onClick={() => this.props.onClearPost()}
                >Back
              </button>
                <Post
                  key={post._id}
                  onVote={onVote}
                  onUnvote={onUnvote}
                  onOpenPost={onOpenPost}
                  post={post}
                  userData={this.props.userData}
                >
                </Post>

            </div>
            
         );
    }
}
 
export default SinglePost;

