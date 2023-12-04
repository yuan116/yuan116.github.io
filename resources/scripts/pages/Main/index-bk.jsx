import { faInstagram, faLinkedin, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Main(props) {
    return (
        <div className='container mx-4 my-4 md:mx-auto md:my-16'>
            <div className='flex flex-col rounded-2xl bg-white/100'>
                <div className='mx-8 my-4'>
                    <svg viewBox='0 0 110 14' xmlns='http://www.w3.org/2000/svg'>
                        <text className='text-sm font-semibold' dominantBaseline='central' textLength='100%' y='50%'>
                            LIONEL DICKSON
                        </text>
                    </svg>
                    <div className='mt-4 flex flex-row justify-between md:mt-8'>
                        <div className='flex flex-col gap-2'>
                            <Link href='#'>
                                <b>The Portfolio</b>
                            </Link>
                            <Link href='#'>
                                <b>The Sketchbook</b>
                            </Link>
                            <Link href='#'>
                                <b>The Designer</b>
                            </Link>
                        </div>
                        <div className='flex flex-col gap-2 text-right'>
                            <a className='hover:underline' href='https://instagram.com/tecksang073'>
                                <b>Instagram</b>
                                <FontAwesomeIcon fixedWidth icon={faInstagram} />
                            </a>
                            <a className='hover:underline' href='https://linkedin.com/in/tecksang073'>
                                <b>LinkedIn</b>
                                <FontAwesomeIcon fixedWidth icon={faLinkedin} />
                            </a>
                            <a className='hover:underline' href='https://twitter.com/tecksang073'>
                                <b>Twitter</b>
                                <FontAwesomeIcon fixedWidth icon={faTwitter} />
                                <FontAwesomeIcon fixedWidth icon={faXTwitter} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
