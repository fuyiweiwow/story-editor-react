// 修改 /src/pages/About/About.js
import React from 'react'
import { connect } from 'react-redux'

const About = (props) => (
  <div>
    <h1>About Page</h1>
    <p>这是About页面</p>
    <p>count计数：{props.count}</p>
  </div>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count
})

export default connect(
  mapStateToProps
)(About)