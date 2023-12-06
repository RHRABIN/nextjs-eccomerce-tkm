import AccordionClient from "@/clientSideRender/accordion/AccordionClient";

const Accordion = () => {

    return (
        <div className="my-8">
            <AccordionClient title={'All Category'}>
                <ul className="text-sm">
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">New</li>
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Best</li>
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Routine</li>
                </ul>
            </AccordionClient>
            <AccordionClient title={'Skin Concern'}>
                <ul className="text-sm">
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Brightning</li>
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Acne</li>
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Hydration</li>
                </ul>
            </AccordionClient>
            <AccordionClient title={'Skin Type'}>
                <ul className="text-sm">
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Brightning</li>
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Acne</li>
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Hydration</li>
                </ul>
            </AccordionClient>
            <AccordionClient title={'Star Ingredients'}>
                <ul className="text-sm">
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Brightning</li>
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Acne</li>
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Hydration</li>
                </ul>
            </AccordionClient>
            <AccordionClient title={'Weight'}>
                <ul className="text-sm">
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Brightning</li>
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Acne</li>
                    <li className="hover:bg-gray-300 hover:text-primary cursor-pointer p-2 my-0.5">Hydration</li>
                </ul>
            </AccordionClient>
        </div>
    );
};

export default Accordion;
