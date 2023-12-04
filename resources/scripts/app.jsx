import { config } from '@fortawesome/fontawesome-svg-core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './AppRouter';

config.autoAddCss = false;
config.autoReplaceSvg = false;
config.observeMutations = false;
config.keepOriginalSource = false;

window.addEventListener('load', (event) => {
    const rootElement = document.createElement('div');
    rootElement.classList.add('flex', 'flex-col', 'h-screen', 'w-screen');
    document.body.append(rootElement);

    createRoot(rootElement).render(import.meta.env.PROD ? <AppRouter /> : <StrictMode children={<AppRouter />} />);
});
