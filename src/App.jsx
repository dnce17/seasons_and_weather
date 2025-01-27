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
import ProducePage from './pages/ProducePage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={
      <>
        <ScrollToTop />
        <MainLayout />
      </>
    }>
      {/* Encasing pages in this parent layout file allows MainLayout items to be applied to pages you want like navbar */}
      <Route index element={<HomePage />} />
      <Route path='/weather' element={<WeatherPage />} />
      <Route path='/seasonal-produce' element={<ProducePage />} />

      {/* Asterisk sign is a "catch all"; so same error page pops whenever there's error */}
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App