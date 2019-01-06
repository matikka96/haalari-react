import React, { Component } from 'react';
import Post from './post';

class Posts extends Component {
    render() { 
        console.log(this.props);
        const {onVote, posts, onOpenPost} = this.props;
        return (
        <>
            {posts.map(post => (
                <Post 
                    key={post._id} 
                    onVote={onVote}
                    onOpenPost={onOpenPost}
                    post={post}>
                </Post>
            ))}
        </>
        );
    }
}
 
export default Posts;