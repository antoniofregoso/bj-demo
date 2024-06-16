import { bjRouter } from  "@buyerjourney/router";
import { home } from "./app/pages/home";

export const App = new bjRouter();
App.on('/', home);
