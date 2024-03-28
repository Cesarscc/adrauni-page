import Layout from "@/components/layout";
import { createClient } from "@/prismicio";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const client = createClient();

  const footerdata = await client.getSingle("footer");
  const navdata = await client.getSingle("navbar");
  const rescatistas = await client.getSingle("rescatistas");

  return <Layout footerdata={footerdata} navdata={navdata}></Layout>;
};

export default Page;
