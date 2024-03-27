/**
 * @typedef {import("@prismicio/client").Content.CatCardSlice} CatCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CatCardSlice>} CatCardProps
 * @param {CatCardProps}
 */
const CatCard = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cat_card (variation: {slice.variation}) Slices
    </section>
  );
};

export default CatCard;
