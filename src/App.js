import logo from './logo.svg';
import './App.css';
import { ListeEleves } from './eleves/ListeEleves';
import { classe1, classe2 } from './eleves/Eleves';
import { RouterProvider, Link, createBrowserRouter } from 'react-router-dom';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Eleves from "./routes/eleves";
import Professeurs from "./routes/professeurs";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>
//       Page d'accueil<br/><br/>
//       <nav>
//         <Link to="/">Accueil</Link><br/>
//         <Link to="/eleves">Liste élèves</Link><br/>
//         <Link to="/professeurs">Liste professeurs</Link><br/>
//       </nav>
//     </div>,
//   },
//   {
//     path: "/eleves",
//     element: <div>
//       Liste élèves<br/><br/>
//       <nav>
//         <Link to="/">Accueil</Link><br/>
//         <Link to="/eleves">Liste élèves</Link><br/>
//         <Link to="/professeurs">Liste professeurs</Link><br/>
//       </nav>
//     </div>,
//   },
//   {
//     path: "/professeurs",
//     element: <div>
//       Liste professeurs<br/><br/>
//       <nav>
//         <Link to="/">Accueil</Link><br/>
//         <Link to="/eleves">Liste élèves</Link><br/>
//         <Link to="/professeurs">Liste professeurs</Link><br/>
//       </nav>
//     </div>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "eleves",
        element: <Eleves />,
      },
      {
        path: "professeurs",
        element: <Professeurs />,
      },
    ],
    
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      {/* <h1>Classe 1 : </h1>
      <ListeEleves liste={classe1}/>
      <h1>Classe 2 : </h1>
      <ListeEleves liste={classe2}/> */}
    </div>
  );
}

export default App;
