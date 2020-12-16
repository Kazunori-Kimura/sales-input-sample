import { Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { FormMode } from '../../types';
import { rows } from '../../data';

interface DetailListProps {
    goForm?: (value: FormMode) => void;
    goSlip?: VoidFunction;
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
    },
    title: {
        flex: 1,
    },
    action: {
        marginLeft: theme.spacing(1),
    },
    content: {
        flex: 1,
        marginBottom: theme.mixins.toolbar.minHeight,
        backgroundColor: theme.palette.background.paper,
        overflowY: 'scroll',
    },
    list: {
        width: 1400,
        height: '100%',
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        width: '100vw',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: theme.palette.divider,
    },
    summary: {
        flex: 1,
    },
}));

// テーブル定義
const columns: ColDef[] = [
    {
        field: 'productCode',
        headerName: '商品コード',
        width: 100,
    },
    {
        field: 'productName',
        headerName: '商品名',
        width: 100,
    },
    {
        field: 'dueDate',
        headerName: '納品日',
        width: 100,
    },
    {
        field: 'unit',
        headerName: '単位',
        width: 100,
    },
    {
        field: 'perbox',
        headerName: '入数',
        width: 100,
    },
    {
        field: 'boxes',
        headerName: 'ケース数',
        width: 100,
    },
    {
        field: 'pieces',
        headerName: 'バラ数',
        width: 100,
    },
    {
        field: 'total',
        headerName: '総数',
        width: 100,
    },
    {
        field: 'unitPrice',
        headerName: '単価',
        width: 100,
    },
    {
        field: 'retailPrice',
        headerName: '小売価格',
        width: 100,
    },
    {
        field: 'cost',
        headerName: '原価',
        width: 100,
    },
    {
        field: 'grossProfit',
        headerName: '粗利率',
        width: 100,
    },
    {
        field: 'sales',
        headerName: '売上',
        width: 100,
    },
];

const DetailList: React.FC<DetailListProps> = ({ goForm, goSlip }) => {
    const classes = useStyles();

    const handleAdd = () => {
        if (goForm) {
            goForm('add');
        }
    };

    const handleEdit = () => {
        if (goForm) {
            goForm('edit');
        }
    };

    return (
        <div className={classes.root}>
            <Toolbar className={classes.header}>
                <Typography className={classes.title}>売上明細</Typography>
                <Button
                    className={classes.action}
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAdd}
                    size="small"
                >
                    追加
                </Button>
                <Button
                    className={classes.action}
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={handleEdit}
                    size="small"
                >
                    編集
                </Button>
                <Button
                    className={classes.action}
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    size="small"
                >
                    削除
                </Button>
            </Toolbar>
            <div className={classes.content}>
                <div className={classes.list}>
                    <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
                </div>
            </div>
            <Toolbar className={classes.footer}>
                <Typography className={classes.summary}>合計: 1,000,000円</Typography>
                <Button variant="contained" color="primary" onClick={goSlip}>
                    伝票表示
                </Button>
            </Toolbar>
        </div>
    );
};

export default DetailList;
