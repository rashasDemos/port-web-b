import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import { Transition } from "react-transition-group";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
}));

export default function Education(props) {
  const classes = useStyles();
  return (
    <>
    <Transition timeout={1000} {...props} appear>
     
     {(status) => (
       <div style={{
         transform: status === 'entered' ? 'translateY(0)' : 'translateY(10vw)',
         opacity: status === 'entered' ? 1 : 0,
         transition: 'transform 500ms ease, opacity 500ms ease'
       }}>
        <Typography className={classes.root}  style={{
          color: {...props}.inv ? 'white' : 'rgba(0, 0, 0, 0.54)',
          transition: 'all 300ms ease-in-out'
        }}>
     
     Education{" "}
     <ul>
       <li>
         <Typography className={classes.lightBulb} style={{
          color: {...props}.inv ? 'white' : 'rgba(0, 0, 0, 0.54)',
          transition: 'all 300ms ease-in-out'
        }}>
           UCLA{" "}
           <Link href="https://www.psych.ucla.edu/">
            Psychology BA (Computer Science/Cognitive Science)
           </Link><br />
           <span style={{opacity: 0.6}}>2018-2020</span> 
         </Typography>
       </li>
       <li>
         <Typography className={classes.lightBulb} style={{
          color: {...props}.inv ? 'white' : 'rgba(0, 0, 0, 0.54)'
        }}>
           Long Beach City College{" "}
           <Link href="https://www.lbcc.edu/program-computer-science">
             Computer Science Transfer
           </Link><br />
           <span style={{opacity: 0.6}}> 2016 - 2018 </span>
         </Typography>
       </li>
     </ul>
   </Typography>
       </div>
     )}
    </Transition> 
   </>
   
  );
}
