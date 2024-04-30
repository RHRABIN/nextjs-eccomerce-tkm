'use client'
import MobileSubNavButtonClient from '@/clientSideRender/navbar/MobileSubNavButtonClient';
import Link from 'next/link';
import { getCategories, getAllBrands } from '@/config/categoriesApi'
import { useEffect, useState } from 'react';

const MobileNav = ({ user, toggle, setToggle, handleLogout, loginSuccess }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let isIgnore = false;

        const fetchBrandsAndCategories = async () => {
            const [categoriesResponse] = await Promise.all([
                getCategories(),
            ]);
            const { data: getCategory } = categoriesResponse || {};

            setCategories(getCategory?.result);
        }

        if(!isIgnore){
            fetchBrandsAndCategories();
        }

        // cleanup
        return ()=>{
            isIgnore = true;
        }
    }, []);

    return (
        <nav className={`bg-secondary text-dark px-4 transition-all ease-in-out duration-700 ${toggle ? 'max-h-screen overflow-visible lg:overflow-hidden lg:invisible lg:h-0 visible  pb-4' : 'max-h-0 overflow-hidden invisible'}`}>
            <ul className='pt-2'>
                {categories?.length > 0 &&
                    categories?.map(category => category?.children?.length > 0 ?
                        category?.title?.toLowerCase() === 'brands' ?
                            <MobileSubNavButtonClient
                                key={category?._id}
                                title={category?.title}
                            >

                                <li onClick={() => setToggle(false)} className='text-[#7aa93c] border-b border-b-dark border-opacity-10 py-2'><Link href='/brands' className='w-full block'>All Brands (A-Z)</Link></li>
                            </MobileSubNavButtonClient> :
                            <MobileSubNavButtonClient
                                key={category?._id}
                                title={category?.title}
                            >
                                {
                                    category?.children?.map(subCat => subCat?.children?.length > 0 ?
                                        <MobileSubNavButtonClient
                                            key={subCat?._id}
                                            title={subCat?.title}
                                        >
                                            {
                                                subCat?.children?.map(subCatChild =>
                                                    <li onClick={() => setToggle(false)} key={subCatChild?._id} className={`border-b border-b-dark border-opacity-10 py-2 ${toggle && 'text-slate-100'}`}><Link href={`/products?subcat=${subCatChild?.slug}`} className='w-full block'>{subCatChild?.title}</Link></li>
                                                )
                                            }
                                        </MobileSubNavButtonClient> :
                                        <li onClick={() => setToggle(false)} key={subCat?._id} className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href={`/products?category=${subCat?.slug}`} className='w-full block'>{subCat?.title}</Link></li>
                                    )
                                }
                            </MobileSubNavButtonClient> :
                        <li onClick={() => setToggle(false)} key={category?._id} className='hover:text-white hover:uppercase border-b border-b-dark border-opacity-10 py-2'><Link href={`/products?category=${category?.slug}`} className='w-full block'>{category?.title}</Link></li>
                    )
                }
                {
                    user?.data?.user?.email || loginSuccess ?
                        <div>
                            <Link onClick={() => setToggle(false)} className="block my-2" href='/account'>Account</Link>
                            <button onClick={handleLogout} className="">Logout</button>
                        </div> :
                        <Link onClick={() => setToggle(false)} className="" href='/login'>Login</Link>
                }
            </ul>
        </nav>
    );
};

export default MobileNav;