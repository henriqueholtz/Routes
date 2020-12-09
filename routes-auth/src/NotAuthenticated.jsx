import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";


const NotAuthenticated = ({ ...rest }) => {
    const classes = useStyles();
    let history = useHistory();

    function RedirectLogin() {
        history.push("/login");
    }

    return (
        <div>
            <h1>Not Authenticated</h1>
            <button className={classes.button} onClick={() => RedirectLogin()} >
                Go to Login
        </button>
        </div>
    );
};

const useStyles = makeStyles({
    button: {
        marginTop: 50
    }
});
export default NotAuthenticated;
