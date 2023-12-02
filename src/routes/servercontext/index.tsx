import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

const serverFunctionA = server$(async function a() {
  return this.method;
});
const serverFunctionB = server$(async function b() {
  return (this || {}).method;
});

const MultipleServerFunctionsInvokedInTask = component$(() => {
  const methods = useStore<{ a: string; b: string }>({ a: "", b: "" });
  useTask$(async () => {
    methods.a = await serverFunctionA();
    methods.b = await serverFunctionB();

    console.log({ requestMethodOne: methods.a, requestMethodTwo: methods.b });
  });

  return (
    <div id="methods">
      {methods.a}
      {methods.b}
    </div>
  );
});

export default MultipleServerFunctionsInvokedInTask;
