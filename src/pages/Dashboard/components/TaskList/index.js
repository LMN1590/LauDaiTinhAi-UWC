import React from "react";
function TaskList() {
  return <div>
    <h1 style={{textAlign:"center"}}>TaskList</h1>
    <div>
      <table>
        <tr>
          <th>
            <table>
              <tr>
                <th><div style={{width: "20px", height: "20px", background:"Red", borderRadius: "50%",}}></div></th>
                <th>Missed</th>
              </tr>
            </table>
          </th>
          <th>
            <table>
              <tr>
              <th><div style={{width: "20px", height: "20px", background:"Green", borderRadius: "50%",}}></div></th>
              <th>Done</th>
              </tr>
            </table>
          </th>
          <th>
            <table>
              <tr>
                <th><div style={{width: "20px", height: "20px", background:"Aqua", borderRadius: "50%",}}></div></th>
                <th>Upcoming</th>
              </tr>
            </table>
          </th>
          <th>
            <table>
              <tr>
                <th><div style={{width: "20px", height: "20px", background:"Yellow", borderRadius: "50%",}}></div></th>
                <th>Processing</th>
              </tr>
            </table>
          </th>
        </tr>
      </table>

    </div>
    
  </div>;
}

export default TaskList;
