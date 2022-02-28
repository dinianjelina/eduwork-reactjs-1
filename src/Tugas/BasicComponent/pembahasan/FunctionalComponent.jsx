const FunctionalComponent = (props) => {
  return (
    <div>
      <p>
        Halo, nama saya {props.nama}. Saya berusia {props.umur} tahun. Hobi saya adalah {props.hobi}. Saat ini saya sedang mengikuti pelatihan mengenai {props.materi} melalui program dari eduwork. <br /> Terima kasih semuanya.
      </p>
    </div>
  );
};

export default FunctionalComponent;
