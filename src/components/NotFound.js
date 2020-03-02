import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollToTopController from './ScrollToTopController';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
      margin: 40,
      flexGrow: 1,
      padding: theme.spacing(3),
    },
}));

export default function NotFound() {
    const custom = useStyles();

    return (
        <main className={custom.content}>
            <ScrollToTopController />
            <div className={custom.toolbar} />

            <div  className="content" >
                <Typography variant="h2" gutterBottom>
                    404
                </Typography>
                <Typography variant="h5">
                    Sorry, we couldn't find the page you were looking for.
                </Typography>
            </div>
        </main>
    );
}
