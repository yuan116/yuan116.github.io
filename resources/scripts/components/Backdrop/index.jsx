import useBindRef from '@/hooks/useBindRef';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { forwardRef, useLayoutEffect } from 'react';

/**
 * @typedef {import('react')} React
 *
 * @typedef BackdropPropsT
 * @property {boolean} [backdropBlur=false]
 * @property {string} [backdropBlurClass='app-backdrop-blur']
 * @property {string} [backgroundOpacityClass='app-backdrop-opacity']
 * @property {boolean} [show=false]
 */

const Backdrop = forwardRef(
    /**
     * @param {React.HTMLAttributes<HTMLDivElement> & BackdropPropsT} props
     * @param {React.RefObject<HTMLDivElement>} ref
     * @returns {React.ReactNode}
     */
    ({ backdropBlur, backdropBlurClass, backgroundOpacityClass, className, show = false, ...props }, ref) => {
        /** @type {React.RefObject<HTMLDivElement>} */
        const componentRef = useBindRef(ref);

        if (typeof backgroundOpacityClass !== 'string') {
            backgroundOpacityClass = 'app-backdrop-opacity';
        }

        if (typeof backdropBlurClass !== 'string') {
            backdropBlurClass = 'app-backdrop-blur';
        }

        useLayoutEffect(() => {
            const classList = [backgroundOpacityClass];

            if (backdropBlur) {
                classList.push(backdropBlurClass);
            }

            if (show) {
                componentRef.current.classList.add(...classList);
            }

            return () => {
                componentRef.current.classList.remove(...classList);
            };
        }, [show]);

        return <div className={clsx('app-backdrop', className)} ref={componentRef} {...props} />;
    },
);

if (import.meta.env.DEV) {
    Backdrop.displayName = 'Backdrop';

    Backdrop.propTypes = {
        backdropBlur: PropTypes.bool,
        backdropBlurClass: PropTypes.string,
        backgroundOpacityClass: PropTypes.string,
        show: PropTypes.bool,
    };
}

export default Backdrop;
