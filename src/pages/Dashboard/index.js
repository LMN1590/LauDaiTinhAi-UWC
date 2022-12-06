import React from "react";
import { Col, Row } from "react-bootstrap";

import ButtonsGroup from "./components/ButtonsGroup";
import Map from "./components/Map";
import TaskList from "./components/TaskList";
import ReportTicket from "./components/ReportTicket";
import Chart from "./components/Chart";

function Dashboard() {
  return (
    <div>
      <Row>
        <ButtonsGroup></ButtonsGroup>
      </Row>
      <Row>
        <Col lg="7" md="7">
          <Map></Map>
        </Col>
        <Col lg="5" md="5">
          <TaskList></TaskList>
        </Col>
      </Row>
      <Row>
        <Col lg="6" md="6">
          <ReportTicket></ReportTicket>
        </Col>
        <Col lg="6" md="6">
          <Chart></Chart>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
