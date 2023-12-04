import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

/**
 * @typedef {import('react')} React
 *
 * @typedef LoaderPropsT
 * @property {'spinner' | 'ping'} type
 */

const Loader = forwardRef(
    /**
     * @param {React.HTMLAttributes & React.PropsWithChildren & LoaderPropsT} props
     * @param {React.RefObject<HTMLDivElement} ref
     * @returns {React.ReactNode}
     */
    ({ className, type = 'spinner', ...props }, ref) => {
        if (type === 'spinner') {
            return <FontAwesomeIcon className={clsx('app-loader app-loader-spinner', className)} icon={faSpinner} ref={ref} />;
        }

        return <span className={clsx('app-loader app-loader-ping', className)} ref={ref}></span>;
    },
);

if (import.meta.env.DEV) {
    Loader.displayName = 'Loader';

    Loader.propTypes = {
        type: PropTypes.oneOf(['spinner', 'ping']),
    };
}

export default Loader;
