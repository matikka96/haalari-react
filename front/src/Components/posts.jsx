import React, { Component } from 'react';
import Post from './post';

class Posts extends Component {
    render() { 
        console.log(this.props);
        const {onVote, posts} = this.props;
        return (
        <>
            {posts.map(post => (
                <Post 
                    key={post.id} 
                    onVote={onVote}
                    post={post}>
                </Post>
            ))}
        </>
        );
    }
}
 
export default Posts;