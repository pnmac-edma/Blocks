import React, { createRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowRight from '@material-ui/icons/ArrowRight';
import CheckRounded from '@material-ui/icons/CheckRounded';
import Button from '@material-ui/core/Button';
import color from '@edma/design-tokens/js/color';
import fontSize from '@edma/design-tokens/js/fontSize';
import ScrollToTopController from './components/ScrollToTopController';

const useStyles = makeStyles(theme => ({
  toolbar: {
    height: '30vw',

    [theme.breakpoints.up('lg')]: {
      height: '20vw',
    },

    [theme.breakpoints.up('md')]: {
      height: '15vw',
    },
  },
  content: {
    margin: 40,
    flexGrow: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    }
  },
  flexCards: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    flexWrap: 'no-wrap',
    width: '100%',
  },
  anchor: {
    color: theme.palette.type === 'light' ? color.b400 : color.b300,

    '&:hover': {
      textDecoration: 'none',
    },
  },
  button: {
    color: theme.palette.type === 'light' ? color.b400 : color.b300,
    borderColor: theme.palette.type === 'light' ? color.b400 : color.b300,
    textDecoration: 'none',

    '&:not(:first-of-type)': {
      margin: theme.spacing(2),
    },
  },
  inlineCode: {
    background: theme.palette.type === 'light' ? color.g200 : color.g700,
    fontSize: fontSize['0'],
  },
  blocks: {
    color: theme.palette.type === 'light' ? color.v700 : color.y300,
  }
}));

let divs = [];

