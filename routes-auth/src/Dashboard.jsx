import React from 'react';
import { useHistory } from "react-router";

const Dashboard = () => {
    let history = useHistory();

    function GoToOrders() {
        history.push("/orders");
    }

    return (
        <div>
            <h1>Dasboard</h1>

            <button onClick={() => GoToOrders()}>Go to orders list</button>
        </div>
    );
};

export default Dashboard;