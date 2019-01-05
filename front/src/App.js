import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar';
import Posts from './Components/posts';
import Post from './Components/post';


class App extends Component {

  constructor(props) {
    super(props);
    console.log("App - Constructor")
  }

  componentDidMount(){

    //DO ALL API REQUESTS HERE
    console.log("App - Mounted")
    
  }

  state = {
        posts: [
          {
          id: 1,
          postAuthor: "matti",
          postCreatedDate: Date(Date.now()),
          postTitle: "Placeholder Title1",
          postbody: "Placeholder Description1",
          votes: ["matti", "katti", "ratti"],
          picture: "http://placehold.it/400x400" 
        },
        {
          id: 2,
          postAuthor: "matti",
          postCreatedDate: Date(Date.now()),
          postTitle: "Placeholder Title2",
          postbody: "Placeholder Description2",
          votes: ["matti", "katti"],
          picture: "http://placehold.it/400x400" 
        }
      ]

  }

  handleVote = post => {
    console.log("Vote casted")
    // const posts = [...this.state.posts];
    // const index = posts.indexOf( post );
    // posts[index] = { ...post };
    // posts[index].votes.push("matti"+posts[index].votes.length+1);
    // this.setState({ posts });
};

  render() {
    console.log(this.props);
    return (
      <>
        <NavBar totalPosts={this.state.posts.filter(c => c.value > 0).length}/>
        <main className="container">
        
          <Posts 
            posts={this.state.posts}
            onVote={this.handleVote}/>
        </main>
      </>
    );
  }
}

export default App;
