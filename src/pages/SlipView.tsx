import {
    AppBar,
    Button,
    Grid,
    IconButton,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Toolbar,
    Tooltip,
    Typography,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { rows } from '../data';

interface SlipViewProps {
    goBack?: VoidFunction;
    goSignature?: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        //
    },
    offset: theme.mixins.toolbar,
    content: {
        flex: 1,
        padding: theme.spacing(1),
        overflowY: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    actions: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: theme.palette.divider,
        backgroundColor: theme.palette.background.default,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    summary: {
        height: 32,
        marginLeft: theme.spacing(1),
    },
    signature: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.divider,
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(1),
        padding: theme.spacing(1),
        height: 64,
        color: theme.palette.text.hint,
    },
}));

const SlipView: React.FC<SlipViewProps> = ({ goBack, goSignature }) => {
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
                    <Typography className={classes.title}>売上伝票</Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
            <div className={classes.content}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6">〇〇〇〇 様</Typography>
                    </Grid>
                    <Grid item xs={6} container alignItems="flex-end" justify="flex-end">
                        <Typography variant="subtitle2">担当: 〇〇 〇〇</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2">2020年 12月 31日</Typography>
                    </Grid>
                    <Grid item xs={6} container alignItems="flex-end" justify="flex-end">
                        <Typography variant="subtitle2">伝票番号: 000000</Typography>
                    </Grid>
                </Grid>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>品名</TableCell>
                                <TableCell align="right">数量</TableCell>
                                <TableCell align="right">単価</TableCell>
                                <TableCell align="right">金額</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={`row-${row.id}`}>
                                    <TableCell>{row.productName}</TableCell>
                                    <TableCell align="right">{row.total}</TableCell>
                                    <TableCell align="right">{row.unitPrice}</TableCell>
                                    <TableCell align="right">{row.sales}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={classes.actions}>
                <div className={classes.row}>
                    <Typography className={classes.summary}>合計: 1,000,000 (税込)</Typography>
                </div>
                <div className={classes.row}>
                    <div className={classes.signature}>署名してください</div>
                    <Button variant="contained" disableElevation onClick={goSignature}>
                        署名
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SlipView;
