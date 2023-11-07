import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import BrokenSvg2 from "~/broken2.svg?jsx";

export default component$(() => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/just-1">Just 1</Link>
        </li>
      </ul>
      <section style={{ display: "flex" }}>
        <div>
          <h1>2</h1>
          <BrokenSvg2></BrokenSvg2>
        </div>
      </section>
    </>
  );
});
