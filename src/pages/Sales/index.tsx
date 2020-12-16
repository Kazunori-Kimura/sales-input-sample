import { AppBar, makeStyles, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { DetailMode, FormMode } from '../../types';
import DetailForm from './DetailForm';
import DetailList from './DetailList';
import Summary from './Summary';

interface SalesProps {
    goSlip?: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    title: {
        flex: 1,
    },
    offset: theme.mixins.toolbar,
    content: {
        flex: 1,
    },
}));

const Sales: React.FC<SalesProps> = ({ goSlip }) => {
    const [tab, setTab] = useState(0);
    const [mode, setMode] = useState<DetailMode>('list');
    const [formMode, setFormMode] = useState<FormMode>('add');
    const classes = useStyles();

    const handleChange = (event: ChangeEvent<unknown>, newTab: number) => {
        setTab(newTab);
    };

    const goList = () => {
        setMode('list');
    };

    const goForm = (value: FormMode) => {
        setMode('form');
        setFormMode(value);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography className={classes.title}>売上入力</Typography>
                    <Tabs value={tab} onChange={handleChange}>
                        <Tab label="概要" />
                        <Tab label="明細" />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
            <div className={classes.content}>
                {tab === 0 && <Summary />}
                {tab === 1 && mode === 'list' && <DetailList goForm={goForm} goSlip={goSlip} />}
                {tab === 1 && mode === 'form' && <DetailForm mode={formMode} goBack={goList} />}
            </div>
        </div>
    );
};

export default Sales;
