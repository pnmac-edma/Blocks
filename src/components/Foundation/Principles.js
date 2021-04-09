import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Typography
} from '@material-ui/core';
import { Link } from "react-router-dom";
import { color, fontSize } from '@edma/design-tokens/';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ScrollToTopController from '../ScrollToTopController';
import { ReactComponent as ExploreGraphic } from '../../assets/img/graphic.explore.light.svg';
import { ReactComponent as LearnGraphic } from '../../assets/img/graphic.learn.light.svg';
import { ReactComponent as SimplifyGraphic } from '../../assets/img/graphic.simplify.light.svg';
import { ReactComponent as CollabGraphic } from '../../assets/img/graphic.collaborate.light.svg';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    background: theme.palette.type === 'light' ? color.white : color.black,
    textAlign: 'left'
  },
  divider: {
    height: 4,
    color: theme.palette.type === 'light' ? color.g100 : color.g700
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
  explore: {
    position: 'absolute',
    right: '-2rem',
    width: 380,
    height: 427,
    top: -20,
    overflow: 'visible'
  },
  learn: {
    position: 'absolute',
    right: '-2rem',
    top: 200,
    width: 315,
    height: 427,
    overflow: 'visible'
  },
  simplify: {
    position: 'absolute',
    right: '-2rem',
    top: 100,
    width: 315,
    height: 427,
    overflow: 'visible'
  },
  collab: {
    position: 'absolute',
    right: '-2rem',
    top: 100,
    width: 315,
    height: 427,
    overflow: 'visible'
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

export default function Principles(props) {
  const custom = useStyles();
    return (
      <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
        <ScrollToTopController />

        <div className="inner-content">
          <Typography variant="h1" gutterBottom>
            Design Principles
          </Typography>
          <Typography variant="h3">
            At PennyMac, we empower people to purchase their own homes. Team Craft builds products, tools, and services to make it easier for our colleagues to excel.
            <br /><br />
            These principles are the core of how we design and build experiences on Team Craft.
          </Typography>
          <Box mt={7} mb={7}>
            <Divider className={custom.divider} />
          </Box>
          <List>
            <ListItem className={custom.listItem}>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography variant="h2">
                    Explore
                  </Typography>
                  <Typography variant="body1">
                    We embrace the unknown by experimenting with <strong>fresh ideas</strong> and <strong>new technologies</strong> in order to <strong>solve problems</strong>. We think boldly and dare to be innovative and disruptive. We aren’t afraid to break things, because we know that we can fix them. We explore as many unusual and new ideas as possible in order to <strong>innovate</strong>, even if that sometimes leads to uncomfortable or controversial outcomes. We validate everything through iterative, measured analysis and testing to keep ourselves honest.
                    <br/><br/>
                    We reject boundaries. <strong>“Not invented here” doesn’t exist.</strong> We communicate our bold direction and we accept being misunderstood for long periods of time, so that we can bring new great visions into the world.
                  </Typography>
                </Grid>
                <Grid item>
                  <ExploreGraphic className={custom.explore} />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography variant="h2">
                    Learn
                  </Typography>
                  <Typography variant="body1">
                    We obsess over the people who use our products and we make no assumptions. We understand that only by prioritizing <strong>research, analysis, and testing with our users</strong> can we truly understand them. We <strong>talk to our users</strong>, seeking their <strong>feedback</strong> early and often throughout the product life cycle. We work to validate all opinions, especially our own, by practicing dutiful modesty and remaining humble. We understand that we do not have all the answers, and that all ideas are assumptions until tested. We stay true to the data by coming forward with information, even when it might be awkward or embarrassing.
                    <br/><br/>
                    We <strong>empathize with users</strong> and treat them like our trusted partners, and we want them to consider us the same way.
                    <br/><br/>
                    As engineers, we empathize with users by designing functionality with an application’s interface in mind, and by always considering how a service will be accessed. By aligning functionality to how people use the UI, we are able to <strong>walk in the user’s shoes</strong>. We also work to make sure that our efforts are always prioritized based on user needs.
                    <br/><br/>
                    As developers, we empathize with users by making sure the interface and its controls work how and when users want them to; across different devices and platforms. We prioritize clean, easy to read code; and fluid, dynamic interactions.
                    <br/><br/>
                    As designers, we empathize with users by <strong>listening, asking questions, challenging assumptions, and remaining humble</strong> against the user’s opinions. We make sure every feature adds value for users and for the business. We ensure interfaces have clear and visually prioritized calls to action, and we avoid reinventing the wheel when established conventions help ground newer users.
                  </Typography>
                </Grid>
                <Grid item>
                  <LearnGraphic className={custom.learn} />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography variant="h2">
                    Simplify
                  </Typography>
                  <Typography variant="body1">
                    We understand that creating something simple is anything but, so we design our products to be <strong>fundamentally useful</strong> for our users. We make sure that every design element works with, and contributes to, the larger whole. <strong>Less is more.</strong> Motion is used to provide meaning, roadblocks are removed for the user, required steps are optimized, and form fields are auto-filled when possible. We make sure that our designs are <strong>unambiguous, easy to follow, and straight forward</strong>. We respect our users’ time and the impact we have on their lives, and we ensure they always understand what is happening and why. We prioritize core functionality. Content over chrome.
                    <br/><br/>
                    We get out of our user’s way by leaving only the most essential elements on the screen. Reducing UI to its minimal roots often has a beneficial impact on overall aesthetics. Where possible, we make navigation elements from the content itself.
                    <br/><br/>
                    We also apply this principle operationally. We break big tasks into smaller, more manageable ones. As developers, we focus on fundamentals and simplicity through our efficient code structures and componentized work streams. We systemize our assets and take advantage of agile workflows to make it faster and easier for us to rapidly craft new products.
                  </Typography>
                </Grid>
                <Grid item>
                  <SimplifyGraphic className={`simplify ${custom.simplify}`} />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography variant="h2">
                    Collaborate
                  </Typography>
                  <Typography variant="body1">
                    Our team is greater than the sum of its parts. We each step up every day to help each other do what needs to be done. When we see an opportunity to make something better, we do it. <strong>“Not my job” doesn’t exist here.</strong> We understand that by working together, we achieve more.
                    <br/><br/>
                    We treat our users like our most important collaborators. <strong>People support what they help build.</strong> We include users early and often in the decision making process. We understand that engagement requires more than just communication. We want our users to feel like they share a common goal with us.
                    <br/><br/>
                    We embrace change, always ready to adopt new behaviors, values, and attitudes. We <strong>learn from each other</strong> and are each empowered to make decisions on functionality and design. Each of us understands the value of what we’re building. Though we may not always agree, we always reach consensus by treating each other with <strong>respect and dignity</strong>.
                    <br/><br/>
                    As developers, we review each other’s code in order to realize constant improvement. We embrace open source. We publish our work and we share our ideas at every turn. This enables us and others to understand, modify, improve, distribute, and use our work more effectively. It allows us to collaborate in our efforts not just with each other, but with the entire world.
                  </Typography>
                </Grid>
                <Grid item>
                  <CollabGraphic className={custom.collab} />
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <div className="Content__wrapper">
            <div className="Content__section">
              <Box className={custom.prev}>
                <Typography variant="body2">
                  <Link to="/foundation/getting-started"><ArrowBackIosIcon />Foundation: Getting Started</Link>
                </Typography>
              </Box>
            </div>
            <div className="Content__section">
              <Box className={custom.next}>
                <Typography variant="body2">
                  <Link to="/foundation/language">Foundation: Language<ArrowForwardIosIcon /></Link>
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </Box>
    );
};
