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
//import MemeForm from '../functionnal/MemeForm/MemeForm'
import MemeForm from '../functionnal/MemeForm/MemeForm.connected'
import { emptyMeme } from 'orsys-tjs-meme'
import MemeSVGViewer from '../ui/MemeSVGViewer/MemeSVGViewer'

const App = (props) => {
  const [meme, setMeme] = useState({...emptyMeme, text:"React c'est super"});
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
                <MemeSVGViewer 
                  /*image={images.find((item)=>item.id===meme.imageId)} 
                  meme={meme} */
                  basePath="" 
                />
                <MemeForm />
            </FlexWFirstGrow>
            <div>{JSON.stringify(images).substring(1,10)}</div>
            <Footer />
        </FlexHThirdGrow>
    </div>
  )
}

export default App