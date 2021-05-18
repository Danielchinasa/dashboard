import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import axios from "axios";
// import data from "../Tables/DataTable/_data";

class CitizensList extends Component {
  constructor(props) {
    super(props);
    this.table = this.state && this.state.citizens;
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 3,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: false,
    };

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      citizens: [],
    };
  }

  componentDidMount() {
    const apiUrl = "/citizens";
    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({
          citizens: response.data.users,
        });
        console.log(response.data.users);
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { citizens } = this.state;
    // const calculate_age = () => {
    //   var diff_ms = Date.now() - citizens.dob;
    //   var age_dt = new Date(diff_ms);

    //   return Math.abs(age_dt.getUTCFullYear() - 1970);
    // };
    return (
      <div className="animated fadeIn">
        <div className="animated">
          <Card>
            <CardHeader>
              <i className="icon-menu"></i>List of Citizens{" "}
            </CardHeader>
            <CardBody>
              <BootstrapTable
                data={citizens}
                version="4"
                striped
                hover
                pagination
                search
                options={this.options}
              >
                <TableHeaderColumn dataField="firstName" dataSort>
                  First Name
                </TableHeaderColumn>
                <TableHeaderColumn isKey dataField="lastName">
                  Last Name
                </TableHeaderColumn>
                <TableHeaderColumn dataField="phoneNumber" dataSort>
                  Phone Number
                </TableHeaderColumn>
                <TableHeaderColumn dataField="sex" dataSort>
                  Sex
                </TableHeaderColumn>
                <TableHeaderColumn dataField="dob" dataSort>
                  DOB
                </TableHeaderColumn>
                <TableHeaderColumn dataField="originState" dataSort>
                  State of Origin
                </TableHeaderColumn>
                <TableHeaderColumn dataField="occupation" dataSort>
                  Occupation
                </TableHeaderColumn>
                <TableHeaderColumn dataField="sin" dataSort>
                  State ID Number
                </TableHeaderColumn>
              </BootstrapTable>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default CitizensList;
