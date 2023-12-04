import { useLayoutEffect } from 'react';

export default function useTitle(title) {
    const previousTitle = document.title;

    useLayoutEffect(() => {
        document.title = title + ' | ' + import.meta.env.VITE_APP_NAME;

        return () => {
            document.title = previousTitle;
        };
    }, []);
}
