import React, { Component } from 'react';
import Config from '../config';

const BACKURL = Config.URL.express;

class Post extends Component {
    render() { 
        console.log(this.props);
        const imageurl = BACKURL+'/'+this.props.post.postImg;
        return (       
            <div className="container col-md-6 col-md-offset-3">
                <h3 className="">{this.props.post.postTitle}</h3>
                <img src={imageurl} 
                    onClick={() => this.props.onOpenPost(this.props.post)}
                    className="text-center" alt=""/>
                <div>
                    <button onClick={() => this.props.onVote(this.props.post.id)} 
                        className="btn btn-primary btn-sm m-2">Like</button>
                    {/* <span 
                        className="badge badge-pill badge-primary m-2">
                        Votes {this.props.post.votes.length}               
                    </span> */}

                </div>
           </div>
        );
    }
}
 
export default Post;