import React from "react";

import { Popover, Button, Input, Space } from "antd";

import ViewControl from "../viewControllers/viewControl";

import { forumData } from "../data/dataSet";

class UsersList extends React.Component {
    displayName = "UsersList";

    data = forumData.useRod(this);

    render() {
        return <Space>
            {
                this.data.users.map(user =>
                    <Popover key={user.userId}
                        trigger="click"
                        title="Change the name"
                        content={<div>
                            <div>
                                First Name: <Input defaultValue={user.firstName} onChange={e => user.firstName = e.target.value} />
                            </div>
                            <br />
                            <div>
                                Last Name: <Input defaultValue={user.lastName} onChange={e => user.lastName = e.target.value} />
                            </div>
                            <br />
                            <ViewControl visible={!this.data.comments.some(comment => comment.userId === user.userId)}>
                                <div>
                                    <Button danger onClick={() => this.data.users = this.data.users.filter(u => u.userId !== user.userId)}>Delete</Button>
                                </div>
                            </ViewControl>
                        </div>}
                    >
                        <Button>
                            <span>{user.firstName}</span>
                            &nbsp;
                            <span>{user.lastName}</span>
                        </Button>
                    </Popover>
                )
            }
            -
            <Button onClick={() => this.data.users.push({
                userId: Math.max(...this.data.users.map(user => user.userId)) + 10,
                firstName: "newName",
                lastName: "newLast"
            })}>Add User</Button>
        </Space>;
    }

}

export default UsersList;
