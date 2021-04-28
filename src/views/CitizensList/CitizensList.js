import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";

class CitizensList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      todos: [],
      femaleCount: null,
      maleCount: null,
    };
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="animated">
          <Card>
            <CardHeader>
              <i className="icon-menu"></i>List of Citizens{" "}
            </CardHeader>
            <CardBody>
              <BootstrapTable
                data={this.table}
                version="4"
                striped
                hover
                pagination
                search
                options={this.options}
              >
                <TableHeaderColumn dataField="name" dataSort>
                  Name
                </TableHeaderColumn>
                <TableHeaderColumn isKey dataField="email">
                  Email
                </TableHeaderColumn>
                <TableHeaderColumn dataField="mobile" dataSort>
                  Mobile
                </TableHeaderColumn>
                <TableHeaderColumn dataField="employment" dataSort>
                  Employemt Status
                </TableHeaderColumn>
                <TableHeaderColumn dataField="age" dataSort>
                  DOB
                </TableHeaderColumn>
                <TableHeaderColumn dataField="marital" dataSort>
                  Marital Status
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
