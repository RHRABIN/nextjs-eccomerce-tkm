import AccordionClient from "@/clientSideRender/accordion/AccordionClient";
import { getCategories, getAllWeight, getShopByCategory } from '@/config/categoriesApi'

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
                <ul className="text-sm">
                    {
                        categories?.result?.map(category =>
                            <li
                                key={category?._id}
                                className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">{category?.title}</li>
                        )
                    }
                </ul>
            </AccordionClient>
            {
                shopBy?.data?.children?.map(shop =>
                    <AccordionClient key={shop?._id} title={shop?.title}>
                        <ul className="text-sm">
                            {
                                shop?.children?.map(child =>
                                    <li key={child?._id} className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">{child?.title}</li>
                                )
                            }
                        </ul>
                    </AccordionClient>
                )
            }
            <AccordionClient title={'Weight'}>
                <ul className="text-sm">
                    {
                        allWeight?.data?.map(weight =>
                            <li key={weight?._id}
                                className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">{weight?.name}</li>
                        )
                    }
                </ul>
            </AccordionClient>
        </div>
    );
};

export default Accordion;
