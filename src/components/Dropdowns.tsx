import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export function DropdownHeading({ text }: { text: string }) {
  const icon = "+";

  return (
    <div className="flex justify-between">
      <h2>{text}</h2>
      <span>{icon}</span>
    </div>
  );
}

export function DropdownItem() {
  return (
    <div>
      <h3>On the phone</h3>
      <p>some text here.</p>
    </div>
  );
}

export default function Dropdowns() {
  const items = [
    {
      uuid: 123,
      heading: "How to call your MP",
      content: DropdownItem(),
    },
  ];

  return (
    <Accordion allowZeroExpanded>
      {items.map((item) => (
        <AccordionItem key={item.uuid}>
          <AccordionItemHeading className="text-lg px-2 border-solid border-b-2 border-white">
            <AccordionItemButton>
              <DropdownHeading text={item.heading} />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{item.content}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
