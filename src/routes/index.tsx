import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import BrokenSvg from "~/broken.svg?jsx"

export default component$(() => {
  return (
    <>
      <BrokenSvg></BrokenSvg>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
