import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import { Transition } from "react-transition-group";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 3),
  },
  lightBulb: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
}));

const projects = [
  { title: "3D Visualized Keyboard Chord Progression Utility", link: "https://orbmusic.club", linkTitle: " orbmusic.club ", cat: "Three.JS, React, Next.JS, Rebass, Tone.js, TonalJS" },
  { title: "Decision Maker - Randomized Algorithm", link: "https://choices.vercel.app", linkTitle: " choices.vercel.app ", cat: "Next.JS, React, Rebass" },
  { title: "Online Gaming Mouse Accuracy Practice Tool", link: "https://practice-point.vercel.app", linkTitle: " practice-point.vercel.app ", cat: "React, Next.JS, Rebass, React-Transition-Group, Context API" },
];

export default function Project(props) {
  const classes = useStyles();
  return (
   <>
    <Transition timeout={1250} {...props} appear>
     
     {(status) => (
       <div style={{
         transform: status === 'entered' ? 'translateY(0)' : 'translateY(10vw)',
         opacity: status === 'entered' ? 1 : 0,
         transition: 'transform 500ms ease, opacity 500ms ease'
       }}>
        <Typography className={classes.root} color="textSecondary">
      Projects{" "}
      <ul>
      {projects.map((x,i) =>   <li key={i}>
          <Typography key={i+'k'} className={classes.lightBulb} color="textPrimary">
          <Link href={x.link}>
            {x.linkTitle}
            </Link>
          {x.title}
            
          <span style={{
            display:'block',
            color: 'darkgray',
            
          }}>
          {x.cat}
          </span>
          </Typography>
        </li>)}
      </ul>
    </Typography>
       </div>
     )}
    </Transition> 
   </>
    
  );
}
