import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import Markdown from "react-markdown";
import useSWRImmutable from "swr/immutable";
import { LoadingState, ErrorState } from "./SWRStates";
import { fetcher } from "~/app/utils";

// import "./Dropdowns.css";

export type DropdownContent = {
  uuid: number;
  heading: string;
  content: string;
};

export default function Dropdowns() {
  const contentURL = "/api/content";
  const {
    data,
    error,
    isValidating: loading,
  } = useSWRImmutable(contentURL, fetcher);

  return (
    <>
      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState error={error} />
      ) : data ? (
        <Accordion allowZeroExpanded>
          {data.map((item: DropdownContent) => (
            <AccordionItem key={item.uuid}>
              <AccordionItemHeading className="text-lg mb-4 px-2 border-solid border-b-2 border-white">
                <AccordionItemButton>
                  <DropdownHeading text={item.heading} />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="mb-4 p-2 prose prose-invert prose-h1:text-xl prose-h2:text-lg prose-h3:text-base ">
                  <Markdown>{item.content}</Markdown>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      ) : null}
    </>
  );
}

function DropdownHeading({ text }: { text: string }) {
  const icon = "+";

  return (
    <div className="flex justify-between">
      <h2>{text}</h2>
      <span>{icon}</span>
    </div>
  );
}

function DropdownItem() {
  return (
    <div>
      <h3>On the phone</h3>
      <p>some text here.</p>
    </div>
  );
}
