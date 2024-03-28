/**
 * @typedef {import("@prismicio/client").Content.CasosRescateSlice} CasosRescateSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CasosRescateSlice>} CasosRescateProps
 * @param {CasosRescateProps}
 */
const CasosRescate = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for casos_rescate (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CasosRescate;
