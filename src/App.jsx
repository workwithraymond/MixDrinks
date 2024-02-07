import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {About, HomeLayout, Landing, Error, Newsletter, Cocktail} from './pages';

import { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path:'cocktail',
        element: <Cocktail/>,
      },
      {
        path:'newsletter',
        element: <Newsletter/>,
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