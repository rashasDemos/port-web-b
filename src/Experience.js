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

export default function Experience(props) {
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
        <Typography className={classes.root} color="textSecondary">
     
     Experience{" "}
     <ul>
       <li>
         <Typography className={classes.lightBulb} color="textPrimary">
           Freelance React Developer{" "}
           <Link href="https://nextjs.org/">
             Using Next.JS
           </Link>{" "}
           started in 2017 - present
         </Typography>
       </li>
       <li>
         <Typography className={classes.lightBulb} color="textPrimary">
           Verizon Sales Associate{" "}
           <Link href="https://www.victra.com/">
             Victra
           </Link>{" "}
           started in 2017 - end in 2018
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
