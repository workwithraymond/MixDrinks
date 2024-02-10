import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {About, HomeLayout, Landing, Error, Newsletter, Cocktail, SinglePageError} from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import {action as newsletterAction} from './pages/Newsletter'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError/>,
        loader: landingLoader,
      },
      {
        path:'cocktail/:id',
        errorElement: <SinglePageError/>,
        loader:singleCocktailLoader,
        element: <Cocktail/>,
      },
      {
        path:'newsletter',
        element: <Newsletter/>,
        action: newsletterAction,
        errorElement: <SinglePageError />
      },
      {
        path:'about',
        element: <About/>,
        children: [
          {
            index: true,
            element: <h2>our company</h2>,
          },
          {
            path:'person',
            element: <h2>john doe</h2>,
          },
        ]
      },
    ]
  },
  
])


const App = () => {
  return (
    <RouterProvider router={router} />
  )
};
export default App;