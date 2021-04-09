import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Divider,
  List,
  ListItem,
  Typography
} from '@material-ui/core';
import { Link } from "react-router-dom";
import { color, fontSize } from '@edma/design-tokens/';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ScrollToTopController from '../ScrollToTopController';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    background: theme.palette.type === 'light' ? color.white : color.black,
    textAlign: 'left'
  },
  anchor: {
    color: theme.palette.type === 'light' ? color.b700 : color.b200,
  },
  divider: {
    height: 4,
    color: theme.palette.type === 'light' ? color.g100 : color.g700
  },
  italic: {
    fontStyle: 'italic'
  },
  listItem: {
    display: 'block',
    marginBottom: '3rem',
    '& .MuiListItemText-primary': {
      fontSize: fontSize['1'],
      color: theme.palette.type === 'light' ? color.v700 : color.y300,
    }
  },
  headingSpan: {
    fontWeight: 'bold'
  },
  prev: {
    position: 'relative',
    marginTop: '2rem',
    width: '100%',
    textAlign: 'left',

    '& a': {
      color: theme.palette.type === 'light' ? color.black : color.white,
      padding: 16,
      borderRadius: 4,
      transition: 'all .2s ease-in-out',
      textDecoration: 'none',

      '&:hover': {
        background: theme.palette.type === 'light' ? color.g100 : color.g900
      },

      '& svg': {
        position: 'relative',
        top: 6,
        right: 4
      }
    }
  },
  next: {
    position: 'relative',
    marginTop: '2rem',
    width: '100%',
    textAlign: 'right',

    '& a': {
      color: theme.palette.type === 'light' ? color.black : color.white,
      padding: 16,
      borderRadius: 4,
      transition: 'all .2s ease-in-out',
      textDecoration: 'none',

      '&:hover': {
        background: theme.palette.type === 'light' ? color.g100 : color.g900
      },

      '& svg': {
        position: 'relative',
        top: 6,
        left: 8
      }
    }
  }
}));

export default function Language(props) {
  const custom = useStyles();
    return (
      <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
        <ScrollToTopController />

        <div className="inner-content">
          <Typography variant="h1" gutterBottom>
            Language
          </Typography>
          <Typography variant="h3">
            It’s important to use the same words, spelling, and capitalization consistently, otherwise things start looking messy and confusing for colleagues.
            <br/><br/>
            In general, use American English spelling for all content. When in doubt, check the Merriam-Webster dictionary for the preferred spelling of specific terms not found in this list.
          </Typography>
          <Box mt={7} mb={7}>
            <Divider className={custom.divider} />
          </Box>
          <List>
          <ListItem className={custom.listItem}>
              <Typography variant="h2">
                C
              </Typography>
              <Typography variant="h3">
                Craft, Team
              </Typography>
              <Typography variant="body1">
                A gaggle of badasses.
                <br/><br/>
                <span className={custom.italic}>"Have you heard about Team Craft? I heard they're super beefcake."</span>
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                D
              </Typography>
              <Typography variant="h3">
                Data lake / lake
              </Typography>
              <Typography variant="body1">
                It's like a large database, but one that takes advantage of serverless technologies.
                <br/><br/>
                <span className={custom.italic}>"Jeremy would like to store this document in the data lake."</span>
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                H
              </Typography>
              <Typography variant="h3">
                Hydrate / hydration
              </Typography>
              <Typography variant="body1">
                This can be referring to the act of adding data to the PennyMac data lake, or the act of transforming data within the PennyMac data lake.
                <br/><br/>
                <span className={custom.italic}>"Last Tuesday, Sarah hydrated the lake with some fresh reports."</span>
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                J
              </Typography>
              <Typography variant="h3">
                Job
              </Typography>
              <Typography variant="body1">
                Typically refers to a Cron Job. This is an automated task that runs based on a schedule, or when certain requisite events have occurred. Typically, someone will create a job in order to pull data from a database with some degree of recurrance.
                <br/><br/>
                <span className={custom.italic}>"The last time this job ran, it resulted in an error."</span>
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                T
              </Typography>
              <Typography variant="h3">
                Transform / transformation
              </Typography>
              <Typography variant="body1">
                This is when you pull data from a database, change it in some way (usually by writing a SQL script), and then push it back into the database as a different asset.
                <br/><br/>
                <span className={custom.italic}>"Winston loves transforming reports with new data."</span>
              </Typography>
            </ListItem>
          </List>
          <div className="Content__wrapper">
            <div className="Content__section">
              <Box className={custom.prev}>
                <Typography variant="body2">
                  <Link to="/foundation/design-principles"><ArrowBackIosIcon />Foundation: Design Principles</Link>
                </Typography>
              </Box>
            </div>
            <div className="Content__section">
              <Box className={custom.next}>
                <Typography variant="body2">
                  <Link to="/foundation/accessibility">Foundation: Accessibility<ArrowForwardIosIcon /></Link>
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </Box>
    );
};
