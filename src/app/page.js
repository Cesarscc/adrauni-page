import Layout from "@/components/layout";
import Comida from "@/components/main/Comida";
import ContenidoPrincipal from "@/components/main/ContenidoPrincipal";
import Portada from "@/components/main/Portada";
import Salud from "@/components/main/Salud";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();

  const footerdata = await client.getSingle("footer");
  const navdata = await client.getSingle("navbar");
  const index = await client.getSingle("index");
  return (
    <Layout footerdata={footerdata} navdata={navdata}>
      <main>
        <Portada index={index} />
        <ContenidoPrincipal index={index} />
        <Comida index={index} />
        <Salud index={index} />
      </main>
    </Layout>
  );
}
