"use client"
import AccordionClient from '@/clientSideRender/accordion/AccordionClient';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import allJsonDta from "../../../data/category.json"

const Accordion = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
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
        if (allJsonDta) {
            setCategories(allJsonDta);
            // setAllWeight(allJsonDta?.weight);
            // setShopBy(allJsonDta?.shopBy);
        }
    }, []);

    useEffect(() => {
        const subcat = searchParams.get('subcat')?.split("--") || [];
        const weight = searchParams.get('weight')?.split("--") || [];
        if (subcat || weight) {
            setSelectedValue({
                subcat,
                weight
            })
        }
    }, [searchParams])


    const handleQueryChange = (e, itemName) => {
        const othersItem = itemName === "subcat" ? "weight" : "subcat";
        const query = e.target.value;
        const isChecked = e.target.checked;

        let newQuery;
        if (isChecked) {
            newQuery = [...selectedValue[itemName], query];
        } else {
            newQuery = selectedValue[itemName].filter(item => item !== query);
        }
        setSelectedValue({ [itemName]: newQuery, [othersItem]: selectedValue[othersItem] });
        if (newQuery.length > 0) {
            router.push(pathname + '?' + createQueryString(itemName, newQuery.join("--")))
        } else {
            params.delete(itemName);
            router.push(pathname + '?' + params.toString())
        }
    }

    return (
        <div className='mt-2'>
            <AccordionClient title={'All Category'}>
                <ul className="text-sm overflow-y-auto max-h-[19rem]">
                    {
                        categories?.category?.map(category =>
                                <div key={category?._id} className={`${category.title?.toLowerCase() == 'brands' ? 'hidden': ''} flex items-center custom-checkbox mt-[2px] capitalize`}>
                                    <input
                                        onClick={()=>router.push( pathname + '?' + createQueryString('category', category.slug))}
                                        type="checkbox"
                                        value={category?.slug}
                                        id={category?._id}
                                        className='hidden'
                                        checked={searchParams.get('category') == (category?.slug)}
                                    />
                                    <label
                                        htmlFor={category?._id}
                                        className={`hover:bg-[#f2fafe] hover:text-primary cursor-pointer w-full block px-2 py-1 text-[12px]`}>
                                        {category.title}
                                    </label>
                                </div>
                        )
                    }
                </ul>
            </AccordionClient>
            {
                categories?.shopBy?.map(shop =>
                    <AccordionClient key={shop?._id} title={shop?.title}>
                        <ul className="text-sm overflow-y-auto max-h-[17rem]">
                            {shop?.children?.map(child => (
                                <div key={child?._id} className='flex items-center custom-checkbox mt-1'>
                                    <input
                                        onChange={(e) => handleQueryChange(e, 'subcat')}
                                        type="checkbox"
                                        value={child?.slug}
                                        id={child?._id}
                                        className='hidden'
                                        checked={selectedValue.subcat.includes
                                            (child?.slug)}
                                    />
                                    <label
                                        htmlFor={child?._id}
                                        className={`hover:bg-[#f2fafe] hover:text-primary cursor-pointer w-full block px-2 py-1 text-[12px]`}>
                                        {child.title}
                                    </label>
                                </div>
                            ))}

                        </ul>
                    </AccordionClient>
                )
            }
            <AccordionClient title={'Weight'}>
                <ul className="text-sm overflow-y-auto max-h-[17rem]">
                    {
                        categories?.weight?.map(weight =>
                            <div key={weight?._id} className='flex items-center custom-checkbox mt-1'>
                                <input
                                    onChange={(e) => handleQueryChange(e, 'weight')}
                                    type="checkbox"
                                    value={weight?.name}
                                    id={weight?._id}
                                    className='hidden'
                                    checked={selectedValue.weight.includes
                                        (weight?.name)}
                                />
                                <label
                                    htmlFor={weight?._id}
                                    className={`hover:bg-[#f2fafe] hover:text-primary cursor-pointer w-full block px-2 py-1 text-[12px]`}>
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
