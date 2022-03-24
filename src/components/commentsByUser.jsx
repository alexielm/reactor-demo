import React from "react";

import { Menu, Dropdown, Comment } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { forumData } from "../data/dataSet";
import SingleComment from "./singleComment";

class CommentsByUser extends React.Component {
    displayName = "CommentsByUser";

    data = forumData.useRod(this);

    state = {
        selectedUserId: this.data.users[0].userId
    }

    userToFullName = user => `${user.firstName} ${user.lastName}`;

    usersList = () => <Menu>
        {
            this.data.users.map(user =>
                <Menu.Item key={user.userId} onClick={() => this.setState({ selectedUserId: user.userId })}>
                    {this.userToFullName(user)}
                </Menu.Item>
            )
        }
    </Menu>;

    commentsByUser = () =>
        this.data.comments
            .filter(comment => comment.userId === this.state.selectedUserId)
            .map((comment, commentIndex) => <SingleComment key={commentIndex } title={comment.title} body={comment.body} />);

    userSelector = () =>
        <Dropdown overlay={this.usersList}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {this.userToFullName(this.data.users.find(user => user.userId === this.state.selectedUserId))} <DownOutlined />
            </a>
        </Dropdown>;

    render() {
        return <div>
            {this.userSelector()}
            {this.commentsByUser()}
        </div>;
    }
}

export default CommentsByUser;
