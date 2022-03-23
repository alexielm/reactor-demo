import React from "react";

import { Comment, Button, Space, PageHeader } from 'antd';

import { forumData } from "../data/dataSet";

class CommentsByIndex extends React.Component {

    data = forumData.useRod(this);

    state = {
        selectedIndex: 0
    };

    userToFullName = user => `${user.firstName} ${user.lastName}`;

    render() {
        let comments = this.data.comments;
        let comment = comments[this.state.selectedIndex];

        return <div>
            <div>
                <Space>
                    <Button onClick={() => this.setState({ selectedIndex: Math.max(0, this.state.selectedIndex - 1) })}>-</Button>
                    {this.state.selectedIndex}
                    <Button onClick={() => this.setState({ selectedIndex: Math.min(comments.length, this.state.selectedIndex + 1) })}>+</Button>
                </Space>
            </div>
            <Comment
                author={this.userToFullName(this.data.users.find(user => user.userId === comment.userId))}
                content={<PageHeader title={comment.title} subTitle={comment.body} />}
            />
        </div>;
    }
}

export default CommentsByIndex;
