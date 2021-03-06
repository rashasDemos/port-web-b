import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import { Transition } from "react-transition-group";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 0, 3),
  },
  lightBulb: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const projects = [
    { title: "Message me here for fastest response", link: "https://twitter.com/raaahhh_sha", linkTitle: " twitter ", cat: "" },
    { title: "I Keep Up To Date On My Music Life Here", link: "https://instagram.com/_rashaaa", linkTitle: " instagram ", cat: "" },
    { title: "rasha.r.rahman@gmail.com", link: "mailto:rasharahman@gmail.com", linkTitle: " e-mail ", cat: "" },
  ];
  return (
    <>
    <Transition timeout={500} {...props} appear>
     
     {(status) => (
       <div style={{
         transform: status === 'entered' ? 'translateY(0)' : 'translateY(-10vw)',
         opacity: status === 'entered' ? 1 : 0,
         transition: 'transform 500ms ease, opacity 500ms ease'
       }}>
        <Typography className={classes.root}  style={{
          color: {...props}.inv ? 'white' : 'rgba(0, 0, 0, 0.54)',
          transition: 'all 300ms ease-in-out'
        }}>
      Contact{" "}
      <ul style={{
        listStyle: 'none'
      }}>
      {projects.map((x,i) =>   <li key={i}>
          <Typography key={i+'k'} className={classes.lightBulb} color="textPrimary">
          <Link href={x.link}>
            {x.linkTitle}
            </Link>
      
            
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
    <iframe style={{
      transform: status === 'entered' ? 'translateY(0)' : 'translateY(-10vw)',
      opacity: status === 'entered' ? 1 : 0,
      transition: 'transform 500ms ease, opacity 500ms ease'
    }} src="https://www.fiverr.com/anywhere/anywhere_widget/5fbc80c4d1b44600120e87b2" width="190" height="75" frameBorder="0" scrolling="no"></iframe>
       </div>
     )}
    </Transition> 
   </>
  );
}
