import { AppBar, CssBaseline, makeStyles, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import { ChangeEvent, ReactElement, useState } from 'react';
import Detail from './Detail';

const useStyles = makeStyles((theme) => ({
    root: {
        //
    },
    title: {
        flex: 1,
    },
    offset: theme.mixins.toolbar,
    content: {
        padding: theme.spacing(1),
    },
}));

function App(): ReactElement {
    const [tab, setTab] = useState(0);
    const classes = useStyles();

    const handleChange = (event: ChangeEvent<unknown>, newTab: number) => {
        setTab(newTab);
    };

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography className={classes.title}>売上入力</Typography>
                    <Tabs value={tab} onChange={handleChange}>
                        <Tab label="概要" />
                        <Tab label="明細" />
                        <Tab label="プレビュー" />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
            <div className={classes.content}>
                {tab === 0 && <Typography>概要</Typography>}
                {tab === 1 && <Detail />}
                {tab === 2 && <Typography>プレビュー</Typography>}
            </div>
        </>
    );
}

export default App;
