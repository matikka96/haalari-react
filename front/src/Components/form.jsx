import React, { Component } from "react";
import axios from "axios";
import NavBar from "./navbar";
import Config from "../config";
import { Redirect } from "react-router-dom";

const BACKURL = Config.URL.express;

class creationForm extends Component {
  state = {
    postTitle: "",
    postDescription: "",
    imageFile: "",
    
    isLoggedIn: ""
  };

  componentDidMount() {
    this.setState({ isLoggedIn: this.props.userData.isLoggedIn }, () => {
      console.log(this.state.isLoggedIn);
    });
  }

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const { postTitle, postDescription, imageFile } = this.state;
    const formData = new FormData();
    formData.append("title", postTitle);
    formData.append("description", postDescription);
    formData.append("token", this.props.userData.userToken);
    formData.append("selectedImage", imageFile);
    axios
      .post(BACKURL + "/user/upload", formData)
      .then(response => {
        alert("The file is successfully uploaded");
      })
      .catch(error => alert(error));
  }

  onChange = e => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "postImage":
        this.setState({ imageFile: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
        break;
    }
    // this.setState({ file: e.target.files[0] });
  };

  render() {
    const { postTitle, postDescription, postImage } = this.state;
    return (
      <>
        <NavBar />

        <main className="container col-md-6 col-md-offset-3">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label for="form-title">Title: </label>
              <input
                className="form-control"
                type="text"
                name="postTitle"
                value={postTitle}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label for="form-description">Description: </label>
              <input
                className="form-control"
                type="text"
                name="postDescription"
                value={postDescription}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label for="form-image">Image: </label>
              <input
                className="form-control"
                type="file"
                name="postImage"
                onChange={this.onChange}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          {/* <form onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file" name="myImage" onChange={this.onChange} />
            <button type="submit">Upload</button>
          </form> */}
        </main>
      </>
    );
  }
}
export default creationForm;
