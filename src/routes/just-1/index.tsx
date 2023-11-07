import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import BrokenSvg1 from "~/broken1.svg?jsx";

export default component$(() => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
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
      </section>
    </>
  );
});
