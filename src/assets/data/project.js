import { v4 as uuidv4 } from "uuid";
import Invoice from "../images/invoice.png";
import ShoeCard from "../images/shoeCard.png";
import Bmi from "../images/bmi.png";
import StopWatch from "../images/stopwatch.png";
import PortFolio from "../images/portfolio.png";
import Calculator from "../images/calculator.png";

const projects = [
  {
    id: uuidv4(),
    name: "Invoice Generator",
    desc: "An application to generate invoice to accountants and business owners to calculate the taxable amounts, keep track of all transactions, and interact with vendors/customers",
    img: Invoice,
  },
  {
    id: uuidv4(),
    name: "Productcard",
    desc: "Simple product card design to show you products ",
    img: ShoeCard,
  },
  {
    id: uuidv4(),
    name: "Portfolio",
    desc: "My Porfolio...",
    img: PortFolio,
  },
  {
    id: uuidv4(),
    name: "StopWatch",
    desc: "StopWatch app using reactjs",
    img: StopWatch,
  },
  {
    id: uuidv4(),
    name: "BMI Calculator",
    desc: "This calculator provides BMI and the corresponding weight category. Use this calculator for adults, 20 years old and older.",
    img: Bmi,
  },
  {
    id: uuidv4(),
    name: "Calculator",
    desc: "Simple Calculator using HTML, Css and Javscript with the forEach method",
    img: Calculator,
  },
];

export default projects;
