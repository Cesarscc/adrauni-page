/**
 * @typedef {import("@prismicio/client").Content.DogCardSlice} DogCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DogCardSlice>} DogCardProps
 * @param {DogCardProps}
 */
const DogCard = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for dog_card (variation: {slice.variation}) Slices
    </section>
  );
};

export default DogCard;
