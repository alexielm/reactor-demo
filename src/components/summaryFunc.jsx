import React from "react";
import { forumData } from "../data/dataSet";
import { useRod } from "../framework/reactor";

const SummaryFunc = (props) => {

    let data = useRod(forumData);


    return <div>
        <div>
            Total users: {data.users.length}
        </div>
        <div>
            Total comments: {data.comments.length}
        </div>
    </div>;
}

export default SummaryFunc;
