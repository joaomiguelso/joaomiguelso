import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./mystyles.scss"

const languages = ["HTML", "CSS", "Sass/SCSS", "JavaScript", "React", "React Native", "Node", "PHP", "Python"]
const tools = ["GIT", "NPM", "Webpack", "Firebase", "Netlify", "Highcharts", "Docker"]
const methodologies = ["Agile", "Scrum"]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section id="cv-top" className="hero is-fullheight is-dark is-bold shadow-drop-2-center">
      <div class="hero-body">
        <div className="container">
          <div class="columns">
            <div class="column is-two-thirds">
              <h1 className="title is-1" style={{ fontSize: "3.25em" }}>João Oliveira</h1>
              <h2 className="subtitle is-2 has-text-danger" style={{ fontSize: "2.125em" }}>Front-end Developer</h2>
              <br />
              <p className="is-5" style={{ maxWidth: "600px", fontSize: "1.2em" }}>
                Since beginning my journey as a web developer nearly 3 years ago, I've done remote work for companies to create/collaborate in digital products.
              </p>
              <br />
              <p className="is-5" style={{ maxWidth: "600px", fontSize: "1.2em" }}>
                I'm quietly confident, naturally curious, and perpetually working on improving my chops one  problem at a time.
              </p>
              <br />
            </div>
            <div class="column is-one-thirds">
              <figure class="image">
                <img class="is-rounded shadow-drop-2-center" src="https://media-exp1.licdn.com/dms/image/C4D03AQECzxwishb5yw/profile-displayphoto-shrink_400_400/0?e=1597881600&v=beta&t=Znx3dAKrrvlj3Cj-bmOqTZGgev7Jnzg-qK9nF0Ckkkk" />
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
              <h2 className="title is-2">Skills</h2>
              <br />
              <h5 class="subtitle is-5" style={{ maxWidth: "350px" }}>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</h5>
            </div>
            <div class="column is-half-mobile">
              <h5 class="title is-5">Languages</h5>
              {languages.map((language) => <p>{language}</p>)}
            </div>
            <div class="column is-half-mobile">
              <h5 class="title is-5">Tools</h5>
              {tools.map((tool) => <p>{tool}</p>)}
            </div>
            <div class="column is-full-mobile">
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
              <h2 className="title is-2">Experience</h2>
              <br />
              <h5 class="subtitle is-5" style={{ maxWidth: "350px" }}>I'm proud to have worked with some awesome companies:</h5>
            </div>
            <div class="column">
              <h5 class="title is-5">Preqin Solutions | Front-end Lead | 2018 - 2020</h5>
              <div class="content">
                <p>I advanced to a front-end lead role at Preqin Solutions.</p>
                <ul>
                  <li>Front-end, JavaScript and React.js development to create complex large-scale responsive FinTech app.</li>
                  <li>Worked with different remote Agile teams</li>
                  <li>Managing and mentoring less experienced developers.</li>
                  <li>Research, establish, document, and own front-end coding best practices, documentation and design system.</li>
                  <li>Research and development with emerging technologies and frameworks.</li>
                </ul>
              </div>
              <br />
              <h5 class="title is-5">Shastar Vidiya | Mobile Developer | 2017 - 2018</h5>
              <div class="content">
                <p>This role in Shastar Vidiya enabled me to gain experience in mobile development and as a developer in general. </p>
                <ul>
                  <li>React Native, JavaScript and Firebase development to create mobile app for both iOS and Android.</li>
                  <li>Worked with a remote Agile team</li>
                  <li>Research, establish, document, and own front-end coding best practices, documentation and design system.</li>
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
              <h5 class="subtitle is-5" style={{ maxWidth: "350px" }}>People I've worked with have said some nice things...</h5>
            </div>
            <div class="column">
              <h5 class="title is-5">Carlos Diaz | Preqin Solutions </h5>
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
          <div class="columns">
            <div class="column is-one-third is-full-mobile">
              <h2 className="title is-2">Start a project</h2>
              <br />
              <h5 class="subtitle is-5" style={{ maxWidth: "350px" }}>Interested in working together? <br />We should queue up a chat. <br />I’ll buy the coffee.</h5>
            </div>
            <div class="column">
              <form name="contact" netlify>
                <div class="field">
                  <label class="label">Name</label>
                  <input class="input" type="text" name="name" placeholder="Type your name..." />
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <input class="input" type="email" name="email" placeholder="Type your email..." />
                </div>
                <div class="field">
                  <label class="label">Message</label>
                  <textarea class="textarea" type="message" name="message" placeholder="Type your message..."></textarea>
                </div>
                <div class="control">
                  <button type="submit" class="button is-link">Send</button>
                </div>

              </form>
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
