import Backdrop from '@/components/Backdrop';
import Loader from '@/components/Loader';
import Portal from '@/components/Portal';

function ScreenLoader() {
    return (
        <Portal>
            <Backdrop className='flex' show>
                <Loader className='m-auto h-16 w-16' />
            </Backdrop>
        </Portal>
    );
}

if (import.meta.env.DEV) {
    ScreenLoader.displayName = 'ScreenLoader';
}

export default ScreenLoader;
