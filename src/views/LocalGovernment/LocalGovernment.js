import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  ButtonDropdown,
  ButtonGroup,
  Button,
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
import ReactApexChart from "react-apexcharts";

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
  labels: ["High School", "Graduate", "Higher LocalGovernment"],
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

class LocalGovernment extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen2: new Array(19).fill(false),
      dropdownOpen: false,
      radioSelected: 2,
      time: Date.now(),
      todos: [],
      marritalStatus: [],
      educationLevel: [],
      occupations: [],
      overView: [],

      series: [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Without Health Insurance Coverage in Cross River",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "",
          },
        },
        yaxis: {
          title: {
            text: "",
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },

      series2: [
        {
          data: [400, 430, 509, 743, 200, 473],
        },
      ],
      options2: {
        chart: {
          type: "bar",
          height: 280,
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
        colors: [
          "#33b2df",
          "#546E7A",
          "#546E7A",
          "#546E7A",
          "#546E7A",
          "#546E7A",
        ],
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
            "Hearing difficulty",
            "Vision difficulty",
            "cognitive difficulty",
            "Female",
            "Female",
            "Female",
          ],
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        title: {
          text: "Education Attainment in Cross River State",
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

      res: "",
      confirmedCases: 0,
      targetCountry: "",
      deathNumber: 0,
      targetProvince: "",
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen2.map((element, index) => {
      return index === i ? !element : false;
    });
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      dropdownOpen2: newArray,
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

    // axios
    //   .all([
    //     axios.get("/citizens/populationOverview"),
    //     axios.get("/citizens/maritalStatus"),
    //     axios.get("/citizens/educationLevel"),
    //     axios.get("/citizens/occupations"),
    //   ])
    //   .then(
    //     axios.spread((obj1, obj2, obj3, obj4) => {
    //       // Both requests are now complete
    //       this.setState({
    //         todos: obj1.data,
    //         marritalStatus: obj2.data,
    //         educationLevel: obj3.data,
    //         occupations: obj4.data,
    //       });
    //     })
    //   )
    //   .catch((error) => console.log(error));
    // this.interval = setInterval(
    //   () => this.setState({ time: Date.now() }),
    //   1000
    // );

    this.handleFetch("1");
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleChange = (target) => {
    this.handleFetch(target);
  };

  handleFetch = (target) => {
    axios
      .all([
        axios.get("/citizens/lga_percentages/" + target),
        axios.get("/citizens/educationLevel"),
        axios.get("/citizens/populationOverview"),
      ])
      .then(
        axios.spread((obj1, obj2, obj3) => {
          // Both requests are now complete
          this.setState({
            todos: obj1.data,
            educationLevel: obj2.data,
            overView: obj3.data,
          });
        })
      )
      .catch((error) => console.log(error));
    // this.interval = setInterval(
    //   () => this.setState({ time: Date.now() }),
    //   1000
    // );
    // fetch(
    //   "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=" +
    //     target,
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-key":
    //         "2f66132eeemsh16e2dd05b2ecd59p1ab765jsnc1f549cafc64",
    //       "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({
    //       res: data.data.lastChecked,
    //       confirmedCases: data.data.covid19Stats[0].confirmed,
    //       targetCountry: data.data.covid19Stats[0].country,
    //       deathNumber: data.data.covid19Stats[0].deaths,
    //       targetProvince: data.data.covid19Stats[0].province,
    //       totalCitizens: "37",
    //       veterans: "90",
    //       percentIndigenes: "87",
    //     });
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  render() {
    const { todos, marritalStatus, educationLevel, occupations, overView } =
      this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="6">
            <p className="h1">
              Local Government:{" "}
              <span style={{ color: "#33b2df" }}>{todos.LgaName}</span>
            </p>
          </Col>
          <Col xs="12" sm="12" lg="6">
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("1")}
            >
              Abi
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("2")}
            >
              Akamkpa
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("3")}
            >
              Akpabuyo
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("4")}
            >
              Bekwarra
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("5")}
            >
              Bakassi
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("6")}
            >
              Biase
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("7")}
            >
              Boki
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("8")}
            >
              Calabar Municipal
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("9")}
            >
              Calabar South
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("10")}
            >
              Etung
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("11")}
            >
              Ikom
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("12")}
            >
              Obanliku
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("13")}
            >
              Obubra
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("14")}
            >
              Odukpani
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("15")}
            >
              Ogoja
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("16")}
            >
              Yakuur
            </Button>
            <Button
              className="m-1"
              color="primary"
              onClick={() => this.handleChange("17")}
            >
              Yala
            </Button>
            {/* <hr />
            Last Updated: {this.state.res}
            <br />
            Confirmed Cases: {this.state.confirmedCases}
            <br />
            Country: {this.state.targetCountry}
            <br />
            Number of Death: {this.state.deathNumber}
            <br />
            Province: {this.state.targetProvince} */}
            {/* <div style={{ paddingTop: "10px" }}>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen2[0]}
                toggle={() => {
                  this.toggle(0);
                }}
              >
                <DropdownToggle caret color="primary">
                  Filter By Local Government Area
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Abi</DropdownItem>
                  <DropdownItem>Akamkpa</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div> */}
          </Col>
        </Row>

        <hr style={{ color: "#000" }} />
        <CardGroup className="mb-4">
          <Widget04
            icon="icon-people"
            color="info"
            header={todos.totalCitizens}
            value="25"
          >
            POPULATION
          </Widget04>
          <Widget04
            icon="icon-home"
            color="success"
            header="₦10,712"
            value="25"
          >
            MEDIAN INCOME
          </Widget04>
          <Widget04
            icon="icon-wallet"
            color="warning"
            header="12.3%"
            value="25"
          >
            POVERTY RATE
          </Widget04>
          <Widget04 icon="icon-badge" color="primary" header="28.9%" value="25">
            BACHELOR'S DEGREE OR HIGHER
          </Widget04>
        </CardGroup>
        <Row>
          <Col xs="6" sm="6" lg="4">
            <p className="h2" style={{ color: "#33b2df" }}>
              Veterans
            </p>
            <p className="h3">{todos.veterans}%</p>
            <p>
              <ins>Veterans in Cross River States</ins>
            </p>
          </Col>
          <Col xs="6" sm="6" lg="8">
            <Chart
              options={{
                chart: {
                  type: "bar",
                  height: 280,
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
                colors: [
                  "#33b2df",
                  "#546E7A",
                  "#546E7A",
                  "#546E7A",
                  "#546E7A",
                  "#546E7A",
                ],
                dataLabels: {
                  enabled: true,
                  textAnchor: "start",
                  style: {
                    colors: ["#fff"],
                  },
                  formatter: function (val, opt) {
                    return (
                      opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                    );
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
                  categories: ["Male", "Female"],
                },
                yaxis: {
                  labels: {
                    show: false,
                  },
                },
                title: {
                  text:
                    "Veterans by Sex in " + todos.LgaName + " Local Government",
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
              }}
              series={[
                {
                  data: [todos.maleVeterans, todos.femaleVeterans],
                },
              ]}
              type="bar"
              width="800"
              height="150"
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs="6" sm="6" lg="4">
            <p className="h2" style={{ color: "#33b2df" }}>
              Age and Sex
            </p>
            <p>
              <span className="h3">38</span>
              <small>+/- 0.1</small>
            </p>

            <p>
              <ins>Median age in {todos.LgaName} Local Government</ins>
            </p>
          </Col>
          <Col xs="6" sm="6" lg="8">
            <Chart
              options={{
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
                colors: ["#33b2df", "#546E7A"],
                dataLabels: {
                  enabled: true,
                  textAnchor: "start",
                  style: {
                    colors: ["#fff"],
                  },
                  formatter: function (val, opt) {
                    return (
                      opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                    );
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
                  categories: ["Total male", "Total Female"],
                },
                yaxis: {
                  labels: {
                    show: false,
                  },
                },
                title: {
                  text:
                    "Population by Sex in " +
                    todos.LgaName +
                    " Local Government",
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
              }}
              series={[
                {
                  data: [overView.totalMales, overView.totalFemales],
                },
              ]}
              type="bar"
              width="800"
              height="150"
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs="6" sm="6" lg="4">
            <p className="h2" style={{ color: "#33b2df" }}>
              Foreign Born
            </p>
            <p>
              <span className="h3">{todos.percentIndigenes}</span>
              <small>+/- 0.1</small>
            </p>

            <p>
              <ins>Foreign born in {todos.LgaName} Local Government</ins>
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
        <hr />
        <Row>
          <Col xs="6" sm="6" lg="4">
            <p className="h2" style={{ color: "#33b2df" }}>
              Health Insurance
            </p>
            <p>
              <span className="h3">{todos.percentWithHealthInsurance}</span>
              <small>+/- 0.1</small>
            </p>

            <p>
              <ins>
                Without Health Insurance Coverage in {todos.LgaName} Local
                Government
              </ins>
            </p>
          </Col>
          <Col xs="6" sm="6" lg="8">
            {/* <ReactApexChart
              options={{}}
              series={[44, 55]}
              // type="line"
              type="donut"
              // height={350}
              width="380"
            /> */}
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
        <hr />
        <Row>
          <Col xs="6" sm="6" lg="4">
            <p className="h2" style={{ color: "#33b2df" }}>
              Disability
            </p>
            <p className="h3">{todos.percentWithDisability}%</p>
            <p>
              <ins>Disabled population in {todos.LgaName} Local Government</ins>
            </p>
          </Col>
          <Col xs="6" sm="6" lg="8">
            <ReactApexChart
              options={{}}
              series={[overView.totalEnrolled]}
              // type="line"
              type="donut"
              // height={350}
              width="380"
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs="6" sm="6" lg="4">
            <p className="h2" style={{ color: "#33b2df" }}>
              Business Count
            </p>
            <p>
              <span className="h3">{todos.percentBusinessOwners}</span>
              <small>+/- 1</small>
            </p>

            <p>
              <ins>
                Total employer establishments in {todos.LgaName} Local
                Government
              </ins>
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
        <hr />
        <Row>
          <Col xs="6" sm="6" lg="4">
            <p className="h2" style={{ color: "#33b2df" }}>
              Educational Attainment
            </p>
            <p className="h3">{todos.percentAboveHighSchool}%</p>
            <p>
              <ins>
                High school graduate or higher in {todos.LgaName} Local
                Government
              </ins>
            </p>
          </Col>
          <Col xs="6" sm="6" lg="8">
            <Chart
              options={{
                chart: {
                  type: "bar",
                  height: 280,
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
                colors: ["#33b2df", "#546E7A", "#FFA500", "#FF6347"],
                dataLabels: {
                  enabled: true,
                  textAnchor: "start",
                  style: {
                    colors: ["#fff"],
                  },
                  formatter: function (val, opt) {
                    return (
                      opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                    );
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
                    "Graduates",
                    "Higer Education",
                    "HighSchool",
                    "Below Highschool",
                  ],
                },
                yaxis: {
                  labels: {
                    show: false,
                  },
                },
                title: {
                  text:
                    "Education Attainment in " +
                    todos.LgaName +
                    " Local Government",
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
              }}
              series={[
                {
                  data: [
                    educationLevel.graduates,
                    educationLevel.higerEducation,
                    educationLevel.highschool,
                    educationLevel.belowHighSchool,
                  ],
                },
              ]}
              type="bar"
              width="800"
              height="250"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default LocalGovernment;
