import React from "react"

import Layout from "../components/layout"

const languages = ["HTML", "CSS", "Sass/SCSS", "JavaScript", "React","React Native", "Node", "PHP", "Python"]
const tools = ["GIT", "NPM", "Webpack", "Firebase", "Netlify", "Highcharts"]
const methodologies = ["Agile"]

const SecondPage = () => (
  <Layout>
    <section id="cv-top" className="section">
      <h1 className="title is-1">João Oliveira</h1>
      <h2 className="subtitle is-2">Front-end Developer</h2>
    </section>
    <hr className="hr" />
    <section id="cv-skills" className="section">
      <div class="columns">
        <div class="column is-one-third">
          <h2 className="title is-2">Skills</h2>
        </div>
        <div class="column">
          <h5 class="title is-5" style={{ minWidth: "225px" }}>Languages</h5>
          {languages.map((language) => <p>{language}</p>)}
        </div>
        <div class="column">
          <h5 class="title is-5">Tools</h5>
          {tools.map((tool) => <p>{tool}</p>)}
        </div>
        <div class="column">
          <h5 class="title is-5">Methodologies</h5>
          {methodologies.map((language) => <p>{language}</p>)}
        </div>
      </div>
    </section>
    <hr className="hr" />
    <section id="cv-experience" className="section">
      <div class="columns">
        <div class="column is-one-third">
          <h2 className="title is-2">Experience</h2>
        </div>
        <div class="column">
          <h5 class="title is-5">Preqin Solutions | Front-end Lead | 2018 - Present</h5>
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
          <br/>
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
    </section>
  </Layout>
)

export default SecondPage
