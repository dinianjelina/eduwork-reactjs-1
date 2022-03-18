import React from 'react';

export default class FormElement extends React.Component {
  state = {
    nama: '',
    jurusan: '',
    jenisKelamin: '',
    alamat: '',
    member: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      nama: ${this.state.nama}
      jurusan: ${this.state.jurusan}
      jenisKelamin: ${this.state.jenisKelamin}
      alamat: ${this.state.alamat}
      member: ${this.state.member ? 'YES' : 'NO'}
      `);

    this.setState({
      nama: '',
      jurusan: '',
      jenisKelamin: '',
      alamat: '',
      member: false,
    });
  };

  render() {
    return (
      <form style={{ margin: '200px 300px 200px', border: '1px solid', padding: '20px' }} onSubmit={this.handleSubmit}>
        <label>
          Nama: <input type="text" onChange={(e) => this.setState({ nama: e.target.value })} defaultValue={this.props.nama} />
        </label>
        <br />
        <label>
          Jurusan:{' '}
          <select onChange={(e) => this.setState({ jurusan: e.target.value })}>
            <option value="">Pilih Jurusan</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
          </select>
        </label>
        <br />
        <label>
          Jenis Kelamin:
          <input type="radio" name="jenis kelamin" value="laki-laki" onChange={(e) => this.setState({ jenisKelamin: e.target.value })} /> <label htmlFor="laki-laki">Laki-laki</label>
          <input type="radio" name="jenis kelamin" value="Perempuan" onChange={(e) => this.setState({ jenisKelamin: e.target.value })} /> <label htmlFor="perempuan">Perempuan</label>
        </label>
        <br />
        <label>
          Alamat: <textarea cols="30" rows="10" onChange={(e) => this.setState({ alamat: e.target.value })} value={this.state.alamat} />
        </label>
        <br />
        <label>
          Member: <input type="checkbox" checked={this.state.member} onChange={(e) => this.setState({ member: e.target.checked })} />
        </label>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
