import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './navbar';
import Config from '../config';

const BACKURL = Config.URL.express;
const PROXY = Config.URL.proxyurl;

class creationForm extends Component {
    constructor() {
        super();
        this.state = {
          postTitle: '',
          postDescription: '',
          imageFile: '',
        };
    }
    onChange = (e) => {
        switch (e.target.name) {
          case 'imageFile':
            this.setState({ selectedFile: e.target.files[0] });
            break;
          default:
            this.setState({ [e.target.name]: e.target.value });
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { postTitle, postDescription, imageFile } = this.state;
        let formData = new FormData();

        formData.append('postTitle', postTitle);
        formData.append('postDescription', postDescription);
        formData.append('imageFile', imageFile);

        axios.post(BACKURL+'/post/create').then(response => {
            console.log(response.data);
        })
          
    };
    onTest = () => {
        axios.get(BACKURL+"/test").then(response => {
            console.log(response.data);
        })
    }

    render() { 
        const {postTitle, postDescription, imageFile} = this.state;
        return (
            <>
            <NavBar />

            <form onSubmit = {this.onSubmit}>
                <p>title: </p>
                <input 
                    type="text" 
                    name="postTitle" 
                    value={postTitle}
                    onChange={this.onChange}
                    />
                <p>description: </p>
                <input 
                    type="text" 
                    name="postDescription" 
                    value={postDescription}
                    onChange={this.onChange}
                    />
                <p>picture: </p>
                <input 
                    type="file" 
                    name="imageFile" 
                    onChange={this.onChange}
                    />

                <button type="submit">Submit</button>
	        </form>
            <button onClick={this.onTest} >Test</button>
            </>
        );
    }
}
export default creationForm;