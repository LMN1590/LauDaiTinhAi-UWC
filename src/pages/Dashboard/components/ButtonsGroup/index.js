import React from "react";
import {
    MDBBtn,
    MDBCol,
    MDBIcon}
    from "mdb-react-ui-kit";

function ButtonsGroup() {
    return (
        <div className="d-flex align-items-center justify-content-center px-5 my-5" style={{ height: "100px" }}>
            <MDBCol className="d-flex justify-content-center mx-5">
                <MDBBtn className="btn-block p-4" color="success" type="button">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="mx-3"><MDBIcon fas icon="file-alt" color="white" size="4x"/></div>
                        <div><h5 className="text-white m-0">Task assignment</h5></div>
                    </div>
                </MDBBtn>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center mx-5">
                <MDBBtn className="btn-block p-4" color="info" type="button">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="mx-3"><MDBIcon fas icon="comment" color="white" size="4x"/></div>
                        <div><h5 className="text-white m-0">Message</h5></div>
                    </div>
                </MDBBtn>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center mx-5">
                <MDBBtn className="btn-block p-4" color="warning" type="button">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="mx-3"><MDBIcon fas icon="tasks" color="white" size="4x"/></div>
                        <div><h5 className="text-white m-0">Create new task</h5></div>
                    </div>
                </MDBBtn>
            </MDBCol>
        </div>
    );
}

export default ButtonsGroup;
