import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout /> }>
      {/* Encasing pages in this parent layout file allows MainLayout items to be applied to pages you want like navbar */}
      <Route index element={ <HomePage />} />
      <Route path='/weather' element={ <WeatherPage />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={ router }/>
  )
}

export default App