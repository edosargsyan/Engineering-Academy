import { createBrowserRouter } from "react-router-dom";
import {About} from "../src/app/components/About";
import {ContactForm} from "../src/app/components/ContactForm";
import App from "./App";
import { EngineeringDisciplines } from "./app/components/EngineeringDisciplines";
import { CoursesPage } from "./app/components/CoursesPage";
;

export const router = createBrowserRouter([
{path: "/", element: <App/> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <ContactForm /> },
  {path: "/programs", element: <EngineeringDisciplines/>},
  {path:"/courses/:id",element:<CoursesPage/>}
])

