import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Eleves from "./routes/eleves";
import Professeurs from "./routes/professeurs";
import Calendrier from './routes/calendrier';

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
      {
        path: "calendrier",
        element: <Calendrier />,
      }
    ],
    
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
