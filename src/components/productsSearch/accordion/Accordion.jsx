import AccordionClient from "@/clientSideRender/accordion/AccordionClient";
import { getCategories, getAllWeight, getShopByCategory } from '@/config/categoriesApi'
import Link from "next/link";

const Accordion = async () => {
    const [categoryResponse, weightResponse, shopByResponse] = await Promise.all([
        getCategories(),
        getAllWeight(),
        getShopByCategory(),
    ]);

    const { data: categories } = categoryResponse || {};
    const { data: allWeight } = weightResponse || {};
    const { data: shopBy } = shopByResponse || {};

    return (
        <div className="my-8">
            <AccordionClient title={'All Category'}>
                <ul className="text-sm overflow-y-auto max-h-[20rem]">
                    {
                        categories?.result?.map(category =>
                            <li
                                key={category?._id}
                                className="hover:bg-gray-300 hover:text-primary cursor-pointer my-0.5"><Link href={`/products?category=${category?.slug}`} className="w-full block p-2">{category?.title}</Link></li>
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
                                    <li key={child?._id} className="hover:bg-gray-300 hover:text-primary cursor-pointer my-0.5"><Link href={`/products?category=${child?.slug}`} className="w-full block p-2">{child?.title}</Link></li>
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
                                className="hover:bg-gray-300 hover:text-primary cursor-pointer my-0.5"><Link href={``} className="w-full block p-2">{weight?.name}</Link></li>
                        )
                    }
                </ul>
            </AccordionClient>
        </div>
    );
};

export default Accordion;
