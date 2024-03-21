import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Typewriter from "typewriter-effect";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Front-end Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const [index, setIndex] = useState(1);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Vedant`}</h1>
                  {/* <h1><span className="txt-rotate display:block" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Front-end Developer" ]'><span className="nowrap">{text}</span></span></h1> */}
                  <h1>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Web Developer")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Web Designer")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Frontend developer")
                          .start();
                      }}
                    />
                  </h1>
                  <p>
                    Hey there! I'm Vedant, a passionate front-end web developer
                    with a knack for crafting engaging and interactive user
                    experiences. With a solid foundation in HTML, CSS, and
                    JavaScript, coupled with expertise in popular frameworks and
                    libraries like Bootstrap, Tailwind CSS, and React.js, I
                    bring websites to life with seamless functionality and
                    stunning design.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header image"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
