import * as React from "react"
import RadarChart from "../components/radar_chart"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <RadarChart />
    </main>
  )
}

export default IndexPage