export default function Home(props) {
  const custom = useStyles();
  const theme = useTheme();
  const lightColorArray = [
    color.b200, color.b300, color.p200, color.p300, color.r200,
    color.r300, color.g300, color.g400, color.g500,
  ];
  const darkColorArray = [
    color.b200, color.b300, color.p200, color.p300, color.r200,
    color.r300, color.g300, color.g200,
  ];
  let blocksContainer = createRef();

  window.addEventListener('scroll', (e) => {
    const scrolled = window.pageYOffset,
          block = blocksContainer.current;

    if (scrolled <= 530) {
      let blockCoords = (0 - (scrolled *0.40) + 'px'),
          blockOpacity = (1 - (scrolled *0.004));

      if (block) {
        block.style.marginTop = blockCoords;
        block.style.opacity = blockOpacity;
      }
    }
  });

  const generateBlocks = (qty) => {
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].style.opacity === 0)
        divs[i].remove();
    }

    setTimeout(() => {
      for (let i = 0; i < qty; i++) {
        const classy = 'block block-' + i;
        let randomColor;
        if (theme.palette.type === 'light') {
          randomColor = lightColorArray[Math.floor(Math.random()*lightColorArray.length)];
        } else {
          randomColor = darkColorArray[Math.floor(Math.random()*darkColorArray.length)];
        }
        let d = document.createElement("div");

        d.style.cssText = `background-color: ${randomColor}`;
        //d.style.opacity = '0.5';
        d.className = classy;
        if (blocksContainer.current)
          blocksContainer.current.appendChild(d);

        for (let j = 0; j < 40; j++) {
          let randomDisplay = Math.floor(Math.random()*qty);

          setTimeout(() => {
            if (classy === 'block block-' + randomDisplay) {
              d.style.opacity = 0.5;
            }
          }, randomDisplay*10);
        }
      }
    }, 0);
  };

  generateBlocks(31);

  return (
    <main className={custom.content}>
      <div ref={blocksContainer} />
      <ScrollToTopController />
      <div className={custom.toolbar} />
      <div className="content" >
        <Typography variant="h5">
          Building blocks for rapidly creating consistent, high quality design and front end experiences. <span className={custom.blocks}>Blocks</span> gives you design principles, tokens, and stateless React components that are easy to use.
        </Typography>

        <Box mt={7}>
          <Divider />
        </Box>

        <Box mt={10}>
          <Typography variant="h3" gutterBottom>
            Getting Started
          </Typography>
        </Box>
        <Box mt={10}>
          <Typography variant="body1" gutterBottom>
            Blocks is foundationally Google Material UI, with modified components and additional features built on top, designed to meet PennyMac's specific needs. Blocks is flexible. It changes with PennyMac, as those needs evolve over time.<br/><br/>
            Some reasons why you should consider building with Blocks:
          </Typography>
          <List>
            <ListItem dense>
            <ListItemIcon>
                <CheckRounded />
              </ListItemIcon>
              <ListItemText primary="Faster design means more designs" secondary="The Figma pattern library and Material UI give designers the components they need to build beautiful, functional interfaces, without wasting time reinventing wheels." />
            </ListItem>
            <ListItem dense>
              <ListItemIcon>
                <CheckRounded />
              </ListItemIcon>
              <ListItemText primary="Automated documentation" secondary="Documentation is foundational to Blocks components, and automatically generated from inline comments by React-docgen and React-styleguidist." />
            </ListItem>
            <ListItem dense>
              <ListItemIcon>
                <CheckRounded />
              </ListItemIcon>
              <ListItemText primary="Lean and DRY" secondary="Blocks apps share the same foundational code, which means devs never write the same code twice, which leads to less bloated and ultimately more performant codebases and faster development cycles." />
            </ListItem>
            <ListItem dense>
              <ListItemIcon>
                <CheckRounded />
              </ListItemIcon>
              <ListItemText primary="Easy to theme" secondary="Material UI's built in theme tools provide simple yet powerful cross-platform visual controls for theming any app." />
            </ListItem>
            <ListItem dense>
              <ListItemIcon>
                <CheckRounded />
              </ListItemIcon>
              <ListItemText primary="More heads are better" secondary="Deep integration with the Figma REST API helps to automate design token handoff, enabling designers to hand off production-ready code assets and better collaborate with developers." />
            </ListItem>
            <ListItem dense>
              <ListItemIcon>
                <CheckRounded />
              </ListItemIcon>
              <ListItemText primary="Reusable things get used more" secondary="Blocks' library of reusable components grows over time, reducing the time required to build apps each time." />
            </ListItem>
            <ListItem dense>
              <ListItemIcon>
                <CheckRounded />
              </ListItemIcon>
              <ListItemText primary="Principled practice" secondary="Core design principles act as a set of foundational guides, to ensure that components always work for the user." />
            </ListItem>
          </List>
        </Box>
        <Box mt={7}>
          <Divider />
        </Box>
        <Box mt={10}>
          <Typography variant="h5" gutterBottom>
            Working With &amp; Contributing To Blocks
          </Typography>
          <Typography variant="body1" gutterBottom>
            There are two paths to working with Blocks; one for designers, the other for front end developers. In order to use Blocks, you will need a recent version of Node (10+) with NPM installed.
          </Typography>
        </Box>
        <Box mt={5}>
          <Typography variant="h6">
            For Designers
          </Typography>
          <Typography variant="body1" gutterBottom>
            Designing with Blocks essentially means working in Figma and Principle. Figma is used for creating and exporting design tokens, as well as mocking up static screens and components. Principle is used for mocking up interaction designs, such as hover, drag, and click interactions. <br/><br/>

            <a href='https://www.figma.com/file/SKkSxha8LQG7lPvIJ2PWHf/Design-Tokens?node-id=0%3A1' target='_blank' rel="noopener noreferrer" className={custom.button}>
              <Button color="primary" variant="outlined" className={custom.button}>View Figma Tokens</Button>
            </a>
            <a href='https://www.figma.com/file/k9LG6iA4oKNiCyIc9TrNmD/Material-Theme?node-id=0%3A2' target='_blank' rel="noopener noreferrer" className={custom.button}>
              <Button color="primary" variant="outlined" className={custom.button}>View Material Theme</Button>
            </a><br/><br/>
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText>Open the <a href='https://www.figma.com/files/team/720698272864929877/EDMA' target='_blank' rel="noopener noreferrer" className={custom.anchor}>EDMA Team</a> in Figma</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText>Create a new project within the EDMA team, or load an existing project</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText>Design stuff!</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box mt={5}>
          <Typography variant="h6">
            For Developers
          </Typography>
          <Typography variant="body1" gutterBottom>
            Blocks contains a variety of tools that can help expedite, and even automate, some front end development tasks. The front end stack is built with React.js, and leverages the <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer" className={custom.anchor}>Material-UI</a> React library. Tooling includes a <a href="https://gitlab.pnmac.com/ent-bi-tech/design-tokens" target="_blank" rel="noopener noreferrer" className={custom.anchor}>design token generator</a> that also uses <a href="https://github.com/amzn/style-dictionary" target="_blank" rel="noopener noreferrer" className={custom.anchor}>AWS Style Dictionary</a>. <br/><br/>

            <a href='https://gitlab.pnmac.com/ent-bi-tech/design-docs' target='_blank' rel="noopener noreferrer" className={custom.button}>
              <Button color="primary" variant="outlined" className={custom.button}>View Blocks Repository</Button>
            </a>
            <a href='https://gitlab.pnmac.com/ent-bi-tech/design-tokens' target='_blank' rel="noopener noreferrer" className={custom.button}>
              <Button color="primary" variant="outlined" className={custom.button}>View Design-tokens Repository</Button>
            </a><br/><br/>
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText>Scaffold a new react app using <a href='https://github.com/facebook/create-react-app' target='_blank' rel="noopener noreferrer" className={custom.anchor}>Create-react-app</a> and add it to a new repository in <a href="https://gitlab.pnmac.com/ent-bi-tech" target='_blank' rel="noopener noreferrer" className={custom.anchor}>GitLab</a></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText>Install Blocks and Design Tokens in your repo as dev dependencies by running<br/><code className={custom.inlineCode}>npm i @edma/blocks @edma/tokens --save-dev</code></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText>Install Material-UI by following the <a href="https://material-ui.com/getting-started/installation/" target="_blank" rel="noopener noreferrer" className={custom.anchor}>Material-UI Documentation</a></ListItemText>
            </ListItem>
          </List>
        </Box>
      </div>
    </main>
  )
};
