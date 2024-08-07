import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addImages } from "./ressources";
import {images} from '../../db/db.json';
import reducerCurrent from "./current";

//const initialCurent = emptyMeme;

export const store=configureStore({
    reducer: combineReducers({
        ressources: ressourcesReducer,
        current: reducerCurrent
    })
});

store.subscribe(()=>{
    console.log(store.getState());
});

/*store.dispatch(addImage({id:0}));
store.dispatch(addImage({id:1}));
store.dispatch(addImage({id:2}));*/

store.dispatch(addImages(images));