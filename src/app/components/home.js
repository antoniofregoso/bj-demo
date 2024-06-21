import { AppPage, PageHeader, PageFooter } from "@buyerjourney/bj-core";
import { setLanguaje, setTheme } from "../store/slices/homeSlice";
import { store } from "../store/store";

export function home(req, router){

    let template =`
    <page-header id="header"></page-header>
    <page-footer id="footer"></page-footer>
    `

    function handleChange(){
        let previousValue = currentValue
        currentValue = store.getState()
        if (previousValue !== currentValue) {
            renderHome(previousValue, currentValue);
          }
    }

    store.subscribe(handleChange);
}
