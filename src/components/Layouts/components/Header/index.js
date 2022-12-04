import React from "react";
import {
  MDBNavbar,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge,
} from "mdb-react-ui-kit";

const userName = "Lee Min Nghia";

function Header() {
  return (
    <MDBNavbar
      expand="sm"
      light
      bgColor="light"
      style={{
        width: "100vw",
        height: "50px",
        border: "1px solid gray",
      }}
    >
      <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
        <MDBNavbarItem style={{ margin: "0px 10px" }}>
          <MDBNavbarLink href="#">
            <MDBIcon fas icon="globe">
              EN
            </MDBIcon>
          </MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem style={{ margin: "0px 10px" }}>
          <MDBNavbarLink href="#">
            <MDBBadge rounded-pill notification color="danger">
              !
            </MDBBadge>
            <span>
              <MDBIcon fas icon="bell"></MDBIcon>
            </span>
          </MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem style={{ margin: "0px 10px" }}>
          <MDBNavbarLink>Hello, {userName}</MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem style={{ margin: "0px 10px" }}>
          <MDBNavbarLink href="#">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/047.webp"
              className="img-fluid rounded"
              alt=""
              style={{ width: "38px", height: "38px" }}
            />
          </MDBNavbarLink>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}

export default Header;
