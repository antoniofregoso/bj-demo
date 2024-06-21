import config from './.env/conf.json';
import { store, persistor } from './app/store/store';
import { loading } from "@buyerjourney/bj-core";
import { whithAnimations} from "@buyerjourney/bj-core";
import 'animate.css';
import '@buyerjourney/bj-core/src/bj.css';

import {App} from "./App";

loading({color:"is-dark", direction:"is-right-to-left"});

persistor.subscribe(()=>{
    const rehydratedState = store.getState();
    
    App.init();
    whithAnimations();
})