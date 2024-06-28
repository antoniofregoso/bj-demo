

export function homeUpdater(previousValue, currentValue){
    if (previousValue.context.lang!=currentValue.context.lang){
        let context = {lang:currentValue.context.lang}
        let selector = document.querySelector('#header');
        selector.setAttribute('i18n', context.lang);
        let page = document.querySelector('app-page');
        page.data.context = currentValue.context;
        console.log(page.data)
        page.loadData(page.data);
    }
}