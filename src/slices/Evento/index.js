/**
 * @typedef {import("@prismicio/client").Content.EventoSlice} EventoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EventoSlice>} EventoProps
 * @param {EventoProps}
 */
const Evento = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for evento (variation: {slice.variation}) Slices
    </section>
  );
};

export default Evento;
