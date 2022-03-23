import React from "react";
import "../styles/main.css";
import "antd/dist/antd.css";
import { Divider } from "antd";

import Summary from "./summaryFunc";
import UsersList from "./usersList";
import CommentsByUser from "./commentsByUser";
import CommentsByIndex from "./commentsByIndex";

class Main extends React.Component {

    render() {
        return <div className="main">
            <Divider>Summary</Divider>
            <Summary />
            <Divider>Users</Divider>
            <UsersList />
            <Divider>Comments by user</Divider>
            <CommentsByUser />
            <Divider>Comments by index</Divider>
            <CommentsByIndex />
            <Divider />
        </div>;
    }

}

export default Main;
