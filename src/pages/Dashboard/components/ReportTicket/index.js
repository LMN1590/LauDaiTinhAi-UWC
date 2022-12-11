import React from "react";
import styles from './ReportTicket.module.css'
function ReportTicket() {
  return <div style={{background:"black",color:"white"}}>
    <table style={{width:"100%"}}>
      <tr>
        <th>Ticket</th>
        <th>Title</th>
        <th>Reports</th>
        <th>Dates</th>
        <th>Status</th>
      </tr>
      <tr>
        <th>1</th>
        <th>xxxxxxxxxxxxxxxxxxxxxxxx</th>
        <th>Comleted</th>
        <th>10/12/2022</th>
        <th>Done</th>
      </tr>
      <tr>
        <th>2</th>
        <th>xxxxxxxxxxxxxxxxxxxxxxxx</th>
        <th>Comleted</th>
        <th>15/12/2022</th>
        <th>Missed</th>
      </tr>
      <tr>
        <th>3</th>
        <th>xxxxxxxxxxxxxxxxxxxxxxxx</th>
        <th>Comleted</th>
        <th>20/12/2022</th>
        <th>Processing</th>
      </tr>
      <tr>
        <th>4</th>
        <th>xxxxxxxxxxxxxxxxxxxxxxxx</th>
        <th>Comleted</th>
        <th>25/12/2022</th>
        <th>Upcoming</th>
      </tr>
      <tr>
        <th>5</th>
        <th>xxxxxxxxxxxxxxxxxxxxxxxx</th>
        <th>Comleted</th>
        <th>30/12/2022</th>
        <th>Upcoming</th>
      </tr>
    </table>
  </div>;
}

export default ReportTicket;
