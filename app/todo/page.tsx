import { pingAction } from "@/actions/ping/ping.action";
import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  console.log(">> SSR Start");
  console.log("Hello");

  const result = await pingAction();
  await sleep(1500);

  console.log(">> SSR End");

  return <div>todo page {result}</div>;
};

export default page;
