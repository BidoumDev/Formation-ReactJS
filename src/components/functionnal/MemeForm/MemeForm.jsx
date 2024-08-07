import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
import Button from "../../ui/Button/Button";
 
const initialState = {};
const MemeForm  = (props) => {
  //const [state, setstate] = useState(initialState);
  //const [text, setText] = useState(props.meme.text);
  const [meme, setMeme] = useState(props.meme);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  const updateString = (evt) => {
    const newM = {...props.meme };
    newM[evt.target.name] = evt.target.value;
    props.onMemeChange(newM);    
  }
  const updateNumber = (evt) => {
    const newM = {...props.meme };
    newM[evt.target.name] = parseInt(evt.target.value, 10);
    props.onMemeChange(newM);
  }
  const updateChecked = (evt) => {
    const newM = {...props.meme };
    newM[evt.target.name] = evt.target.checked;
    props.onMemeChange(newM);
  }
  /*const updateImage = (evt) => {
    const newM = {...props.meme };
    newM[evt.target.imageId] = parseInt(evt.target.value, 10);
    props.onMemeChange(newM);
  }*/
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form onSubmit={evt=>{
        evt.preventDefault();
        props.onMemeChange(meme);
      }}>
        <label htmlFor="titre"><h1>Titre</h1></label>
        <br />
        <input name="titre" id="titre" 
          value={props.meme.titre}
          onChange={updateString}
        />
        <hr />
        <label htmlFor="image"><h2>Image</h2></label>
        <br />
        <select 
          name="image" 
          id="image" 
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              imageId: Number(evt.target.value),
            });
          }}
          value={props.meme.imageId}
        >
          {/*<option value="-1">No image</option>*/}
          {
            props.images.map((item, index)=>{
              return (<option key={index+'img'} value={item.id}>{item.name}</option>)
            })
          }
        </select>
        <hr />
        <label htmlFor="text"><h2>texte</h2></label>
        <br />
        <input name="text" id="text" type="text" 
          value={props.meme.text} 
          onChange={
          (evt) => {
            //setMeme({...meme, text:evt.target.value});
            props.onMemeChange({...props.meme, text:evt.target.value});
          }
        }/>
        <br />
        <label htmlFor="x"><h2 style={{display:'inline'}}>x :</h2>
        </label>
        <input className={styles.smallNumber} name="x" id="x" type="number" 
          onChange={updateNumber}
        />
        <label htmlFor="y"><h2 style={{display:'inline'}}>y :</h2></label>
        <input className={styles.smallNumber} name="y" id="y" type="number" 
          onChange={updateNumber}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color"><h2 style={{display:'inline'}}>color :</h2></label>
        <input name="color" id="color" type="color"  
          onChange={updateString}
        />
        <br />
        <label htmlFor="fontSize"><h2 style={{display:'inline'}}>font-size :</h2></label>
        <input className={styles.smallNumber} name="fontSize" id="fontSize" type="number" min="0"   
          onChange={updateString}
        />px
        <br />
        <label htmlFor="fontWeight"><h2 style={{display:'inline'}}>font-weight :</h2></label>
        <input className={styles.smallNumber} name="fontWeight" id="fontWeight" type="number" min="100" step="100" max="900"   
          onChange={updateString}
        />
        <br />
        <input name="underline" id="underline" type="checkbox" 
          onChange={updateChecked}
        />&nbsp;<label htmlFor="underline"><h2 style={{display:'inline'}}>underline</h2></label>&nbsp;<h2 style={{display:'inline'}}>/</h2>&nbsp;
        <label for="italic"><h2 style={{display:'inline'}}>italic</h2></label>&nbsp;
        <input name="italic" id="italic" type="checkbox" 
          onChange={updateChecked}/>
        <hr />
        <br />
        <Button type="submit" bgColor="skyblue">Valider</Button>
      </form>
    </div>
  );
};
MemeForm.propTypes = {
  images: PropTypes.array.isRequired,
  meme: PropTypes.object.isRequired,
  onMemeChange: PropTypes.func.isRequired
};
export default MemeForm;