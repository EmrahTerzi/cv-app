import React from 'react';
import './App.css';
import { Container, Row, Col  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePicture from "./images/ProfilePicture.png";

function App() {
  return (
    <div className="App">
        <div id="div-center">
          <Container>
          <Row id="header-row">
            <Col id="header-information" xl={12} lg={12} md={12} sm={12}>
              Kişisel Bilgileri
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={6} sm={6}>
              <Row>
                <p id="p-information"><b>Ad Soyad:</b> Emrah Terzi</p>
              </Row>
              <Row>
                <p id="p-information"><b>Doğum Tarihi:</b> 18.05.1985</p>
              </Row>
              <Row>
                <p id="p-information"><b>Doğum Yeri:</b> Merkez/TEKIRDAĞ</p>
              </Row>
              <Row>
                <p id="p-information"><b>Medeni Durum:</b> Evli</p>
              </Row>
              <Row>
                <p id="p-information"><b>Askerlik Durumu:</b> Yapıldı</p>
              </Row>
              <Row>
                <p id="p-information"><b>Mail Adresi:</b> emrahterzi059@gmail.com</p>
              </Row>
              <Row>
                <p id="p-information"><b>Telefon No:</b> 90 (537) 411 57 31</p>
              </Row>
              <Row>
                <p id="p-information"><b>Adres:</b> Ümraniye/İSTANBUL</p>
              </Row>
            </Col>
            <Col xl={6} lg={6} md={6} sm={6}>
              <img id="profile-picture" src={profilePicture} alt="Vesikalik" />
            </Col>
          </Row>
          <Row id="header-row">
            <Col id="header-information" xl={12} lg={12} md={12} sm={12}>
              Eğitim Bilgileri
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={6} sm={6}>
              <Row>
                <p id="p-information"><b>Lise:</b> Tekirdağ Anadolu Lisesi</p>
              </Row>
              <Row>
                <p id="p-information"><b>Üniversite:</b> Yıldız Teknik Üniversitesi Bilgisayar Mühendisliği Bölümü</p>
              </Row>
            </Col>
          </Row>
          <Row id="header-row">
            <Col id="header-information" xl={12} lg={12} md={12} sm={12}>
              İş Tecrübesi
            </Col>
          </Row>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12}>
              <Row>
                <p id="p-information"><b><a href="https://www.ziraatteknoloji.com/" target="_blank">Ziraat Teknoloji:</a> </b>(6 Ağustos 2012 - )</p>
                <p id="p-information">
                  <b>Nakit Yönetimi Tahsilatlar</b> ekibinde webservisler aracışığı ile kurum entegrasyonları, kullanıcı arayüzleri hazırlanması ve Oracle (PlSql) de veri tabanı işlemlerinde görev alınması. Kullanılan Teknolojiler C#, Oracle, Web service
                </p>
                <p id="p-information">
                  <b>Muhasebe</b> Ekibinde windows formlar aile kullanıcı arayüzleri hazırlanması,  schedule batch hazırlanması ve mvc web api uygulamaları ile diğer ekiplerle entegrasyon. Kullanılan Teknolojiler C#, Oracle, MVC Web Api
                </p>
                <p id="p-information">
                  <b>Ziraat Finans Uygulaması Projesi</b> ekibinde  React kullanarak web önyüz ve komponent projelerinde görevler alındı. Kısa süreli backend projelerinde de görevler alındı. Kullanılan Teknolojiler Javascript, React, Redux, Mobx, React Hooks, CSS, HTML, paket kontrolllerinde Git ve NPM, backend projelerinde Go ve C#
                </p>
              </Row>
            </Col>
          </Row>
          </Container>
      </div>
    </div>
  );
}

export default App;
