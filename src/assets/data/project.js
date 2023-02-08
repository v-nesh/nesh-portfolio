import { v4 as uuidv4 } from "uuid";
import Invoice from "../images/invoice.png";
import ShoeCard from "../images/shoeCard.png";
import Bmi from "../images/bmi.png";
import shopZilla from "../images/shopzilla.png";

import PortFolio from "../images/portfolio.png";

const projects = [
  {
    id: uuidv4(),
    name: "ShopZilla E-commerce website",
    desc: "The objective of this project is to develop a general purpose e-commerce store where any kind of product can be bought from the comfort of home through the internet",
    img: shopZilla,
    link: "https://github.com/v-nesh/shop-zilla",
  },
  {
    id: uuidv4(),
    name: "Invoice Generator",
    desc: "An application to generate invoice to accountants and business owners to calculate the taxable amounts, keep track of all transactions, and interact with vendors/customers",
    img: Invoice,
    link: "https://github.com/v-nesh/invoice_generator",
  },
  {
    id: uuidv4(),
    name: "Productcard",
    desc: "Simple product card design to show you products ",
    img: ShoeCard,
    link: "https://github.com/v-nesh/productcard_shoe",
  },
  {
    id: uuidv4(),
    name: "Portfolio",
    desc: "My Portfolio",
    img: PortFolio,
    link: "https://github.com/v-nesh/nesh-portfolio",
  },

  {
    id: uuidv4(),
    name: "BMI Calculator",
    desc: "This calculator provides BMI and the corresponding weight category. Use this calculator for adults, 20 years old and older.",
    img: Bmi,
    link: "https://github.com/v-nesh/bmi_calculator",
  },
];

export default projects;
