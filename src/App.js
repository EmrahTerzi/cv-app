import React from 'react';
import './App.css';
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePicture from "./images/ProfilePicture.png";
import qrCode from "./images/QRCode.png";
import GetAppIcon from '@material-ui/icons/GetApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const htmlToPdf = () => {
  const htmlToCanvas = document.getElementById("div-center");
  html2canvas(htmlToCanvas).then(canvas  => {
    const canvasToImg = canvas.toDataURL("image/png");
    window.open(canvasToImg);
    const pdf = new jsPDF();
    pdf.addImage(canvasToImg, 'JPEG', 10,10,190,200);
    pdf.save("Emrah_Terzi_CV.pdf");
  });

}

function App() {
  return (
    <div className="App">
      <div id="side-menu">
        <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-disabled">Projeyi görüntülemek için tıklayınız</Tooltip>}>
          <div id="side-menu-element">
            <a href="https://github.com/EmrahTerzi/cv-app" target="_blank">
              <GitHubIcon style={{ color: "black" }} fontSize="large"/>
            </a>
          </div>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Projeyi PDF olarak indirmek için tıklayınız</Tooltip>}>
          <div id="side-menu-element">
            <GetAppIcon fontSize="large" onClick={() => htmlToPdf()}/>
          </div>
        </OverlayTrigger>
        
      </div>    
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
            <Col xl={12} lg={12} md={12} sm={12}>
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
                  <b>Ziraat Finans Uygulaması Projesi</b> ekibinde  React kullanarak web önyüz ve komponent projelerinde görevler alındı. Kısa süreli backend projelerinde de görevler alındı. Kullanılan Teknolojiler önyüz geliştirmelerinde Javascript, React, Redux, Mobx, React Hooks, CSS, HTML, test kodu geliştirmelerinde jest ve enzyme, paket kontrolllerinde Git ve NPM, backend projelerinde Go ve C#
                </p>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">CV yi online görüntülemek için taratabilirsiniz</Tooltip>}>
              <img id="qr-code" src={qrCode} alt="CV yi online görüntülemek için taratabilirsiniz" />
             </OverlayTrigger>
            </Col>
          </Row>
          </Container>
      </div>
    </div>
  );
}

export default App;
