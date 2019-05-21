import React, { Component } from 'react';
import axios from 'axios';
import Users from './Users';
import './MainPage.scss';

class MainPage extends Component{
    state={
        text:'',
        users:[],
        posts:[],
        photos:[]
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })

    }
     componentDidMount(){
         this.getUsers();
         this.getPosts();
         this.getPhotos();
      
    }

    getUsers = async ()=>{
        let res = await axios.get("https://jsonplaceholder.typicode.com/users")
        this.setState({
            users:res.data
        })
    
    }

    getPosts = async () =>{
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.setState({
            posts:res.data
        })
        
    }

    getPhotos = () =>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
             .then(res =>{
                
                 this.setState({
                    photos:res.data
                 })
                 
             })
    }
    render(){
        const {users,posts,text,photos} = this.state;
        return(
            <div>
            <div>
                <form className="form">
                    <input className="form-input"
                    placeholder="Filter posts by keyword"
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}/>
                    <button className="btn"><i className="fas fa-search"></i></button>
                </form>
            </div>
            <Users users={users} text={text} photos={photos} posts={posts}/>
        
            </div>
        )
    }

}




export default MainPage;