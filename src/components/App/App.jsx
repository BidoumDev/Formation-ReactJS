/*

█████╗ ██████╗ ██████╗ 
██╔══██╗██╔══██╗██╔══██╗
███████║██████╔╝██████╔╝
██╔══██║██╔═══╝ ██╔═══╝ 
██║  ██║██║     ██║     
╚═╝  ╚═╝╚═╝     ╚═╝     
*/                 

import React, { useEffect, useState } from 'react'
import FlexHThirdGrow from '../layout/FlexHThirdGrow/FlexHThirdGrow'
import Header from '../ui/Header/Header'
import NavBar from '../ui/NavBar/NavBar'
import Footer from '../ui/Footer/Footer'
import FlexWFirstGrow from '../layout/FlexWFirstGrow/FlexWFirstGrow'
import MemeForm from '../functionnal/MemeForm/MemeForm'
//import MemeSvgViewer from '../ui/MemeSVGViewer/MemeSVGViewer'
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme'

const App = (props) => {
  const [meme, setMeme] = useState(emptyMeme);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5679/images')
    .then(r=>r.json())
    .then((arr) => setImages(arr))
    ;
  }, [])
  return (
    <div className='App'>
        <FlexHThirdGrow>
            <Header></Header>
            <NavBar/>
            <FlexWFirstGrow>
                <MemeSVGViewer image={undefined} meme={emptyMeme} bassPath="" />
                <MemeForm images={images} />
            </FlexWFirstGrow>
            <div>{JSON.stringify(images)}</div>
            <Footer />
        </FlexHThirdGrow>
    </div>
  )
}

export default App