import { useState, useEffect } from "react"
import axios from "axios"

const useCustomiser = () => {
    const [bgColor, setBgColor] = useState('');
    const [navBgColor, setNavBgColor] = useState('');
    const [footerBgColor, setFooterBgColor] = useState('');
    const [navTextColor, setNavTextColor] = useState('');
    const [headerTextColor, setHeaderTextColor] = useState('');
    const [subheaderTextColor, setSubheaderTextColor] = useState('');
    const [paragraphTextColor, setParagraphTextColor] = useState('');
    const [headerFontFamily, setHeaderFontFamily] = useState('');
    const [subheaderFontFamily, setSubheaderFontFamily] = useState('');
    const [paragraphFontFamily, setParagraphFontFamily] = useState('');
    // Add extra state for extra settings

    const baseUrl = import.meta.env.VITE_WP_BASEURL;
    const endpoint = `${baseUrl}wp-json/custom-theme/v1/customizer-settings`

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            const {
                bodyBackgroundColor, 
                navBackgroundColor, 
                footerBackgroundColor, 
                navTextColor, 
                headerTextColor, 
                subheaderTextColor, 
                paragraphTextColor, 
                headerFontFamily, 
                subheaderFontFamily, 
                paragraphFontFamily, 
            } = res.data // add to the destructure
            setBgColor(bodyBackgroundColor)
            setNavBgColor(navBackgroundColor)
            setFooterBgColor(footerBackgroundColor)
            setNavTextColor(navTextColor)
            setHeaderTextColor(headerTextColor)
            setSubheaderTextColor(subheaderTextColor)
            setParagraphTextColor(paragraphTextColor)
            setHeaderFontFamily(headerFontFamily)
            setSubheaderFontFamily(subheaderFontFamily)
            setParagraphFontFamily(paragraphFontFamily)
            // change the state to the destructure
        })
        .catch((err) => console.error(err))
    }, [baseUrl])

  return {
    bgColor, navBgColor, footerBgColor, 
    navTextColor, headerTextColor, subheaderTextColor, paragraphTextColor, 
    headerFontFamily, subheaderFontFamily, paragraphFontFamily
  } // add to the return object
}

export default useCustomiser
