import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { color, font } from '@edma/design-tokens';
import Button from './components/Button/Button';

const useStyles = makeStyles(theme => ({
  version: {
    position: 'fixed',
    bottom: 64,
    right: 32,
    fontFamily: 'Gilroy',
    fontWeight: 'normal',
    fontSize: 14,
    transform: 'rotate(90deg)'
  },
  lineWrapper: {
    margin: '40px 0 72px'
  },
  cards: {
    display: 'flex',
    flexDirection: 'row'
  },
  card: {
    width: '24vw',
    textAlign: 'left',
    margin: '0 104px 104px 0',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    opacity: 0
  },
  cardHeading: {
    fontFamily: font.heading,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  cardDescription: {
    marginBottom: 32,
    lineHeight: 1.7,
    fontSize: 16
  },
  cardLink: {
    color: theme.palette.type === 'light' ? color.black : color.white,
    fontSize: 16,

    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

export default function Home(props:any) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.lineWrapper}>
        <div className={`line`} />
      </div>
      <div className={classes.cards}>
        <div className={`${classes.card} card-1`}>
          <div className={classes.cardHeading}>Foundation</div>
          <div className={classes.cardDescription}>
            Find out how we make sure that our design is accessible, user focused, and intentional.
          </div>
          <Link to="/foundation/getting-started/" className={classes.cardLink}>
            View Content Guidelines
          </Link>
        </div>
        <div className={`${classes.card} card-2`}>
          <div className={classes.cardHeading}>Brand</div>
          <div className={classes.cardDescription}>
            Learn how we use design to maintain a consistent and professional brand image.
          </div>
          <Link to="/brand/getting-started/" className={classes.cardLink}>
            View Brand Guidelines
          </Link>
        </div>
      </div>
      <div className={classes.cards}>
        <div className={`${classes.card} card-3`}>
          <div className={classes.cardHeading}>Design</div>
          <div className={classes.cardDescription}>
            See how we put the pieces together to create meaningful product experiences.
          </div>
          <Link to="/foundation/getting-started/" className={classes.cardLink}>
            View Content Guidelines
          </Link>
        </div>
        <div className={`${classes.card} card-4`}>
          <div className={classes.cardHeading}>Components</div>
          <div className={classes.cardDescription}>
            Use components as building blocks while you develop new products and features.
          </div>
          <Link to="/foundation/getting-started/" className={classes.cardLink}>
            View Components
          </Link>
        </div>
      </div>
      <span>This is an <Button>Example Button</Button>.</span>
      <div className={classes.version}>v{props.version}</div>
    </>
  )
};
