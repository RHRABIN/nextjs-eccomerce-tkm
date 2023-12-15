import MobileSubNavButtonClient from '@/clientSideRender/navbar/MobileSubNavButtonClient';
import Link from 'next/link';

const MobileNav = ({toggle}) => {
    return (
        <nav className={`bg-secondary text-dark px-4 transition-all ease-in-out duration-500 ${toggle ? 'h-screen overflow-visible lg:overflow-hidden lg:invisible lg:h-0 visible  pb-4' : 'h-0 overflow-hidden invisible'}`}>
            <ul>
                <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>New</Link></li>
                <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>Best</Link></li>

                {/* sub menu start */}
                <MobileSubNavButtonClient title={'Routine'}>
                    <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>New</Link></li>
                    <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>Best</Link></li>
                </MobileSubNavButtonClient>
                <MobileSubNavButtonClient title={'Shop By'}>
                    <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>New</Link></li>
                    <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>Best</Link></li>
                </MobileSubNavButtonClient>
                {/* sub menu end  */}
            </ul>
        </nav>
    );
};

export default MobileNav;