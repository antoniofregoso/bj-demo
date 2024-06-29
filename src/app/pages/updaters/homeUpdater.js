

export function homeUpdater(previousValue, currentValue){
    if (previousValue.context.lang!=currentValue.context.lang){
        let selector = document.querySelector('#header');
        selector.setAttribute('i18n', currentValue.context.lang);
        
    }else {
        if (previousValue.context.theme!=currentValue.context.theme){
            let selector = document.querySelector('#header');
            selector.setAttribute('theme', currentValue.context.theme);
            const htmlElement = document.documentElement;
            htmlElement.setAttribute('data-theme', currentValue.context.theme);
        }
    }
    let page = document.querySelector('app-page');
    page.data.context = currentValue.context;
    page.loadData();
}