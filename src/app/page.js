import Layout from "@/components/layout";
import { createClient } from "@/prismicio";

import Image from "next/image";

export default async function Home() {
  const client = createClient();

  const footerdata = await client.getSingle("footer");
  const navdata = await client.getSingle("navbar");
  const index = await client.getSingle("index");
  return (
    <Layout footerdata={footerdata} navdata={navdata}>
      <main>
        <section className="relative flex mb-10">
          <div className="relative basis-2/5">
            <div className="flex justify-center">
              <Image
                className="absolute mt-[46px]"
                alt={index.data.portada.alt}
                src={index.data.portada.url}
                width={450}
                height={680}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
              <Image
                alt={index.data.logoportada.alt}
                src={index.data.logoportada.url}
                width={181}
                height={143}
              />
            </div>
            <Image
              className="-left-[140px]"
              alt={index.data.formvector.alt}
              src={index.data.formvector.url}
              width={798}
              height={783}
            />
          </div>
          <div className="basis-3/5 max-w-[1000px] 3xl:max-w-[1042px] max-h-[246px] absolute right-0 top-[250px]">
            <strong className="text-[50px] 3xl:text-[65px] font-plusJakartaSans font-extrabold">
              Cuidando a los peludos de la UNI y{" "}
            </strong>
            <strong className="text-[#F49606] text-[50px] 3xl:text-[65px] font-plusJakartaSans font-extrabold">
              Promoviendo la tendencia Responsable.
            </strong>
          </div>
        </section>
        <section className="mx-5 mb-10">
          <div className="w-full grid grid-cols-3">
            <div className="relative w-full h-[381px] col-span-1">
              <div
                className="absolute inset-0 bg-[#BD9F00] mix-blend-color"
                style={{
                  backgroundColor: "#BD9F00",
                  backgroundImage: "rgba(0, 0, 0, 0.2)",
                }}
              ></div>
              <Image
                className="inset-0 w-full h-full object-cover"
                alt={index.data.cuadro1.alt}
                src={index.data.cuadro1.url}
                width={600}
                height={381}
              />
            </div>
            <div className="relative w-full h-[381px] col-span-1">
              <div
                className="absolute inset-0 bg-[#475E05] mix-blend-color"
                style={{
                  backgroundColor: "#475E05",
                  backgroundImage: "rgba(0, 0, 0, 0.2)",
                }}
              ></div>
              <Image
                className="inset-0 w-full h-full object-cover"
                alt={index.data.cuadro2.alt}
                src={index.data.cuadro2.url}
                width={600}
                height={381}
              />
            </div>
            <div className="relative w-full h-[381px] col-span-1">
              <div
                className="absolute inset-0 bg-[#FFD74A] mix-blend-color"
                style={{
                  backgroundColor: "#FFD74A",
                  backgroundImage: "rgba(0, 0, 0, 0.2)",
                }}
              ></div>
              <Image
                className="inset-0 w-full h-full object-cover"
                alt={index.data.cuadro3.alt}
                src={index.data.cuadro3.url}
                width={600}
                height={381}
              />
            </div>
            <div className="bg-[#9CC264] h-[381px] col-span-1">
              <div className="h-full flex flex-col items-center justify-center space-y-8">
                <p className="font-extrabold text-[#FFFFFF] text-[28px] text-center font-plusJakartaSans">
                  TU GENEROSIDAD NOS PERMITE A CONTINUAR CON LA MISIÓN DE AYUDAR
                  A LOS ANIMALITOS
                </p>
                <button className="bg-[#F49606] rounded-[50px] font-bold text-[#FFFFFF] w-[132px] h-[42px] font-plusJakartaSans">
                  DONAR
                </button>
              </div>
            </div>
            <div className="relative w-full h-[381px] col-span-1">
              <div
                className="absolute inset-0 bg-[#004B82] mix-blend-color"
                style={{
                  backgroundColor: "#004B82",
                  backgroundImage: "rgba(0, 0, 0, 0.2)",
                }}
              ></div>
              <Image
                className="inset-0 w-full h-full object-cover"
                alt={index.data.cuadro4.alt}
                src={index.data.cuadro4.url}
                width={600}
                height={381}
              />
            </div>
            <div className="bg-[#E58F57] h-[381px] col-span-1">
              <div className="h-full flex flex-col items-center justify-center space-y-8">
                <p className="font-extrabold text-[#FFFFFF] text-[28px] text-center font-plusJakartaSans">
                  MARCA LA DIFERENCIA Y ÚNETE AL EQUIPO PARA DAR AMOR Y CUIDADO
                  A LOS QUE NOS NECESITAN
                </p>
                <button className="bg-[#39C677] rounded-[50px] font-bold text-[#FFFFFF] w-[197px] h-[42px] font-plusJakartaSans">
                  CONTÁCTANOS
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-3">
            <div className="relative h-[762px] row-span-2 col-span-2 overflow-hidden">
              <div
                className="absolute inset-0 bg-[#930000] mix-blend-color"
                style={{
                  backgroundColor: "#930000",
                  backgroundImage: "rgba(0, 0, 0, 0.2)",
                  filter: "brightness(0.8)",
                }}
              ></div>
              <Image
                className="inset-0 w-full h-full object-cover"
                alt={index.data.cuadro5.alt}
                src={index.data.cuadro5.url}
                width={600}
                height={381}
                style={{ objectPosition: "50% 40%" }}
              />
            </div>
            <div className="relative w-full h-[381px] row-span-1 col-span-1">
              <div
                className="absolute inset-0 bg-[#F97700] mix-blend-color"
                style={{
                  backgroundColor: "#F97700",
                  backgroundImage: "rgba(0, 0, 0, 0.2)",
                  filter: "brightness(0.8)",
                }}
              ></div>
              <Image
                className="inset-0 w-full h-full object-cover"
                alt={index.data.cuadro6.alt}
                src={index.data.cuadro6.url}
                width={600}
                height={381}
                style={{ objectPosition: "50% 25%" }}
              />
            </div>
            <div className="bg-[#39C677] h-[381px] row-span-1 col-span-1">
              <div className="h-full flex flex-col items-center justify-center space-y-8">
                <p className="font-extrabold text-[#FFFFFF] text-[28px] text-center font-plusJakartaSans">
                  ADOPTAR ES UNA OPORTUNIDAD DE DAR Y RECIBIR AMOR
                </p>
                <button className="bg-[#F49606] rounded-[50px] font-bold text-[#FFFFFF] w-[150px] h-[42px] font-plusJakartaSans">
                  ADOPTAR
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex h-[842px] my-14">
          <div className="basis-1/2">
            <Image
              className="w-[663px] h-[655px] rounded-full object-cover shadow-md"
              alt={index.data.imagencomida.alt}
              src={index.data.imagencomida.url}
              width={663}
              height={655}
              style={{ boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.31)" }}
            />
          </div>
          <div className="basis-1/2">
            <p className="font-bold text-[64px] text-[#283B40] font-harmattan tracking-[.065em]">
              COMIDA
            </p>
            <p className="font-normal text-[35px] text-[#283B40] font-rubik mt-24">
              La comida es el principal problema para nosotros pues al mes
              gastamos alrededor de:
            </p>
            <ul className="font-normal text-[35px] text-[#283B40] font-rubik mt-12">
              <li>&bull; 310 kg. de comida de perro.</li>
              <li>&bull; 36 kg. de comida de gato. </li>
            </ul>
          </div>
        </section>
        <section className="flex my-32 mx-3">
          <div className="basis-1/2">
            <p className="text-[#283B40] font-harmattan font-bold text-[64px] tracking-[.065em]">
              SALUD
            </p>
            <p className="text-[#283B40] text-[35px] font-rubik font-normal">
              El 70% de nuestros perritos tienen más de 8 años y algunos de
              ellos requieren chequeos rutinarios para verificar su estado de
              salud.
            </p>
          </div>
          <div className="basis-1/2">
            <Image
              className="w-[663px] h-[655px] rounded-full object-cover"
              alt={index.data.imagensalud.alt}
              src={index.data.imagensalud.url}
              width={661}
              height={635}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
