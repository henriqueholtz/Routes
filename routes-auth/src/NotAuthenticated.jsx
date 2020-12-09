import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Redirect } from 'react-router-dom';


const NotAuthenticated = () => {
    const classes = useStyles();

    return (
        <div>
            <h1>Not Authenticated</h1>

            <button className={classes.button} onClick={() => console.log('Go to login man!')}>
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
