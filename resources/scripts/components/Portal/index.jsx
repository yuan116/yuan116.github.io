import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

/**
 * @typedef {import('react')} React
 *
 * @typedef PortalPropsT
 * @property {HTMLElement} [container=document.body]
 */

/**
 * @param {React.PropsWithChildren & PortalPropsT} props
 * @returns {React.ReactPortal}
 */
function Portal({ children, container = document.body }) {
    if (!(container instanceof HTMLElement)) {
        throw new Error('"Portal" "container" props must be an instance of "HTML ELEMENT"');
    }

    return createPortal(children, container);
}

if (import.meta.env.DEV) {
    Portal.displayName = 'Portal';

    Portal.propTypes = {
        container: PropTypes.instanceOf(HTMLElement),
    };
}

export default Portal;
