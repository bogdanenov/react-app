import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
                    alt="prince"
                    name="Harry_the_prince" min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some_account
                </div>
                <div className="post__descr">
                    Lorem ipsum test test test 123 2dadsadas cxcadsadsadasdcaasdsadsadasdsadasd
                </div>
            </div>
        )
    }
}