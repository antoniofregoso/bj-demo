import { AppPage, PageHeader, PageFooter } from "@buyerjourney/bj-core";
import { setLanguaje, setTheme } from "../store/slices/homeSlice";
import { store } from "../store/store";
import { homeUpdater } from "./updaters/homeUpdater";
import data from "../data/home.json";

export function home(req, router){

    let currentValue = store.getState();

    console.log(currentValue)

    let template =`
    <page-header id="header"></page-header>
    <page-footer id="footer"></page-footer>
    `

    data.context = currentValue.context;
    page =  new AppPage(data, template);
    

    const pageEvents = {
        handleEvent: (e) => {
            if (e.type==="user:select-lang"){
                store.dispatch(setLanguaje(e.detail));
            }
            if (e.type==="user:select-theme"){
                store.dispatch(setTheme(e.detail));
            }

        }
    };

    function handleChange(){
        let previousValue = currentValue;
        currentValue = store.getState();
        if (previousValue !== currentValue) {
            homeUpdater(previousValue, currentValue);
          }
    }
    
    page.eventsToListen(["user:select-lang", "user:select-theme"], pageEvents)

    store.subscribe(handleChange);
}
