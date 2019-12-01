import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function MUICard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { title, description, type, tried, owner, assigned, date } = props.ticket;
    return (
        <Card className={classes.card} {...props} >
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Title: {title}
                </Typography>
                <Typography variant="h5" component="h2">
                    {bull}
                    Type: {type}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Owner: {owner}
                </Typography>
                <Typography variant="body2" component="p">
                    Description: {description}
                    <br />
                    Date: {date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Open</Button>
            </CardActions>
        </Card>
    );
}