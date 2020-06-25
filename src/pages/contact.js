import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./mystyles.scss"

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            form: ""
        };
    }

    onSelectTopic = (e) => {
        console.log(e.target.value)
        e.preventDefault();
        this.setState({ form: e.target.value })
    }

    renderFormSelection = () => {
        return (
            <section id="contact-form-selection" className="section ">
                <div className="container">
                    <h1 className="title is-1">Let's talk</h1>
                    <h2 className="subtitle is-2">Plese select the topic...</h2>
                    <div class="control">
                        <div class="select">
                            <select>
                                <option onClick={() => this.setState({ form: "" })}>Select topic</option>
                                <option onClick={() => this.setState({ form: "project" })}>Your project</option>
                                <option onClick={() => this.setState({ form: "coffee" })}>Meeting for a coffee</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    renderProjectForm = () => {
        return (
            <section id="contacts" className="section has-background-light">
                <div className="container">
                    <div class="columns">
                        <div class="column is-one-third is-full-mobile">
                            <h2 className="title is-2">Let's craft your product</h2>
                            <br />
                            <h5 class="subtitle is-5" style={{ maxWidth: "350px" }}>Interested in working together? We should schedule a chat. I might also buy you a coffee.</h5>
                        </div>
                        <div class="column">
                            <form name="contact-project" netlify>
                                <div class="field">
                                    <label class="label">Name</label>
                                    <input class="input" type="text" name="name" placeholder="Name" />
                                </div>
                                <div class="field">
                                    <label class="label">Company</label>
                                    <input class="input" type="text" name="company" placeholder="Company" />
                                </div>
                                <div class="field">
                                    <label class="label">Email</label>
                                    <input class="input" type="email" name="email" placeholder="Email" />
                                </div>
                                <div class="field">
                                    <label class="label">Budget</label>
                                    <input class="input" type="email" name="email" placeholder="Budget" />
                                </div>
                                <div class="field">
                                    <label class="label">Message</label>
                                    <textarea class="textarea" type="message" name="message" placeholder="Tell me about your project..."></textarea>
                                </div>
                                <div class="control">
                                    <button type="submit" class="button is-link">Send &nbsp;<i class="fa fa-paper-plane"></i></button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    renderCoffeeForm = () => {
        return (
            <section id="contacts" className="section has-background-light">
                <div className="container">
                    <div class="columns">
                        <div class="column is-one-third is-full-mobile">
                            <h2 className="title is-2">Meeting for a coffee</h2>
                            <br />
                            <h5 class="subtitle is-5" style={{ maxWidth: "350px" }}>Interested in working together? We should schedule a chat. I might also buy you a coffee.</h5>
                        </div>
                        <div class="column">
                            <form name="contact-coffee" netlify>
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
                                    <button type="submit" class="button is-link">Send &nbsp;<i class="fa fa-paper-plane"></i></button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    render() {

        return (
            <>
                <SEO title="Contact" />

                <div className="container">
                    {this.renderFormSelection()}
                    {this.state.form === "coffee" && this.renderCoffeeForm()}
                    {this.state.form === "project" && this.renderProjectForm()}
                </div>

                <br />
                <Link to="/">Go back</Link>
                <br />
            </>
        )
    }
}

export default Contact
