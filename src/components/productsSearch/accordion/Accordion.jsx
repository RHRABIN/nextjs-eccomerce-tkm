"use client"
import AccordionClient from '@/clientSideRender/accordion/AccordionClient';
import { getCategories, getAllWeight, getShopByCategory } from '@/config/categoriesApi';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import allJsonDta from "../../../data/category.json"

const Accordion = ({isMobile}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [categories, setCategories] = useState(null);
    const [selectedValue, setSelectedValue] = useState({
        subcat: [],
        weight: [],
    });
    // const [allWeight, setAllWeight] = useState(null);
    // const [shopBy, setShopBy] = useState(null);
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
        // const fetchData = async () => {
        //     try {
        //         const [categoriesRes, allWeightRes, shopByRes] = await Promise.all([
        //             getCategories(),
        //             getAllWeight(),
        //             getShopByCategory()
        //         ]);
        //         setCategories(categoriesRes?.data);
        //         setAllWeight(allWeightRes?.data);
        //         setShopBy(shopByRes?.data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };

        // fetchData();
        if(allJsonDta){
            setCategories(allJsonDta);
            // setAllWeight(allJsonDta?.weight);
            // setShopBy(allJsonDta?.shopBy);
        }
    }, []);


    const handleQueryChange = (e, itemName) => {
        const othersItem = itemName === "subcat" ? "weight": "subcat";
        const query = e.target.value;
        const isChecked = e.target.checked;
        // console.log(query, isChecked, othersItem, itemName)
        let newQuery;
        if (isChecked) {
            console.log("if", selectedValue[itemName])
            newQuery = [...selectedValue[itemName], query];
        } else {
            console.log("else", selectedValue[itemName])
            newQuery = selectedValue[itemName].filter(item => item !== query);
        }
        setSelectedValue({[itemName]: newQuery, [othersItem]: selectedValue[othersItem]});
        router.push(pathname + '?' + createQueryString(itemName, newQuery.join("--")))
    }
    return (
        <div className='mt-2'>
            <AccordionClient title={'All Category'} isMobile={isMobile}>
                <ul className="text-sm overflow-y-auto max-h-[15rem]">
                    {
                        categories?.category?.map(category =>
                            <li
                                key={category?._id}
                                className="hover:bg-gray-300 hover:text-primary cursor-pointer"><Link href={pathname + '?' + createQueryString('category', category.slug)} className="w-full block ps-8 py-1 text-[12px]">{category?.title}</Link></li>
                        )
                    }
                </ul>
            </AccordionClient>
            {
                categories?.shopBy?.map(shop =>
                    <AccordionClient key={shop?._id} title={shop?.title} isMobile={isMobile}>
                        <ul className="text-sm overflow-y-auto max-h-[15rem]">
                            {/* {
                                shop?.children?.map(child =>
                                    <li key={child?._id} className="hover:bg-gray-300 hover:text-primary cursor-pointer"><Link href={pathname + '?' + createQueryString('subcat', child.slug)} className="w-full block px-2 py-1 text-[12px]">{child?.title}</Link></li>
                                )
                            } */}
                            {shop?.children?.map(child => (
                                <div key={child?._id} className='flex items-center custom-checkbox mt-1'>
                                    <input
                                        onChange={(e)=> handleQueryChange(e, 'subcat')}
                                        type="checkbox"
                                        value={child?.slug}
                                        id={child?._id}
                                        className='hidden'
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
                        categories?.weight?.map(weight =>
                            <div key={weight?._id} className='flex items-center custom-checkbox mt-1'>
                                    <input
                                        onChange={(e)=> handleQueryChange(e, 'weight')}
                                        type="checkbox"
                                        value={weight?.name}
                                        id={weight?._id}
                                        className='hidden'
                                    />
                                    <label
                                        htmlFor={weight?._id}
                                        className={`hover:bg-gray-300 hover:text-primary cursor-pointer w-full block px-2 py-1 text-[12px]`}>
                                        {weight.name}
                                    </label>
                                </div>
                        )
                    }
                </ul>
            </AccordionClient>
        </div>
    );
};

export default Accordion;
