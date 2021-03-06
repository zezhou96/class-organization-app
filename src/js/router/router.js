import { homePage } from "../pages/home";
import { todoPage } from "../pages/toDoPage";
import { errorPage } from "../pages/pageNotFound";
import deletePage from "../pages/deletePage";
import editPage from "../pages/editPage";
import addPage from "../pages/addPage";

const routes = {
    "/": homePage,
    "/todo": todoPage,
    "/delete": deletePage,
    "/edit": editPage,
    "/add": addPage
}

const Router = function(pathname, params=null){    

    const isValidRoute = Object.keys(routes).find(key => key === pathname)

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    if (isValidRoute === undefined) {
        app.appendChild(errorPage())
    }
    else {
        app.appendChild(routes[isValidRoute](params))
    }    
}

export default Router