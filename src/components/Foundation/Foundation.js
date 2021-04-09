import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { color, fontSize } from '@edma/design-tokens/';
import ScrollToTopController from '../ScrollToTopController';
import SplitText from '../SplitText';
import { ReactComponent as ArrowDiag } from '../../assets/img/arrow.diag.svg';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    background: theme.palette.type === 'light' ? color.white : color.black,
    textAlign: 'left'
  },
  anchor: {
    color: theme.palette.type === 'light' ? color.y700 : color.y300,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline'
    }
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
  },
  huge: {
    color: theme.palette.type === 'light' ? color.y500 : color.y300
  }
}));

export default function Foundation(props) {
  const classes = useStyles();

  return (
    <>
      <ScrollToTopController />
      <div className='mask mask--huge'>
        <div className={`huge ${classes.huge}`}>01<span className='huge--num'>a</span></div>
      </div>
      <span className='mask'>
        <div className='internal-heading'>Foundation</div>
      </span>
      <div className='internal-intro'>
        <SplitText copy="Home makes it easy to design and build PennyMac apps that people trust and understand how to use right from the start." />
        <br/><br/>
        <SplitText copy="It takes more than components to create successful features and flows. These bedrock guidelines will help you design more usable PennyMac apps." />
      </div>
      <div className='internal-heading'>Consistency is key</div>
      <div className='internal-paragraph'>
        Home is designed to be used in combination with Google Material. To maintain a consistent experience, there should be no other component or style libraries used.
        <br /><br />
        Don’t use Home on some pages of your app, but not on others.
        <br /><br />
        When building your own components:
        <ul>
          <li>Include both light and dark mode color schemes for your components.</li>
          <li>Avoid bold or inverted background colors. For light mode, this would be light text on a dark background. For dark mode, the opposite. Home uses inverted backgrounds only for calling attention to very important parts of the interface, such as primary buttons and the side navigation.</li>
          <li>Use icons only at the standard 24px size. This promotes consistency and avoids blurry icons.</li>
          <li>Follow the <Link key='0' to='/foundation/design-principles' className={classes.anchor}>design principles</Link> when building your own components.</li>
          <li>Use familiar page layouts.</li>
          <li>Use illustration sparingly.</li>
        </ul>
      </div>
      <div className='internal-heading'>You are here</div>
      <div className='internal-paragraph'>
        Home apps create a seamless experience, but they are typically part of a larger ecosystem of tools that our colleagues use every day. It’s important that people always understand where they are within that ecosystem. Always identify your app when communicating with users. This is especially true when there might be uncertainty. For example, a confirmation email should repeat the app name and/or logo. Support staff responding to questions should mention the app by name again.
      </div>
      <div className='internal-heading'>Be recognizable</div>
      <div className='internal-paragraph'>
        Home can be used to build stand-alone apps for users or groups of users, but it’s important they know the difference between each app. We should never confuse users. This also helps your app establish its own "brand" and helps people understand who to contact for support.
      </div>
      <div className='internal-heading'>Focus on the user's goals</div>
      <div className='internal-paragraph'>
        Don’t promote other apps within user workflows, as that distracts from their cognitive focus. Instead, clearly identify sections where users can learn about other apps you offer. Make sure those sections are always contextually relevant to the content that they surround.
      </div>
      <div className='internal-heading'>Make navigation obvious</div>
      <div className='internal-paragraph'>
        When structuring your app’s navigation, build around our users' needs and their mental models.
        <br/><br/>
        Menu items should:
        <ul>
          <li>
            Represent what the app does with the fewest possible categories
          </li>
          <li>
            Each be short and scannable
          </li>
          <li>
            Use nouns
          </li>
        </ul>
      </div>
      <div className='internal-heading'>Words matter</div>
      <div className='internal-paragraph'>
        Words can make or break the user experience of an app. Home has practical guidelines that take the guesswork out of communicating with users. Check out the product content overview, including sections on:
        <ul>
          <li>
            Vocabulary, including terms like “hydration” and “job” and the difference between “log in” and “login”.
          </li>
          <li>
            Content guidelines within many of the individual component pages. These give you specific instructions on how to structure and format your content for that component, along with advice on terminology to use.
          </li>
          <li>
            Help documentation guidelines to assist you with writing documentation that helps users understand your app.
          </li>
        </ul>
      </div>
      <div className='Footer Footer--foundation'>
        <div className='Footer__left'></div>
        <Link to='/foundation/design-principles/' className='Footer__right'>
          <div className='Footer__container'>
            <div className='Footer__heading' data-num='01' data-let='b'>next</div>
          </div>
          <ArrowDiag className='Footer__icon' />
          <div className='Footer__link'>
            <div className='Footer__num'>01b.</div>
            <div className='Footer__title'>Design Principles</div>
          </div>
        </Link>
      </div>
    </>
  );
};
