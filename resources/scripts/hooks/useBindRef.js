import { useImperativeHandle, useRef } from 'react';

/** @typedef {import('react')} React */

/**
 * @template {T}
 * @param {React.ForwardedRef<T>} ref
 * @param {any} [value=null]
 * @returns {React.Ref<T>}
 */
export default function useBindRef(ref, value = null) {
    const bindRef = useRef(value);

    useImperativeHandle(ref, () => bindRef.current, []);

    return bindRef;
}
