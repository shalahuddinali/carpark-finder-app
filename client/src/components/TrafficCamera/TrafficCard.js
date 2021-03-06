import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

function TrafficCard({ img, road }) {
	const useStyles = makeStyles({
		root: {
			margin: 30,
			height: 400,
			width: 500,
		},
		media: {
			height: 300,
			width: 470,
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'row',
			objectFit: 'fill',
		},
	});

	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography gutterBottom variant="h6">
					{road}
				</Typography>
				<CardMedia className={classes.media} image={img} />
			</CardContent>
		</Card>
	);
}

export default TrafficCard;
