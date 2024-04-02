import Image from "next/image";

const Portada = ({ nosotros }) => {
  return (
    <section className="relative my-16">
      <div className="absolute z-20 -top-16 hidden lg:block">
        <Image
          alt={nosotros.data.imagedecorizq.alt}
          src={nosotros.data.imagedecorizq.url}
          width={130}
          height={562}
        />
      </div>
      <div className="absolute z-20 right-0 bottom-0 hidden lg:block">
        <Image
          alt={nosotros.data.imagedecorder.alt}
          src={nosotros.data.imagedecorder.url}
          width={130}
          height={562}
        />
      </div>
      <div className="w-full aspect-[7/3] lg:aspect-[200/122] lg:h-[420px] xl:h-[510px] relative overflow-hidden">
        <Image
          className="brightness-50 -mt-2 lg:mt-0"
          alt={nosotros.data.imageorg.alt}
          src={nosotros.data.imageorg.url}
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute sm:left-[18.5%] lg:top-16 xl:top-32 w-full lg:w-fit mt-[10%] lg:mt-[27px] -space-y-2 sm:-space-y-4">
          <p className="font-bold text-[25px] sm:text-[40px] md:text-[60px] lg:text-[90px] text-center sm:text-left font-harmattan text-[#FFFFFF]">
            NUESTRA
          </p>
          <p className="font-bold text-[25px] sm:text-[40px] md:text-[60px] lg:text-[90px] text-center sm:text-left font-harmattan text-[#FFFFFF] ml-16 sm:ml-0 lg:ml-20">
            ORGANIZACIÓN
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center sm:justify-normal sm:items-start gap-2 xl:gap-5">
            <hr className="h-1 lg:h-2 bg-[#F97700] w-[75px] lg:w-[120px] border-0" />
            <hr className="h-1 lg:h-2 bg-[#1CB567] w-[34px] lg:w-[35px] border-0 mr-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portada;
