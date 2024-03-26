import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Root from "../components/Root/Root"
import Inicio from "../pages/Inicio/inicio"
import Sobre from "../pages/Sobre/Sobre"
import Projects from "../pages/Projetos/Projects"
import Contact from "../pages/Contato/Contact"
import NotFound from "../pages/NotFound/NotFound"


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                path: '/',
                element: <Inicio />
            },
            {
                path: '/sobre',
                element: <Sobre />
            },
            {
                path: '/projetos',
                element: <Projects />
            },
            {
                path: '/contato',
                element: <Contact />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    },
]);

export default Router