import { bjRouter } from  "@buyerjourney/router";
import { home, notFound } from "./app/pages/home";

export const App = new bjRouter();
App.on('/', home);
App.onNotFound(notFound);
