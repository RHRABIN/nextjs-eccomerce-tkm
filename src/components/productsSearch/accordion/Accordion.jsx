"use client"
import AccordionClient from '@/clientSideRender/accordion/AccordionClient';
import { getCategories, getAllWeight, getShopByCategory } from '@/config/categoriesApi';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const Accordion = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [categories, setCategories] = useState(null);
    const [allWeight, setAllWeight] = useState(null);
    const [shopBy, setShopBy] = useState(null);

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



    return (
        <div className="my-8">
            <AccordionClient title={'All Category'}>
                <ul className="text-sm overflow-y-auto max-h-[20rem]">
                    {
                        categories?.result?.map(category =>
                            <li
                                key={category?._id}
                                className="hover:bg-gray-300 hover:text-primary cursor-pointer my-0.5"><Link href={pathname + '?' + createQueryString('category', category.slug)} className="w-full block p-2">{category?.title}</Link></li>
                        )
                    }
                </ul>
            </AccordionClient>
            {
                shopBy?.data?.children?.map(shop =>
                    <AccordionClient key={shop?._id} title={shop?.title}>
                        <ul className="text-sm overflow-y-auto max-h-[20rem]">
                            {
                                shop?.children?.map(child =>
                                    <li key={child?._id} className="hover:bg-gray-300 hover:text-primary cursor-pointer my-0.5"><Link href={pathname + '?' + createQueryString('category', child.slug)} className="w-full block p-2">{child?.title}</Link></li>
                                )
                            }
                        </ul>
                    </AccordionClient>
                )
            }
            <AccordionClient title={'Weight'}>
                <ul className="text-sm overflow-y-auto max-h-[20rem]">
                    {
                        allWeight?.data?.map(weight =>
                            <li key={weight?._id}
                                className="hover:bg-gray-300 hover:text-primary cursor-pointer my-0.5">
                                <Link
                                    href={
                                        pathname + '?' + createQueryString('weight', weight.name)
                                    }
                                    className="w-full block p-2">
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
