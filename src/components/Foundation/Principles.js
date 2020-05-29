import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Divider,
  List,
  ListItem,
  Typography
} from '@material-ui/core';
import { color, fontSize } from '@edma/design-tokens/';
import ScrollToTopController from '../ScrollToTopController';

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
            <span className={custom.headingSpan}>C</span>reative<br/>
            <span className={custom.headingSpan}>R</span>elatable<br/>
            <span className={custom.headingSpan}>A</span>nalytical<br/>
            <span className={custom.headingSpan}>F</span>undamental<br/>
            <span className={custom.headingSpan}>T</span>eamwork
          </Typography>
          <Box mt={7} mb={7}>
            <Divider className={custom.divider} />
          </Box>
          <List>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                Creative
              </Typography>
              <Typography variant="body1">
                We embrace the unknown by experimenting with fresh ideas and new technologies in order to solve people’s problems. We think boldly and dare to be innovative and disruptive. We aren’t afraid to break things, because we know that we can fix them. We explore as many unusual and new ideas as possible in order to realize new innovations, even if that sometimes leads to uncomfortable or controversial outcomes. We validate all ideas through iterative, measured analysis and testing to keep ourselves honest.
                <br/><br/>
                We reject boundaries. “Not invented here” doesn’t exist. We communicate our bold direction and we accept being misunderstood for long periods of time, so that we can bring new great visions into the world.
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                Relatable
              </Typography>
              <Typography variant="body1">
                We obsess over the people who use our products, and we make sure our products relate to them and their needs. We make every experience intuitive and enjoyable by talking to our users, exercising transparency, and asking users the right questions to uncover root problems. Ongoing research and testing enable us to determine what people need, even if they sometimes can’t themselves. We empathize with users and treat them like our trusted partners, and we want them to consider us the same way.
                <br/><br/>
                As engineers, we empathize with users by designing functionality with an application’s interface in mind, and by always considering how a service will be accessed. By aligning functionality to how people use the UI, we are able to walk in the user’s shoes. We also work to make sure that our efforts are always prioritized based on user needs.
                <br/><br/>
                As developers, we empathize with users by making sure the interface and its controls work how and when users want them to; across different devices and platforms. We prioritize clean, easy to read code; and fluid, dynamic interactions.
                <br/><br/>
                As designers, we empathize with users by listening, asking questions, challenging assumptions, and remaining humble against the user’s opinions. We make sure every feature adds value for users and for the business. We ensure interfaces have clear and visually prioritized calls to action, and we avoid reinventing the wheel when established conventions help ground newer users.
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                Analytical
              </Typography>
              <Typography variant="body1">
                Analytical thinking is core to Team Craft. We make no assumptions. We understand that only by prioritizing research, analysis, and testing with our users can we truly understand them. We seek their feedback early and often, throughout the product life cycle. We work to validate all opinions, especially our own. We practice dutiful modesty and remain humble by understanding that we do not have all the answers, and that all ideas are assumptions until tested. We stay true to the data by coming forward with information, even when it might be awkward or embarrassing.
                <br/><br/>
                Being data-focused enables us to spend more time focused on features that add value to our users, thereby helping to mitigate many risks associated with creating new products.

              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                Fundamental
              </Typography>
              <Typography variant="body1">
                We understand that creating something simple is anything but, so we design our products to be fundamentally useful for our users. We make sure that every design element works with, and contributes to, the larger whole. Less is more. Motion is used to provide meaning, roadblocks are removed for the user, required steps are optimized, and form fields are auto-filled when possible. We make sure that our designs are unambiguous, easy to follow, and straight forward. We respect our users’ time and the impact we have on their lives, and we ensure they always understand what is happening and why. We prioritize core functionality. Content over chrome.
                <br/><br/>
                We get out of our user’s way by leaving only the most essential elements on the screen. Reducing UI to its minimal roots often has a beneficial impact on overall aesthetics. Where possible, we make navigation elements from the content itself.
                <br/><br/>
                We also apply this principle operationally. We break big tasks into smaller, more manageable ones. As developers, we focus on fundamentals and simplicity through our efficient code structures and componentized work streams. We systemize our assets and take advantage of agile workflows to make it faster and easier for us to rapidly craft new products.
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                Teamwork
              </Typography>
              <Typography variant="body1">
                We are a strongly bonded interdisciplinary force of nature. We each step up every day to help each other do what needs to be done. When we see an opportunity to make something better, we do it. “Not my job” doesn’t exist here. We understand that by working together, we achieve more.
                <br/><br/>
                We treat our users like our most important collaborators. People support what they build. We include users early and often in the decision making process. We understand that engagement requires more than just communication. We want our users to feel like they share a common goal with us.
                <br/><br/>
                We embrace change, always ready to adopt new behaviors, values, and attitudes. We learn from each other and are each empowered to make decisions on functionality and design. Each of us understands the value of what we’re building. Though we may not always agree, we always reach consensus by treating each other with respect and dignity.
                <br/><br/>
                As developers, we review each other’s code in order to realize constant improvement. We embrace open source. We publish our work and we share our ideas at every turn. This enables us and others to understand, modify, improve, distribute, and use our work more effectively. It allows us to collaborate in our efforts not just with each other, but with the entire world.
              </Typography>
            </ListItem>
          </List>
        </div>
      </Box>
    );
};
