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
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle } from "@coreui/coreui-pro/dist/js/coreui-utilities";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import Map from "../../assets/img/crossriver41.gif";
import { CardGroup } from "reactstrap";
import Widget04 from "../Widgets/Widget04";
import Chart from "react-apexcharts";
import { AppSwitch } from "@coreui/react";
import { VectorMap } from "react-jvectormap";
import "./style.css";

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

class FamiliesAndLiving extends Component {
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

      series: [
        {
          data: [400, 430, 1100],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 380,
        },
        plotOptions: {
          bar: {
            barHeight: "100%",
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: "bottom",
            },
          },
        },
        colors: ["#33b2df", "#546E7A", "#d4526e"],
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"],
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
          },
          offsetX: 0,
          dropShadow: {
            enabled: true,
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        xaxis: {
          categories: [
            "Under 5 years",
            "18 years and older",
            "65 years and older",
          ],
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        title: {
          text: "Population by Age Range in Cross River State",
          align: "center",
          floating: true,
        },
        tooltip: {
          theme: "dark",
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
        },
      },
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
        <p className="h2">Families and Living Arrangement</p>
        <hr style={{ color: "#000" }} />
        <Row>
          <Col xs="6" sm="6" lg="4">
            <p className="h2" style={{ color: "#33b2df" }}>
              Households
            </p>
            <p>
              <span className="h3">122,802,852</span>
              <small>+/- 137,327</small>
            </p>

            <p>
              <ins>Total households in Cross River State</ins>
            </p>
          </Col>
          <Col xs="6" sm="6" lg="8">
            <VectorMap
              className="jvectormap-container"
              map={"world_mill"}
              backgroundColor="#E4E5E6"
              markerStyle={{
                initial: {
                  fill: "#FFFF",
                  stroke: "#383f47",
                },
              }}
              regionStyle={{
                initial: {
                  fill: "#128da7",
                },
                hover: {
                  fill: "#A0D1DC",
                },
              }}
              ref="map"
              containerStyle={{
                width: "100%",
                height: "100%",
              }}
            />
          </Col>
        </Row>

        {/* <Row>
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
              <CardHeader>Employment Level</CardHeader>
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
                          label: "Employment Levels",
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
        </Row> */}
      </div>
    );
  }
}

export default FamiliesAndLiving;
