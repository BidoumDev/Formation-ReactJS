/*
 * MemeSVGViewer
*/
import React from 'react'
import {MemeSVGViewer as UNCONNECTEDMemeSVGViewer} from 'orsys-tjs-meme'
import {useSelector} from 'react-redux'

const MemeSVGViewer = (props) => {

  const images = useSelector((storeState)=> {
    return storeState.ressources.images.find(i=>i.id===storeState.current.imageId);
  });
  const meme = useSelector((storeState)=> {
    return storeState.current;
  });

  return (
    <UNCONNECTEDMemeSVGViewer 
      {...props} 
      image={images} 
      meme={meme}
      //onMemeChange={(meme) => dispatch(changeMeme(meme))} 
    />
  )
}

export default MemeSVGViewer