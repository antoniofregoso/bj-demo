import { AppPage, PageHeader, PageFooter } from "@buyerjourney/bj-core";
import { setLanguaje, setTheme } from "../store/slices/homeSlice";
import { store } from "../store/store";
import { homeUpdater } from "./updaters/homeUpdater";
import data from "../data/home.json";

export function home(req, router){

    let template =`
    <page-header id="header"></page-header>
    <page-footer id="footer"></page-footer>
    `

    let currentValue = store.getState();
    data.context = currentValue.context;
    page =  new AppPage(data, template);

    const pageEvents = {
        handleEvent: (e) => {
            if (e.type==="user:select-lang"){
                console.log('Hayyyyy')
                store.dispatch(setLanguaje(e.detail));
            }

        }
    };

    
    page.eventsToListen(["user:select-lang"], pageEvents);
    function handleChange(){
        let previousValue = currentValue;
        currentValue = store.getState();
        if (previousValue !== currentValue) {
            homeUpdater(previousValue, currentValue);
          }
    }



    page.eventsToListen(["user:select-lang"], pageEvents)

    store.subscribe(handleChange);
}
