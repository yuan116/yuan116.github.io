import ScreenLoader from '@/custom-components/ScreenLoader';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

export default function Layout(props) {
    return (
        <main>
            <Suspense fallback={<ScreenLoader />}>
                <Outlet />
            </Suspense>
        </main>
    );
}
