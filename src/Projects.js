import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import { Transition } from "react-transition-group";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
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
  { title: "My Sophomore EP Release Website", link: "https://20byrasha.xyz/rollercoaster", linkTitle: " 20byrasha.xyz ", cat: "React, Next.JS, Rebass, React-Transition-Group, React-Player, CSS" },
  { title: "Javascript Event Key Finder", link: "https://js-keys.vercel.app/", linkTitle: " js-keys.vercel.app ", cat: "React, Next.JS, Rebass, CSS" }, 
  { title: "Mock Commercial Website", link: "https://mock-commercial-site-f50t34p0i.vercel.app/", linkTitle: " mock-commercial-site.vercel.app ", cat: "React, Next.JS, Rebass, React-Transition-Group, Typescript, CSS" }
].reverse();


export default function Project(props) {
  const classes = useStyles();
  return (
   <>
    <Transition {...props} appear>
     
     {(status) => (
       <div style={{
         transform: status === 'entered' ? 'translateY(0)' : 'translateY(10vw)',
         opacity: status === 'entered' ? 1 : 0,
         transition: 'transform 500ms ease, opacity 500ms ease'
       }}>
        <Typography className={classes.root}   style={{
          color: {...props}.inv ? 'white' : 'rgba(0, 0, 0, 0.54)',
          transition: 'all 300ms ease-in-out'
        }}>
      Projects{" "}
      <ul>
      {projects.map((x,i) =>   <li key={i}>
          <Typography key={i+'k'} className={classes.lightBulb} color="textPrimary">
          <Link href={x.link}>
            {x.linkTitle}
            </Link>
        <span style={{
          color: {...props}.inv ? 'white' : 'rgba(0, 0, 0, 0.54)'
        }}>  {x.title}</span>
            
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
