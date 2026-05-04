import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/skills",
                element: <Skills/>
            },
        ]
    }
]);

export default router;