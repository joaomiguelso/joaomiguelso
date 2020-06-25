import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.scss"

const languages = ["JavaScript", "HTML", "CSS", "SASS", "Python"]
const frameworks = ["React", "React Native", "Redux", "Gatsby", "Bulma"]
const tools = ["GIT", "NPM", "Webpack + Babel", "Jest + Enzyme", "Firebase", "Netlify", "Highcharts", "Docker"]
const methodologies = ["Agile", "Scrum", "Functional Programming"]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section id="cv-top" className="hero is-fullheight is-dark is-bold shadow-drop-2-center">
      <div class="hero-body">
        <div className="container">
          <div class="columns">
            <div class="column is-two-thirds">
              <h1 className="title is-1">João Oliveira</h1>
              <h2 className="subtitle is-2 has-text-danger">Web Developer</h2>
              <br />
              <p className="is-5">
                Since beginning my journey as a web developer I have been collaborating with various companies, creating interesting digital products.
                <br />I am a confident and naturally curious person and constantly strive to improve my skills.
              </p>
              <br />
              <br />
            </div>
            <div class="column is-one-thirds">
              <figure id="profile-picture" class="image" style={{ maxWidth: "400px" }}>
                <Image alt="Me" filename="profile.jpg" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="container">

      <hr className="hr has-background-danger" />

      <section id="cv-skills" className="section">
        <div className="container">
          <div class="columns is-multiline" style={{ display: "flex" }}>
            <div class="column is-one-third is-full-mobile">
              <h2 className="title is-2">Skills &nbsp;<i class="fa fa-code"></i></h2>
              <br />
              <h5 class="subtitle is-5" style={{ maxWidth: "350px" }}>I like to code from scratch as I enjoy bringing new ideas to life in the browser.</h5>
              <br />
            </div>
            <div class="column is-half-mobile">
              <h5 class="title is-5">Languages</h5>
              {languages.map((language) => <p>{language}</p>)}
            </div>
            <div class="column is-half-mobile">
              <h5 class="title is-5">Frameworks</h5>
              {frameworks.map((framw) => <p>{framw}</p>)}
            </div>
            <div class="column is-half-mobile">
              <h5 class="title is-5">Tools</h5>
              {tools.map((tool) => <p>{tool}</p>)}
            </div>
            <div class="column is-half-mobile">
              <h5 class="title is-5">Methodologies</h5>
              {methodologies.map((language) => <p>{language}</p>)}
            </div>
          </div>
        </div>
      </section>
    </div>

    <div className="container">

      <hr className="hr" />

      <section id="cv-experience" className="section">
        <div className="container">
          <div class="columns">
            <div class="column is-one-third is-full-mobile">
              <h2 className="title is-2">Experience </h2>
              <br />
              <h5 class="subtitle is-5" style={{ maxWidth: "350px" }}>I am honoured to have worked with some outstanding companies:</h5>
            </div>
            <div class="column">
              <h5 class="title is-5"><a href="https://marzeelabs.org/" className="has-text-danger-dark">Marzee Labs</a> | Front-end | 2020 - Current</h5>
              <div class="content">
                <p>Working in building a web application for a Nanotechnology Laboratory using a JAMstack architecture.</p>
                <ul>
                  <li>Applied the best practices of responsive web design</li>
                  <li>Deployed the website using Netlify</li>
                  <li>Worked with a remote team</li>
                </ul>
              </div>
              <br />
              <h5 class="title is-5"><a href="https://whenwewonder.com/" className="has-text-link-dark">WhenWeWonder</a> | Front-end | 2020 </h5>
              <div class="content">
                <p>Built the Front End of the website of a Creative Agency based on given designs. </p>
                <ul>
                  <li>Applied the best practices of responsive web design</li>
                  <li>Deployed the website using Netlify</li>
                  <li>Worked with a remote team</li>
                </ul>
              </div>
              <br />

              <h5 class="title is-5"><a href="https://www.preqin.com/" className="has-text-primary-dark">Preqin Solutions</a> | Front-end Lead | 2018 - 2020</h5>
              <div class="content">
                <p>I advanced to a front-end lead role at Preqin Solutions.</p>
                <ul>
                  <li>Front-end, JavaScript and React.js development to create complex large-scale responsive FinTech app;</li>
                  <li>Worked with different remote Agile teams;</li>
                  <li>Manage and mentor junior developers;</li>
                  <li>Research, establish, document, and own front-end coding best practices, documentation and design system;</li>
                  <li>Research and development with emerging technologies and frameworks;</li>
                </ul>
              </div>
              <br />
              <h5 class="title is-5"><a href="https://www.shastarvidiya.org/" className="has-text-warning-dark">Shastar Vidiya</a> | Mobile Developer | 2017 - 2018</h5>
              <div class="content">
                <p>My role in Shastar Vidiya enabled me to gain experience in mobile development and grow as a developer in general. </p>
                <ul>
                  <li>Worked on React Native, JavaScript, and Firebase development to create mobile app for both iOS and Android;</li>
                  <li>Worked with a remote Agile team</li>
                  <li>Researched, established, documented, and owned front-end coding best practices, documentation and design system.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div className="container">

      <hr className="hr" />

      <section id="testimonials" className="section">
        <div className="container">
          <div class="columns">

            <div class="column is-one-third is-full-mobile">
              <h2 className="title is-2">Testimonials</h2>
              <br />
              <h5 class="subtitle is-5" style={{ maxWidth: "350px" }}>Nice things people have said about me...</h5>
            </div>
            <div class="column">
              <h5 class="title is-5">Carlos Diaz | Preqin Solutions |  Head of Software Engineering at Cox Automotive UK </h5>
              <div class="content">
                <p>I had the opportunity to work with João in several projects at Preqin Solutions,
                where he took on board the leadership of all the Front End project.
                João was fundamental for the successful delivery of the project.</p>
                <p>He is an extremely talented engineer, logical thinker, and someone who can be trusted to own software development challenges from a vague problem all the way to production.
                He works amazingly well in an Agile environment.
                João brought a very fresh approach to the development team with his React JS knowledge.</p>
                <p>I would look forward to a chance to work with João again in the  near future </p>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div className="container has-background-light shadow-drop-2-center" style={{ width: "100%", maxWidth: "100%" }}>

      <hr className="hr has-background-link" />

      <section id="contacts" className="section ">
        <div className="container">
          <div class="columns is-centered">
            <div class="column is-one-third is-full-mobile has-text-centered">
              <h1 className="title is-1">LET'S WORK <br/>TOGETHER</h1>
              <br />
              <p>Interested in working together? We should schedule a chat. I might also buy you a coffee.</p>
              <br />
              <Link to={"contact"}><button class="button is-large is-link">Contact Me</button></Link>
            </div>
          </div>
        </div>
      </section>

    <br />
    <br />
    <br />
    </div>

  </Layout >
)

export default IndexPage
