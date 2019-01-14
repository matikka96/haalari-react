import React, { Component } from "react";
import axios from "axios";
import NavBar from "./navbar";
import Config from "../config";

const BACKURL = Config.URL.express;

class creationForm extends Component {
  state = {
    postTitle: "",
    postDescription: "",
    imageFile: "",
    
    isLoggedIn: ""
  };

  componentDidMount() {
    this.setState({ isLoggedIn: this.props.userData.isLoggedIn });
  }

  onFormSubmit = e => {
    e.preventDefault();
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
    switch (e.target.name) {
      case "postImage":
        this.setState({ imageFile: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
        break;
    }
  };

  render() {
    const { postTitle, postDescription } = this.state;
    return <>
        <NavBar userData={this.props.userData} />

        <main className="container col-md-6 col-md-offset-3">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label htmlFor="form-title">Title: </label>
              <input className="form-control" type="text" name="postTitle" value={postTitle} onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="form-description">Description: </label>
              <input className="form-control" type="text" name="postDescription" value={postDescription} onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="form-image">Image: </label>
              <input className="form-control" type="file" name="postImage" onChange={this.onChange} />
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
      </>;
  }
}
export default creationForm;
