import React, { useEffect, useRef, useState } from "react";
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
import Education from "../src/Education";

export default function Index({inverted, setInverted}) {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState(false);
  const [imgHov, setImgHov] = useState(false);
  const [mX, setMX] = useState()
  const [mY, setMY] = useState()

  const moon = <img src={!inverted ? 'https://i.imgur.com/1N6A0CV.png' : 'https://i.imgur.com/u3hKmGX.png'} style={{
    opacity: 'inherit',
    transform: 'scale(0.5)',
    cursor: 'pointer'
  }} />

  var i = 0;

  var speed = 200; /* The speed/duration of the effect in milliseconds */

  const [opacity, setOpacity] = useState(false);
  const [maxS, setMaxS] = useState();
  const [currentS, setCurrentS] = useState();
  var txt =
    maxS > 100 ? `Yo! I'm Rasha!` : `Yo, I'm Rasha Rahman.`; /* The text */

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        setMaxS(maxScroll);
        setCurrentS(currentScrollPos);
        // console.log(maxScroll)
        if (currentScrollPos > maxScroll / (maxScroll / 10)) {
          setOpacity(true);
          // console.log(currentScrollPos)
        } else {
          setOpacity(false);
        }
      };
    }
  }, []);

  function typeWriter() {
    if (i < txt.length) {
      setTitle(txt.substr(0, i + 1));
      i++;
      setTimeout(typeWriter, speed);
      i > txt.length - txt.length / 2 && setCaption(true);
    }
  }

  function invertIt() {
    setTimeout(() => setInverted(true), 3000);
  }

  useEffect(() => {
    caption && invertIt()
  },[caption])

  const [resumHov, setResumHov] = useState();
  useEffect(() => {
    window.onmousemove = onMouseMover
  })
  const onMouseMover = (e) => {
    e = e || window.event
    setMX(e.clientX)
    setMY(e.clientY)
  }

  const overlay = () => (
    <div style={{
      position: 'fixed',
      top: mX,
      left: mY,
      width: '200px',
      height: '200px'
    }}>
      {img('100%')}
    </div>
  )

  const img = (num) => (
    <img
      onMouseEnter={() => setImgHov(true)}
      onMouseLeave={() => setImgHov(false)}
      src={`https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/123184309_644051536278684_8887277192931406801_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=gh5MD2J79YEAX9rxBtX&_nc_tp=24&oh=5740837feccc95dee9b1c1f3ee64722f&oe=5FDA095E`}
      alt="picture of me"
      width={num}
      height={num}
      style={{
        display: "block",
        borderRadius: 3,
      }}
    />
  );
  const router = useRouter();
  const moonRef = useRef();
  useEffect(() => {
    typeWriter();
  }, []);
  return (  <>  {caption && <div ref={moonRef} onClick={() => setInverted(!inverted)} onMouseOver={() => moonRef.current.opacity = 1} sx={{position: 'fixed', top: 30, left: 30, opacity: 0.6}}>{moon}
  </div>}
  
    <Container maxWidth="sm" style={{
      color: inverted ? 'white' : 'black'

    }} > 

      <Box my={4}>
        {imgHov && overlay}
        {
          <Transition timeout={0} in={true} appear>
            {(status) => (
              <div
                style={{
                  transform:
                    status === "entered"
                      ? "translateY(0)"
                      : "translateY(-30vw)",
                  opacity: status === "entered" ? 1 : 0,
                  transition:
                    "transform 2s cubic-bezier(0.36, 1.19, 0.85, 0.81), opacity 2s ease",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                     {img("10%")}
                <Typography
                  variant="h5"
                  component="h1"
                  style={{
                    marginBottom: -30,
                    fontWeight: "bolder",
                  }}
                  gutterBottom
                >
                  {title}
                </Typography>
           
              </div>
            )}
          </Transition>
        }
        {caption && <Capt in={caption} inv={inverted} />}

        {caption && (
          <Transition timeout={600} in={caption} appear>
            {(status) => (
              <div
                style={{
                  transform:
                    status === "entered" ? "translateY(0)" : "translateY(10vw)",
                  opacity: status === "entered" ? 1 : 0,
                  transition: "transform 200ms ease, opacity 200ms ease",
                }}
              >
                <Typography
                  onMouseEnter={() => setResumHov(true)}
                  onMouseLeave={() => setResumHov(false)}
                  onClick={() =>
                    window.location.assign(
                      "https://github.com/rasha-rahman123/resume/blob/main/Untitled.pdf"
                    )
                  }
                  style={{
                    cursor: "pointer",
                    marginLeft: "0px",
                    marginBottom: -20,
                    color: resumHov ? "darkgoldenrod" : inverted ? 'white' : "initial",
                    trasnform: resumHov ? "scale(1.0)" : "scale(0.9)",
                    transition: "all 300ms ease-in-out",
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
        )}
        {caption && <Experience inv={inverted} in={caption} />}
        {caption && <Education  inv={inverted} in={caption} />}
        {caption && ( 
          <Project
          appear
            in={true}
            timeout={true ? 1250 : 1250}
            inv={inverted} 
          />
        )}
        {caption && <Contact in={opacity}  inv={inverted}  />}
        
      </Box>
    </Container></>
  );
}
