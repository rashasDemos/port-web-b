import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import { Transition } from "react-transition-group";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 0, 3),
  },
  lightBulb: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
}));

export default function Capt(props,{inv}) {
  const classes = useStyles();
  useEffect(() => {
    console.log({...props})
  })
  return (
   <div style={{color: inv ? 'white' : 'rgba(0, 0, 0, 0.54)'}}>
   <Transition timeout={200} {...props} appear>
     
    {(status) => (
      <div style={{
        transform: status === 'entered' ? 'translateX(0)' : 'translateX(100vw)',
        transition: 'transform 200ms ease'
      }}>
        <Typography className={classes.root} component="h2"style={{
          color: {...props}.inv ? 'white' : 'rgba(0, 0, 0, 0.54)'
        }}>
      I am an energetic self-taught software engineer with a degree in psychology. I understand the importance of research-based practice and algorithms, which are two of my most favorite topics to study upon. 
    </Typography>
      </div>
    )}
   </Transition>
   <Transition timeout={400} {...props} appear>
     
     {(status) => (
       <div style={{
         transform: status === 'entered' ? 'translateX(0)' : 'translateX(-100vw)',
         transition: 'transform 200ms ease'
       }}>
        <Typography className={classes.root} style={{marginTop: -10}} component="h2" style={{
          color: {...props}.inv ? 'white' : 'rgba(0, 0, 0, 0.54)'
        }}>
      I am currently finishing up my last quarter at UCLA studying psychology. I started my college career as a computer science major, transferred as a cogntive science major, and ultimately ended up where I am now.
    </Typography>
       </div>
     )}
    </Transition>
  
    </div>
  );
}
