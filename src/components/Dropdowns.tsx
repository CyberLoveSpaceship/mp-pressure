import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { DropdownItem } from "~/app/[lang]/page";

export default function Dropdowns({ items }: { items: DropdownItem[] }) {
  const headingIcon = "+";

  return (
    <>
      <Accordion allowZeroExpanded>
        {items.map((item: DropdownItem, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading className="text-lg mb-4 px-2 border-solid border-b-2 border-white">
              <AccordionItemButton>
                <div className="flex justify-between">
                  <h2>{item.heading}</h2>
                  <span>{headingIcon}</span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="mb-4 p-2 prose prose-invert prose-h1:text-xl prose-h2:text-lg prose-h3:text-base ">
                {item.content}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
