import { Disclosure } from "@headlessui/react";

import { DropdownItem } from "~/app/[lang]/page";

export default function Dropdowns({ items }: { items: DropdownItem[] }) {
  const headingIcon = "+";

  return (
    <div className="flex flex-col">
      {items.map((item: DropdownItem, index) => (
        <Disclosure key={index}>
          <Disclosure.Button className="text-lg mb-4 px-2 border-solid border-b-2 border-white">
            <div className="flex justify-between">
              <h2>{item.heading}</h2>
              <span>{headingIcon}</span>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className="mb-4 p-2 prose prose-invert prose-h1:text-xl prose-h2:text-lg prose-h3:text-base ">
              {item.content}
            </div>
          </Disclosure.Panel>
        </Disclosure>
      ))}
    </div>
  );
}
