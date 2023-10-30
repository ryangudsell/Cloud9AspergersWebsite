import './css/App.css'
import { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'

import useCustomizer from './hooks/useCustomizer'

import Links from './Links'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const {
    bgColor, 
    navBgColor, 
    footerBgColor, 
    navTextColor, 
    headerTextColor, 
    subheaderTextColor, 
    paragraphTextColor, 
    headerFontFamily, 
    subheaderFontFamily, 
    paragraphFontFamily
  } = useCustomizer()

  useEffect(() => {
    document.body.style.backgroundColor = `#${bgColor}`
    document.querySelectorAll('header').forEach(element => {element.style.backgroundColor = `${navBgColor}`})
    document.querySelectorAll('footer').forEach(element => {element.style.backgroundColor = `${footerBgColor}`})
    document.querySelectorAll('nav').forEach(element => {element.style.color = `${navTextColor}`})
    document.querySelectorAll('nav').forEach(nav => {nav.querySelectorAll('a').forEach(element => {element.style.color = `${navTextColor}`})})
    document.querySelectorAll('h1').forEach(element => {element.style.color = `${headerTextColor}`})
    document.querySelectorAll('h2').forEach(element => {element.style.color = `${headerTextColor}`})
    document.querySelectorAll('h3').forEach(element => {element.style.color = `${subheaderTextColor}`})
    document.body.style.color = `${paragraphTextColor}`
    if (headerFontFamily === "Verdana" || headerFontFamily === "Arial" || headerFontFamily === "Open Sans") {
      document.querySelectorAll('h1').forEach(element => {element.style.fontFamily = `'${headerFontFamily}', sans-serif`})
      document.querySelectorAll('h2').forEach(element => {element.style.fontFamily = `'${headerFontFamily}', sans-serif`})
    }
    if (subheaderFontFamily === "Verdana" || subheaderFontFamily === "Arial" || subheaderFontFamily === "Open Sans") {
      document.querySelectorAll('h3').forEach(element => {element.style.fontFamily = `'${subheaderFontFamily}', sans-serif`})
    }
    if (paragraphFontFamily === "Verdana" || paragraphFontFamily === "Arial" || paragraphFontFamily === "Open Sans") {
      document.body.style.fontFamily = `'${paragraphFontFamily}', sans-serif`
    }
  }, [
    bgColor, navBgColor, footerBgColor, 
    navTextColor, headerTextColor, subheaderTextColor, paragraphTextColor, 
    headerFontFamily, subheaderFontFamily, paragraphFontFamily
  ])

  return (
    <HashRouter>
      <Header />
      <Links />
      <Footer />
    </HashRouter>
  )
}

export default App
