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

export default function Accessibility(props) {
  const custom = useStyles();
    return (
      <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
        <ScrollToTopController />

        <div className="inner-content">
          <Typography variant="h1" gutterBottom>
            Accessibility
          </Typography>
          <Typography variant="h3">
            Making apps better for everyone means caring deeply about making quality products. A quality product should have a fantastic user experience (UX), including:
            <ul>
              <li>A beautiful and functional design</li>
              <li>Consistently useful copy</li>
              <li>Principles of universal design and inclusivity</li>
            </ul>
          </Typography>
          <Box mt={7} mb={7}>
            <Divider className={custom.divider} />
          </Box>
          <List>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                Usable for everyone
              </Typography>
              <Typography variant="body1">
              It’s important that Team Craft products are usable and useful to everyone.
              <br/><br/>
              Everyone is a pretty big group. It includes our colleagues, their customers, our developer partners, other employees, and the greater tech community at large. That also includes all members of our community who have disabilities.
              <br/><br/>
              Disabilities may affect how people move, see, hear, communicate, learn, understand, and process information. As a result, it’s important to consider how to design and develop your product to support a wide range of needs and experiences.
              <br/><br/>
              In the United States, as many as 1 in 4 adults has at least 1 disability [Source: CDC].
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                Building inclusive experiences
              </Typography>
              <Typography variant="body1">
              Using our components is a way to improve accessibility and consistency when building products for Team Craft.
              <br/><br/>
              <ul>
                <li>The component library in this design system includes code we can use across applications</li>
                <li>This component code includes accessible markup</li>
                <li>Since the code exists in a single component that gets reused, it’s easier to update and fix any bugs</li>
              </ul>
              <br/><br/>
              The build-it-once, use-it-everywhere model means the accessibility knowledge of the designers and developers who build these components is available to all of Team Craft and our partners. Because of this, colleagues get a consistent experience that can be leveraged into accessible products.
              <br/><br/>
              Many accessibility features come free in the components. But, it’s important to make sure that components are integrated in a way that doesn't create unforeseen accessibility barriers. Depending how components are used, there may be more design and implementation considerations. Be sure to test user task flows post integration.
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                Managing focus
              </Typography>
              <Typography variant="body1">
                Don’t programmatically move focus to new content without user input. Home components that use controls to display overlays, such as modals and popovers, manage focus automatically.
                <br/><br/>
                The only case where focus should be managed without the user's okay is when the user needs to be interrupted because they cannot continue their current workflow.
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                Limit non-standard interactions
              </Typography>
              <Typography variant="body1">
              Colleagues will expect to interact with controls and content in ways that follow the defaults for their browser, platform, assistive technologies, and previous experiences. Introducing non-standard features can give users better ways of accomplishing tasks, but they can also create barriers.
              <br/><br/>
              For example, colleagues who rely on the keyboard will expect that buttons can be activated with the ENTER / RETURN key or the SPACE key. If buttons are programmed to be used with different keys, users will need to be instructed on how to use them.
              <br/><br/>
              Before designing or building custom features that use non-standard controls or interactions, first consider whether the goal can be met using native features.
              <br/><br/>
              If non-standard interactions are required:
              <br/><br/>
              <ul>
                <li>Carefully follow guidelines and best practices for designing, building, and testing custom features on your platform</li>
                <li>Give users clear instructions for using the custom feature</li>
                <li>Provide an additional, standard way to accomplish the task</li>
              </ul>
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                Assistive technology support
              </Typography>
              <Typography variant="body1">
              Our components are tested for accessibility with automated and manual techniques. Users should expect to be able to access features built with our components using modern assistive technologies. These include native and third-party tools like:
              <br/><br/>
              <ul>
                <li>Screen readers</li>
                <li>Speech recognition programs</li>
                <li>Supports for low vision and color blindness</li>
                <li>Alternative keyboards</li>
                <li>Switch devices</li>
                <li>Tools for readability</li>
              </ul>
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h2">
                Code standards
              </Typography>
              <Typography variant="body1">
                Home components start with web standards for HTML, CSS, and JavaScript. Features from the Accessible Rich Internet Applications (WAI-ARIA or ARIA) specification are used to build functionality that is not available in native HTML.
                <br/><br/>
                Team Craft is committed to supporting WCAG 2.1 Level A and Level AA success criteria, and seeks to provide a highly usable experience for everyone.
              </Typography>
            </ListItem>
          </List>
          <div className="Content__wrapper">
            <div className="Content__section">
              <Box className={custom.prev}>
                <Typography variant="body2">
                  <Link to="/foundation/language"><ArrowBackIosIcon />Foundation: Language</Link>
                </Typography>
              </Box>
            </div>
            <div className="Content__section">
              <Box className={custom.next}>
                <Typography variant="body2">
                  <Link to="/brand/getting-started">Brand: Getting Started<ArrowForwardIosIcon /></Link>
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </Box>
    );
};
