"use client"
import AccordionClient from '@/clientSideRender/accordion/AccordionClient';
import { getCategories, getAllWeight, getShopByCategory } from '@/config/categoriesApi';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const Accordion = ({isMobile}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [categories, setCategories] = useState(null);
    const [allWeight, setAllWeight] = useState(null);
    const [shopBy, setShopBy] = useState(null);
    const [selectedValue, setSelectedValue] = useState([]);
    const router = useRouter();

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoriesRes, allWeightRes, shopByRes] = await Promise.all([
                    getCategories(),
                    getAllWeight(),
                    getShopByCategory()
                ]);
                setCategories(categoriesRes?.data);
                setAllWeight(allWeightRes?.data);
                setShopBy(shopByRes?.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    const handleQueryChange = (e) => {
        const query = e.target.value;
        const isChecked = e.target.checked;

        let newQuery;
        if (isChecked) {
            newQuery = [...selectedValue, query];
        } else {
            newQuery = selectedValue?.filter(item => item !== query);
        }
        setSelectedValue(newQuery);
    }
    console.log(selectedValue)


    return (
        <div className='mt-2'>
            <AccordionClient title={'All Category'} isMobile={isMobile}>
                <ul className="text-sm overflow-y-auto max-h-[15rem]">
                    {
                        categories?.result?.map(category =>
                            <li
                                key={category?._id}
                                className="hover:bg-gray-300 hover:text-primary cursor-pointer"><Link href={pathname + '?' + createQueryString('category', category.slug)} className="w-full block px-2 py-1 text-[12px]">{category?.title}</Link></li>
                        )
                    }
                </ul>
            </AccordionClient>
            {
                shopBy?.data?.children?.map(shop =>
                    <AccordionClient key={shop?._id} title={shop?.title} isMobile={isMobile}>
                        <ul className="text-sm overflow-y-auto max-h-[15rem]">
                            {/* {
                                shop?.children?.map(child =>
                                    <li key={child?._id} className="hover:bg-gray-300 hover:text-primary cursor-pointer"><Link href={pathname + '?' + createQueryString('subcat', child.slug)} className="w-full block px-2 py-1 text-[12px]">{child?.title}</Link></li>
                                )
                            } */}
                            {shop?.children?.map(child => (
                                <div key={child?._id} className='flex items-center'>
                                    <input
                                        onChange={handleQueryChange}
                                        type="checkbox"
                                        value={child?.slug}
                                        id={child?._id}
                                    />
                                    <label
                                        htmlFor={child?._id}
                                        className={`hover:bg-gray-300 hover:text-primary cursor-pointer w-full block px-2 py-1 text-[12px]`}>
                                        {child.title}
                                    </label>
                                </div>
                            ))}

                        </ul>
                    </AccordionClient>
                )
            }
            <AccordionClient title={'Weight'} isMobile={isMobile}>
                <ul className="text-sm overflow-y-auto max-h-[15rem]">
                    {
                        allWeight?.data?.map(weight =>
                            <li key={weight?._id}
                                className="hover:bg-gray-300 hover:text-primary cursor-pointer">
                                <Link
                                    href={
                                        pathname + '?' + createQueryString('weight', weight.name)
                                    }
                                    className="w-full block px-2 py-1 text-[12px]">
                                    {weight?.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </AccordionClient>
        </div>
    );
};

export default Accordion;
