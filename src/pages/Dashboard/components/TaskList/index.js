import React from "react";
import styles from "./Tasklist.module.css";
function TaskList() {
  return (
    <div style={{ border: "1px solid", borderRadius: "5%" }}>
      <h1 style={{ textAlign: "center" }}>TASK LIST</h1>
      <div>
        <table>
          <tr>
            <th>
              <table>
                <tr>
                  <th>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "Red",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </th>
                  <th style={{ paddingRight: "5vh" }}>Missed</th>
                </tr>
              </table>
            </th>
            <th>
              <table>
                <tr>
                  <th>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "Green",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </th>
                  <th style={{ paddingRight: "5vh" }}>Done</th>
                </tr>
              </table>
            </th>
            <th>
              <table>
                <tr>
                  <th>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "Aqua",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </th>
                  <th style={{ paddingRight: "5vh" }}>Upcoming</th>
                </tr>
              </table>
            </th>
            <th>
              <table>
                <tr>
                  <th>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "Yellow",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </th>
                  <th>Processing</th>
                </tr>
              </table>
            </th>
          </tr>
        </table>
      </div>

      <div className={styles.task} style={{ background: "green" }}>
        Finish Date: 09/12/2022<br></br>
        Description: D???n d???p r??c th???i ??? tr?????ng ?????i H???c B??ch Khoa
      </div>
      <br></br>
      <div className={styles.task} style={{ background: "red" }}>
        Finish Date: 10/12/2022<br></br>
        Description: D???n d???p r??c th???i ??? ph?????ng B??nh H??ng H??a A
      </div>
      <br></br>
      <div className={styles.task} style={{ background: "yellow" }}>
        Finish Date: 20/12/2022<br></br>
        Description: X??? l?? r??c th???i nh???a th??nh ph??? Th??? ?????c
      </div>
      <br></br>
      <div className={styles.task} style={{ background: "aqua" }}>
        Finish Date: 30/12/2022<br></br>
        Description: V???n chuy???n r??c th???i v??? c??c ch??? thu gom
      </div>
    </div>
  );
}

export default TaskList;
