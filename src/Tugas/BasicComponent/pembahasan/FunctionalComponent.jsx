const FunctionalComponent = (props) => {
  return (
    <div className="functional-component">
      <p>
        Halo, nama saya {props.nama}. Saya berusia {props.umur} tahun. Hobi saya adalah {props.hobi}. Saat ini saya sedang mengikuti pelatihan mengenai <span> {props.materi}</span> melalui program dari eduwork. <br />
        <br /> Terima kasih semuanya.
      </p>
    </div>
  );
};

export default FunctionalComponent;
