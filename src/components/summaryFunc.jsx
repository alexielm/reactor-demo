import React from "react";
import { forumData } from "../data/dataSet";
import { useRod } from "../framework/reactor";

export default (props) => {

    let data = useRod(forumData, "summaryFunc");

    return <div>
        <div>
            Total users: {data.users.length}
        </div>
        <div>
            Total comments: {data.comments.length}
        </div>
    </div>;
}