import html from './app.html?raw'


/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId) => {

    //creamos Una funcion anónima
    // la const app no tiene nada que ver con el nombre del método App

    (() =>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);

    })();

}