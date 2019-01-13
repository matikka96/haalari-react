//THIS IS VERY WIP DOES NOTHING DOESNT WORK

import React, { Component } from 'react';
import axios from 'axios';
import Config from '../config';
const BACKURL = Config.URL.express;

class Comments extends Component {
    constructor() {
        super();
        this.state = {  
            comments: [],
            username:'',
            commentText:''
        }
    }

    

    render() { 
        const {commentText, comments} = this.state;
        return ( 
            <>
                <ul>
                    {this.state.comments.map(comment => (
                        <li key={comment.id} className="">
                            {comment.body}{" "}
                            <span className="">{}</span>
                        </li>
                    ))}
                </ul>
                
                <main className="container col-md-6 col-md-offset-3">
                    <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <label for="form-title"> </label>
                            <input
                                className="form-control"
                                type="text" 
                                name="commentText" 
                                value={commentText}
                                onChange={this.onChange}
                                />
                        </div>                    
                        <button className="btn btn-primary" type="submit">Comment</button>
                    </form>
                </main>
            
            

            </>
         );
    }
}
export default Comments;

class Comment extends Component {

    render() { 
        return (  
            <div className="card mx-auto" style={{maxWidth: 400}}>
              <div className="card-body">
                <h5 className="card-title">{this.props.comment._id}User temp</h5>
                <p className="card-text">{}Comment temp</p>
              </div>
            </div>

        );
    }
}
 
// export default Comment;