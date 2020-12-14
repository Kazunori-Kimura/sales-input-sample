import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        //
    },
}));

const Detail: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography>明細</Typography>
        </div>
    );
};

export default Detail;
