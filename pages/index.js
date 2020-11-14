import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Capt from "../src/Caption";
import Experience from "../src/Experience";
import { useRouter } from "next/router";
import Project from "../src/Projects";
import { Transition } from "react-transition-group";
import Contact from "../src/Contact";

export default function Index() {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState(false);

  var i = 0;
  var txt = `Yo, I'm Rasha Rahman.`; /* The text */
  var speed = 100; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      setTitle(txt.substr(0, i + 1));
      i++;
      setTimeout(typeWriter, speed);
      i > txt.length - (txt.length / 2) && setCaption(true);
    }
  }
  const [resumHov, setResumHov] = useState();
  const router = useRouter();
  useEffect(() => {
    typeWriter();
  }, []);
  return (
    <Container maxWidth="sm">
      <Box my={4}>
       
     
        {<Transition timeout={0} in={true} appear>
     
     {(status) => (
       <div style={{
         transform: status === 'entered' ? 'translateY(0)' : 'translateY(10vw)',
         opacity: status === 'entered' ? 1 : 0,
         transition: 'transform 200ms ease, opacity 200ms ease',
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',

       
       }}>
      
           <Typography variant="h6" component="h1" style={{
          marginBottom: -30,
        }} gutterBottom>
          {title}
        </Typography>
        <img src={`https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/123184309_644051536278684_8887277192931406801_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=gh5MD2J79YEAX9rxBtX&_nc_tp=24&oh=5740837feccc95dee9b1c1f3ee64722f&oe=5FDA095E`} alt="picture of me" width="20%" style={{
          display: 'block'
          }}/>
       </div>
       
     )}
    </Transition> 
        }
    {caption &&  <Capt in={caption} />}

        {caption && <Transition timeout={600} in={caption} appear>
     
     {(status) => (
       <div style={{
         transform: status === 'entered' ? 'translateY(0)' : 'translateY(10vw)',
         opacity: status === 'entered' ? 1 : 0,
         transition: 'transform 200ms ease, opacity 200ms ease'
       }}>
         <Typography
            onMouseEnter={() => setResumHov(true)}
            onMouseLeave={() => setResumHov(false)}
            onClick={() => window.location.assign('https://github.com/rasha-rahman123/resume/blob/main/Untitled.pdf')}
            style={{
              cursor: "pointer",
              marginLeft: "0px",
              marginBottom: -20,
              color: resumHov ? 'darkgoldenrod' : 'initial',
              trasnform: resumHov ? 'scale(1.0)' : 'scale(0.9)',
              transition: 'all 300ms ease-in-out'
            }}
            component="h3"
            variant="h6"
            color="secondary"
          >
            full resume link here
          </Typography>
       </div>
     )}
    </Transition> 
        }
        {caption && <Experience in={caption} />}
        {caption && <Project in={caption} />}
        {caption && <Contact in={caption} />}
       
      </Box>
    </Container>
  );
}
