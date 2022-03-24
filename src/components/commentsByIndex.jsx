import React from "react";

import { Button, Space, Popover, Input } from 'antd';

import { forumData } from "../data/dataSet";
import SingleComment from "./singleComment";

const { TextArea } = Input;

class CommentsByIndex extends React.Component {
    displayName = "CommentsByIndex";

    data = forumData.useRod(this);

    state = {
        selectedIndex: 0,
        editorVisible: false
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
                    Author: {this.userToFullName(this.data.users.find(user => user.userId === comment.userId))}
                </Space>
            </div>
            <Popover
                placement="bottomLeft"
                trigger="click"
                title="Change the comment"
                visible={this.state.editorVisible}
                onVisibleChange={visible => this.setState({ editorVisible: visible })}
                content={<div key={this.state.selectedIndex} style={{ width: "800px" }}>
                    <div>
                        Title: <Input defaultValue={comment.title} value={undefined} onChange={e => comment.title = e.target.value} />
                    </div>
                    <br />
                    <div>
                        Body: <TextArea autoSize={{ minRows: 4, maxRows: 10 }} defaultValue={comment.body} onChange={e => comment.body = e.target.value} />
                    </div>
                </div>}
            >
                <div>
                    <SingleComment title={comment.title} body={comment.body} />
                </div>
            </Popover>
            <br />
            <Space>
                <Button onClick={() => {
                    this.data.comments.splice(this.state.selectedIndex, 0, { ...comment });
                    this.setState({
                        selectedIndex: this.state.selectedIndex + 1,
                        editorVisible: true
                    });
                }}>Clone Comment</Button>
                <Button danger onClick={() => {
                    this.setState({
                        editorVisible: false
                    });
                    this.data.comments.splice(this.state.selectedIndex, 1);
                }}>Delete</Button>
            </Space>
        </div>;
    }
}

export default CommentsByIndex;
