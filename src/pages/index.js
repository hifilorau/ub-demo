import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./demo.css"
import logo from '../images/ub_neon-logo.png'

const IndexPage = () => (
  <Layout>
   <div className="section-wrapper hero-section">
    <div className="logo-wrapper"><img src={logo} /></div>
    <div className="hero-content">Yoga by Jessamyn Stanley</div>
   </div>
  <div className="section-wrapper section-1-wrapper">
    <div className="inner-section-wrapper">
      <div className="content section-1-content">
      practice yoga with Jessamyn anytime, anywhere. go at your own pace. pause, rewind, replay. follow jessamyn’s sequences or curate your own favorites. show up for the first time or as a seasoned practictioner. for 9.99/month we want you to do whatever you want.
      </div>
    </div>
  </div>
  <div className="divider">
  WONDERFULLY PLEASING CONTENT GOES HERE
  </div>
  <div className="section-wrapper section-2-wrapper">
    <div className="inner-section-wrapper">
      <div className="content section-2-content">
       <h3>Move Your Body</h3>
you are enough just as you are. get your mat and show up. there is no judgement here. there is no good enough. you have everything you need within yourself. revel in that.Move Your Body
    
      </div>
    </div>
  </div>
  </Layout>
)

export default IndexPage
