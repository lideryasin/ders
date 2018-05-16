import React, { Component } from 'react';
import firebase from 'firebase';
import trim from 'trim';
import './ekle.css';

class Ekle extends Component {
    constructor() {
        super();

        this.state = {
            ad: '',
            soyad: '',
            sinif: '9',
            no: '',
            file: '',
            imagePreviewUrl: '',
        }
    }

    adChange = (e) => {
        this.setState({ ad: e.target.value })
    }
    soyadChange = (e) => {
        this.setState({ soyad: e.target.value })
    }

    sinifChange = (e) => {
        this.setState({ sinif: e.target.value })
    }
    noChange = (e) => {
        this.setState({ no: e.target.value })
    }

    handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
    }

   ekle = (e) => {

        e.preventDefault();

        const storageRef = firebase.storage().ref(`${this.state.file.name}`);
        const task = storageRef.put(this.state.file);

        task.on('state_changed', snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percentage
            })
        }, error => {
            console.log(error);
        }, () => {
            console.log(task.snapshot.downloadURL)
            const dbRef = firebase.database().ref('Ogrenciler');
            const timestamp = Date.now();
            dbRef.push({
                ad: trim(this.state.ad),
                soyad: trim(this.state.soyad),
                sinif: trim(this.state.sinif),
                no: trim(this.state.no),
                saat: trim("" + new Intl.DateTimeFormat('tr-TR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)),
                image: task.snapshot.downloadURL

            });
        });
    }

    render() {
        const { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />)
        } else {
            $imagePreview = (<div className="pretext">Lütfen Resim Seçiniz</div>)
        }

        return (
            <div className="hepsi">
                <div className="container">

                    <input type="text"
                        onChange={this.adChange}
                        placeholder="Ad"
                        className="form-control mr-sm-2 search text"
                    />

                    <input type="text"
                        onChange={this.soyadChange}
                        placeholder="Soyad"
                        className="form-control mr-sm-2 search text"
                    />

                    <select className="custom-select text" onChange={this.sinifChange}>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>

                    <input type="text"
                        onChange={this.noChange}
                        placeholder="Numarası"
                        className="form-control mr-sm-2 search text"
                    />

                    <input type="file" onChange={this.handleImageChange} />
                    <div className="imgGoster">
                        {$imagePreview}
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-success text button"
                        onClick={this.ekle}                    >
                        Ekle
                    </button>

                </div>
            </div>
        );
    }
}

export default Ekle;