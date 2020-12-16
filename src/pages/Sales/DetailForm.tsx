import {
    Button,
    IconButton,
    makeStyles,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import { FormMode } from '../../types';

interface DetailFormProps {
    mode: FormMode;
    goBack?: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        height: '100%',
    },
    header: {
        position: 'sticky',
        top: theme.mixins.toolbar.minHeight,
        backgroundColor: theme.palette.background.default,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: theme.palette.divider,
    },
    title: {
        flex: 1,
    },
    content: {
        flex: 1,
        marginBottom: theme.mixins.toolbar.minHeight,
        backgroundColor: theme.palette.background.paper,
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: theme.spacing(1),
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
    readonly: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        width: '100vw',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: theme.palette.divider,
        backgroundColor: theme.palette.background.default,
    },
    action: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        flex: 1,
    },
}));

const DetailForm: React.FC<DetailFormProps> = ({ mode, goBack }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar className={classes.header}>
                <Tooltip title="戻る">
                    <IconButton edge="start" onClick={goBack}>
                        <ArrowBackIosIcon />
                    </IconButton>
                </Tooltip>
                <Typography className={classes.title}>
                    明細{mode === 'add' ? '追加' : '更新'}
                </Typography>
            </Toolbar>
            <div className={classes.content}>
                <div className={classes.row}>
                    <TextField
                        label="商品コード"
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
                        className={classes.readonly}
                        label="商品名"
                        variant="standard"
                        margin="dense"
                        value="〇〇〇〇〇〇〇〇"
                        fullWidth
                        inputProps={{ readOnly: true }}
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        type="date"
                        label="納品日"
                        variant="outlined"
                        margin="dense"
                        value="2020-12-31"
                        fullWidth
                        required
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        className={classes.readonly}
                        label="ケース/バラ"
                        variant="standard"
                        margin="dense"
                        value="ケース"
                        fullWidth
                        inputProps={{ readOnly: true }}
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        className={classes.readonly}
                        label="入数"
                        variant="standard"
                        margin="dense"
                        value="20"
                        fullWidth
                        inputProps={{ readOnly: true }}
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        type="number"
                        label="ケース数"
                        variant="outlined"
                        margin="dense"
                        value="1"
                        fullWidth
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        type="number"
                        label="バラ数"
                        variant="outlined"
                        margin="dense"
                        value="10"
                        fullWidth
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        className={classes.readonly}
                        label="総数"
                        variant="standard"
                        margin="dense"
                        value="30"
                        fullWidth
                        inputProps={{ readOnly: true }}
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        label="単価"
                        variant="outlined"
                        margin="dense"
                        value="2000"
                        fullWidth
                        required
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        className={classes.readonly}
                        label="商品名"
                        variant="standard"
                        margin="dense"
                        value="〇〇〇〇〇〇〇〇"
                        fullWidth
                        inputProps={{ readOnly: true }}
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        className={classes.readonly}
                        label="商品名"
                        variant="standard"
                        margin="dense"
                        value="〇〇〇〇〇〇〇〇"
                        fullWidth
                        inputProps={{ readOnly: true }}
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        className={classes.readonly}
                        label="商品名"
                        variant="standard"
                        margin="dense"
                        value="〇〇〇〇〇〇〇〇"
                        fullWidth
                        inputProps={{ readOnly: true }}
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        className={classes.readonly}
                        label="商品名"
                        variant="standard"
                        margin="dense"
                        value="〇〇〇〇〇〇〇〇"
                        fullWidth
                        inputProps={{ readOnly: true }}
                    />
                </div>
            </div>
            <Toolbar className={classes.footer}>
                <Button className={classes.action} variant="contained">
                    クリア
                </Button>
                <Button
                    className={classes.action}
                    variant="contained"
                    color="primary"
                    onClick={goBack}
                >
                    {mode === 'add' ? '登録' : '更新'}
                </Button>
            </Toolbar>
        </div>
    );
};

export default DetailForm;
