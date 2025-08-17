
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";
import { Accordion, AccordionItem } from '../components/accordion';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const contentOne = (<>
  <p>This</p>
  <p>is</p>
  <p>content</p>

</>
);

export default function AccordionPage() {
  return (
    <>
      <Pagetitle name="Accordion" />

      <Accordion>
        <AccordionItem title="Title 1" content={contentOne} isOpen={false} onClick={false} />
        <AccordionItem title="Title 2" content="Content 2" isOpen={false} onClick={false} />
        <AccordionItem title="Title 3" content="Content 3" isOpen={false} onClick={false} />
      </Accordion>



    </>
  )
}
