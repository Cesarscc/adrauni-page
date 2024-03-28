/**
 * @typedef {import("@prismicio/client").Content.CardRescatistaSlice} CardRescatistaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CardRescatistaSlice>} CardRescatistaProps
 * @param {CardRescatistaProps}
 */
const CardRescatista = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for card_rescatista (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CardRescatista;
