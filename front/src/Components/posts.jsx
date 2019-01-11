import React, { Component } from 'react';
import Post from './post';

class Posts extends Component {
    componentDidMount() {
    //   this.props.onLoadAll();
    }
    
    render() { 
        const {onVote, onUnvote, posts, onOpenPost} = this.props;
        return (
        <>
            {posts.reverse().map(post => (
                <Post 
                    key={post._id} 
                    onVote={onVote}
                    onUnvote={onUnvote}
                    onOpenPost={onOpenPost}
                    post={post}>
                </Post>
            ))}
        </>
        );
    }
}
 
export default Posts;