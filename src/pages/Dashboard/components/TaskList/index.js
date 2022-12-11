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
        Description: Dọn dẹp rác thải ở trường Đại Học Bách Khoa
      </div>
      <br></br>
      <div className={styles.task} style={{ background: "red" }}>
        Finish Date: 10/12/2022<br></br>
        Description: Dọn dẹp rác thải ở phường Bình Hưng Hòa A
      </div>
      <br></br>
      <div className={styles.task} style={{ background: "yellow" }}>
        Finish Date: 20/12/2022<br></br>
        Description: Xử lý rác thải nhựa thành phố Thủ Đức
      </div>
      <br></br>
      <div className={styles.task} style={{ background: "aqua" }}>
        Finish Date: 30/12/2022<br></br>
        Description: Vận chuyển rác thải về các chỗ thu gom
      </div>
    </div>
  );
}

export default TaskList;
