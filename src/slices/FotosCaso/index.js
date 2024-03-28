/**
 * @typedef {import("@prismicio/client").Content.FotosCasoSlice} FotosCasoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FotosCasoSlice>} FotosCasoProps
 * @param {FotosCasoProps}
 */
const FotosCaso = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for fotos_caso (variation: {slice.variation}) Slices
    </section>
  );
};

export default FotosCaso;
