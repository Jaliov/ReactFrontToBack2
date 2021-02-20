import React, { Component } from 'react';
import UserITem from './UserItem';

export class Users extends Component {
    state = {
        users: [
        {
            id: '1',
            login: 'mojombo',
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            html_url: 'https://github.com/mojombo'
        
        },
        {
            login: "defunkt",
            id: '2',
            html_url: 'https://github.com/mojombo',
            avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        },
        {
            id: '3',
            login: "pjhyett",
            avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
            html_url: "https://github.com/pjhyett"
        }

        ]
    }
  render() {
    return (
      <div>
        {this.state.users.map(user => (
            <div key = {user.id}>{user.login}</div>
        ))}
      </div>
    );
  }
}

export default Users;
