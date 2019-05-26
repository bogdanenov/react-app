import React, {Component} from 'react';
import User from './User';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';

export default class Users extends Component {
        InstaService = new InstaService();
        state = {
                posts: [],
                err: false
        }
        
        componentDidMount() {
                this.updateUsers();
        }

        updateUsers() {
                this.InstaService.getAllPosts()
                .then(this.onUsersLoaded)
                .catch(this.onError);
        }

        onUsersLoaded = (posts) => {
                this.setState({
                posts,
                err: false
                })
        }

        onError = (err) => {
                this.setState({
                error: true
                })
        }

        renderActiveUser(arr) {
                return arr.map(item => {

                        if (item.active)
                                return (
                                        <User 
                                        src={item.photo}
                                        alt={item.altname}
                                        name={item.name}/>
                                )
                        else return "";
                });
        }

        renderUsers(arr) {
                return arr.map(item => {
                        if (!item.active)
                                return (
                                        <User 
                                        src={item.photo}
                                        alt={item.altname}
                                        name={item.name} min/>
                                )
                        else return "";
                });
        }


        render() {
                const {error, posts} = this.state;

                if(error) {
                        return <ErrorMessage/>;
                }


                const item = this.renderActiveUser(posts);
                const items = this.renderUsers(posts);

                return (
                        <div className="right">
                                {item}
                                <div className="users__block">
                                        {items}
                                </div>
                        </div>
                )
        }
}