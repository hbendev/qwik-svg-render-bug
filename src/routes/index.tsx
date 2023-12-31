import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

import BrokenSvg1 from "~/broken1.svg?jsx";
import BrokenSvg2 from "~/broken2.svg?jsx";

export default component$(() => {
  return (
    <>
      <ul>
        <li>
          <Link href="/just-1">Just 1</Link>
        </li>
        <li>
          <Link href="/just-2">Just 2</Link>
        </li>
      </ul>
      <section style={{ display: "flex" }}>
        <div>
          <h1>1</h1>
          <BrokenSvg1></BrokenSvg1>
        </div>
        <div>
          <h1>2</h1>
          <BrokenSvg2></BrokenSvg2>
        </div>
      </section>
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
