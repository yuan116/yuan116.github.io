import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layouts/Layout';

const Main = lazy(() => import('./pages/Main'));
const NotFound = lazy(() => import('./pages/errors/NotFound'));

export default function AppRouter(props) {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
