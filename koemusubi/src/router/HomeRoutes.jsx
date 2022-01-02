import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { Question } from "../components/pages/Question";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/about",
    exact: false,
    children: <About />,
  },
  {
    path: "/question",
    exact: false,
    children: <Question />,
  },
  {
    path: "/contact",
    exact: false,
    children: <Contact />,
  },
];
