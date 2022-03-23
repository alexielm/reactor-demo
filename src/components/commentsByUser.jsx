import React from "react";

import { Menu, Dropdown, Comment, PageHeader } from 'antd';
import { DownOutlined } from '@ant-design/icons';


import { forumData } from "../data/dataSet";

class CommentsByUser extends React.Component {

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
            .map((comment, commentIndex) => <Comment key={commentIndex}
                author={this.userToFullName(this.data.users.find(user => user.userId === comment.userId))}
                content={<PageHeader title={comment.title} subTitle={comment.body} />}
            />);

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
