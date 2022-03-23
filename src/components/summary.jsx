import React from "react";

import { forumData } from "../data/dataSet";

class Summary extends React.Component {

    data = forumData.useRod(this);

    render() {
        return <div>
            <div>
                Total users: {this.data.users.length}
            </div>
            <div>
                Total comments: {this.data.comments.length}
            </div>
        </div>;
    }

}

export default Summary;
