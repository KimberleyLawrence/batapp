
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";
import { Accordion, AccordionItem } from '../components/accordion';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function AccordionPage() {
  return (
    <>
      <Pagetitle name="Accordion" />

      <Accordion>
        <AccordionItem title="Title 1">Hello</AccordionItem>
        <AccordionItem title="Title 2">Goodybe</AccordionItem>
      </Accordion>

    </>
  )
}
