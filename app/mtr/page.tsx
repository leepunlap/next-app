import { Col, Row } from "react-bootstrap";
import Stall from "./stall"
import Mqtt from "./mqtt"
import Image from 'next/image'
import imgMaleToilet from '/public/img/mtr/male.png'
import imgFemaleToilet from '/public/img/mtr/female.png'
import imgAccessibleToilet from '/public/img/mtr/accessible.png'
import imgBabyFeedingArea from '/public/img/mtr/baby.png'

export default function Home() {
  const style = {
    width: '100vw'
  };
  return (
    <main className="min-h-screen">
      <div className="card" style={style}>
        <div className="card-body">
          <Row>
            <Col><Image src={imgMaleToilet} alt="Male" /></Col>
            <Col><Stall area={"male"} id={"1"} /></Col>
            <Col><Stall area={"male"} id={"2"} /></Col>
            <Col><Stall area={"male"} id={"3"} /></Col>
          </Row>
        </div>
      </div>
      <div className="card" style={style}>
        <div className="card-body">
          <Row>
            <Col><Image src={imgFemaleToilet} alt="Female" /></Col>
            <Col><Stall area={"female"} id={"1"} /></Col>
            <Col><Stall area={"female"} id={"2"} /></Col>
            <Col><Stall area={"female"} id={"3"} /></Col>
            <Col><Stall area={"female"} id={"4"} /></Col>
            <Col><Stall area={"female"} id={"5"} /></Col>
            <Col><Stall area={"female"} id={"6"} /></Col>
            <Col><Stall area={"female"} id={"7"} /></Col>
            <Col><Stall area={"female"} id={"8"} /></Col>
            <Col><Stall area={"female"} id={"9"} /></Col>
          </Row>
        </div>
      </div>
      <div className="card" style={style}>
        <div className="card-body">
          <Row>
            <Col><Image src={imgAccessibleToilet} alt="Accessible" /></Col>
            <Col><Stall area={"accessible"} id={"1"} /></Col>
          </Row>
        </div>
      </div>
      <div className="card" style={style}>
        <div className="card-body">
          <Row>
            <Col><Image src={imgBabyFeedingArea} alt="Baby" /></Col>
            <Col><Stall area={"baby"} id={"1"} /></Col>
          </Row>
        </div>
      </div>
      <div className="card" style={style}>
        <div className="card-body">
          <Mqtt />
        </div>
      </div>
    </main>
  );
}