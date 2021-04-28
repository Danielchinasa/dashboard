import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle } from "@coreui/coreui-pro/dist/js/coreui-utilities";
import { Pie } from "react-chartjs-2";
import axios from "axios";

const brandPrimary = getStyle("--primary");
const brandInfo = getStyle("--info");

// Card Chart 1
const cardChartData1 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: brandPrimary,
      borderColor: "rgba(255,255,255,.55)",
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent",
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent",
        },
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      },
    ],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 2
const cardChartData2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: brandInfo,
      borderColor: "rgba(255,255,255,.55)",
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent",
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent",
        },
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "rgba(255,255,255,.55)",
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.3)",
      borderColor: "transparent",
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const bar = {
  labels: ["High School", "Graduate", "Higher Education"],
  datasets: [
    {
      label: "Educational Levels",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [195, 349, 490],
    },
  ],
};
const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      time: Date.now(),
      todos: [],
      marritalStatus: [],
      educationLevel: [],
      occupations: [],
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  componentDidMount() {
    // const apiUrl = "/citizens/populationOverview";
    // axios
    //   .get(apiUrl)
    //   .then((response) => {
    //     this.setState({
    //       todos: response.data,
    //     });
    //     console.log(response.data);
    //   })
    //   .catch((error) => console.log(error));

    axios
      .all([
        axios.get("/citizens/populationOverview"),
        axios.get("/citizens/maritalStatus"),
        axios.get("/citizens/educationLevel"),
        axios.get("/citizens/occupations"),
      ])
      .then(
        axios.spread((obj1, obj2, obj3, obj4) => {
          // Both requests are now complete
          this.setState({
            todos: obj1.data,
            marritalStatus: obj2.data,
            educationLevel: obj3.data,
            occupations: obj4.data,
          });
        })
      )
      .catch((error) => console.log(error));
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { todos, marritalStatus, educationLevel, occupations } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success">
              <CardBody className="pb-0">
                <div className="text-value">{todos.totalEnrolled}</div>
                <div>Total Enrolled Residents</div>
                <div
                  className="chart-wrapper mt-3"
                  style={{ height: "70px" }}
                ></div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div className="text-value">{todos.totalIndigenes}</div>
                <div>Total Number of Indigenes</div>
                <div
                  className="chart-wrapper mt-3"
                  style={{ height: "70px" }}
                ></div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div className="text-value">{todos.totalNonIndigenes}</div>
                <div>Total Number of Non- Indegenes</div>
              </CardBody>
              <div
                className="chart-wrapper mt-3"
                style={{ height: "70px" }}
              ></div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-secondary">
              <CardBody className="pb-0">
                <div className="text-value">{todos.withDisability}</div>
                <div>Citizens with Disabilities</div>
              </CardBody>
              <div
                className="chart-wrapper mt-3 mx-3"
                style={{ height: "70px" }}
              ></div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="6" lg="6">
            <Card>
              <CardHeader>Gender</CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Pie
                    data={{
                      labels: ["Female", "Male"],
                      datasets: [
                        {
                          data: [todos.totalFemales, todos.totalMales],
                          backgroundColor: ["#FF6384", "#36A2EB"],
                          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
                        },
                      ],
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="6" lg="6">
            <Card>
              <CardHeader>Educational Level</CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar
                    data={{
                      labels: [
                        "Below High School",
                        "High School",
                        "Graduate",
                        "Higher Education",
                      ],
                      datasets: [
                        {
                          label: "Educational Levels",
                          backgroundColor: "rgba(255,99,132,0.2)",
                          borderColor: "rgba(255,99,132,1)",
                          borderWidth: 1,
                          hoverBackgroundColor: "rgba(255,99,132,0.4)",
                          hoverBorderColor: "rgba(255,99,132,1)",
                          data: [
                            educationLevel.belowHighSchool,
                            educationLevel.highschool,
                            educationLevel.graduates,
                            educationLevel.higerEducation,
                          ],
                        },
                      ],
                    }}
                    options={options}
                    height="285"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="6" lg="6">
            <Card>
              <CardHeader>Marrital Status</CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Pie
                    data={{
                      labels: ["Married", "Single", "Separated", "Divorced"],
                      datasets: [
                        {
                          data: [
                            marritalStatus.married,
                            marritalStatus.singles,
                            marritalStatus.separated,
                            marritalStatus.divorced,
                          ],
                          backgroundColor: [
                            "#41B883",
                            "#FF6384",
                            "#36A2EB",
                            "#DD1B16",
                          ],
                          hoverBackgroundColor: [
                            "#41B883",
                            "#FF6384",
                            "#36A2EB",
                            "#DD1B16",
                          ],
                        },
                      ],
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="6" lg="6">
            <Card>
              <CardHeader>Educational Level</CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar
                    data={{
                      labels: [
                        "Employed",
                        "Self-Employed",
                        "Business Owner",
                        "Student",
                        "Unemployed",
                      ],
                      datasets: [
                        {
                          label: "Educational Levels",
                          backgroundColor: "rgba(255,99,132,0.2)",
                          borderColor: "rgba(255,99,132,1)",
                          borderWidth: 1,
                          hoverBackgroundColor: "rgba(255,99,132,0.4)",
                          hoverBorderColor: "rgba(255,99,132,1)",
                          data: [
                            occupations.employed,
                            occupations.selfEmployed,
                            occupations.businessOwners,
                            occupations.students,
                            occupations.unemployed,
                          ],
                        },
                      ],
                    }}
                    options={options}
                    height="285"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
