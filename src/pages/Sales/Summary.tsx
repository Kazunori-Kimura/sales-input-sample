import { Button, makeStyles, TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 64,
    },
    search: {
        marginLeft: theme.spacing(1),
    },
    customerName: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    action: {
        marginTop: theme.spacing(2),
    },
}));

const Summary: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <TextField
                    label="得意先コード"
                    variant="outlined"
                    margin="dense"
                    value="000000"
                    required
                    fullWidth
                />
                <IconButton className={classes.search}>
                    <SearchIcon />
                </IconButton>
            </div>
            <div className={classes.row}>
                <TextField
                    className={classes.customerName}
                    label="得意先名"
                    variant="standard"
                    margin="dense"
                    value="〇〇〇〇〇〇〇〇"
                    fullWidth
                    inputProps={{ readOnly: true }}
                />
            </div>
            <div className={classes.row}>
                <TextField
                    label="検収日"
                    type="date"
                    variant="outlined"
                    margin="dense"
                    value="2020-12-17"
                    required
                    fullWidth
                />
            </div>
            <Button
                className={classes.action}
                variant="contained"
                color="primary"
                fullWidth
                size="large"
            >
                選択
            </Button>
        </div>
    );
};

export default Summary;
