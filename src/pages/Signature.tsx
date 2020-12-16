import {
    AppBar,
    Button,
    IconButton,
    makeStyles,
    Toolbar,
    Tooltip,
    Typography,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

interface SignatureProps {
    goBack?: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        height: '100vh',
    },
    offset: theme.mixins.toolbar,
    content: {
        padding: theme.spacing(1),
        flex: 1,
        color: theme.palette.text.hint,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    signature: {
        marginTop: theme.spacing(1),
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.divider,
        borderRadius: theme.shape.borderRadius,
        flex: 1,
    },
    footer: {
        display: 'flex',
    },
    action: {
        flex: 1,
        margin: theme.spacing(1),
    },
}));

const Signature: React.FC<SignatureProps> = ({ goBack }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Tooltip title="戻る">
                        <IconButton edge="start" color="inherit" onClick={goBack}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Tooltip>
                    <Typography>署名</Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
            <div className={classes.content}>
                <Typography>指やスタイラスペンでサインしてください</Typography>
                <div className={classes.signature} />
            </div>
            <div className={classes.footer}>
                <Button className={classes.action} variant="contained">
                    クリア
                </Button>
                <Button
                    className={classes.action}
                    variant="contained"
                    color="primary"
                    onClick={goBack}
                >
                    OK
                </Button>
            </div>
        </div>
    );
};

export default Signature;
