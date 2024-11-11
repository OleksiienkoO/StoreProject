import React from "react";
import { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";

import { FaPencil } from "react-icons/fa6";
import { PiArrowsDownUpThin } from "react-icons/pi";
import "./ProductsList.css";
class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }
  async getProducts() {
    const response = await fetch(
      "https://6730ed9f7aaf2a9aff0f5b89.mockapi.io/householdAppliances"
    );
    const data = await response.json();

    this.setState({
      products: data,
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              <div className="header-content">
                ID <PiArrowsDownUpThin className="icon" />
              </div>{" "}
            </th>{" "}
            <th>
              <div className="header-content">
                Category <PiArrowsDownUpThin className="icon" />
              </div>{" "}
            </th>{" "}
            <th>
              <div className="header-content">
                Name <PiArrowsDownUpThin className="icon" />
              </div>{" "}
            </th>{" "}
            <th>
              <div className="header-content">
                Quantity <PiArrowsDownUpThin className="icon" />
              </div>{" "}
            </th>{" "}
            <th>
              <div className="header-content">
                Price(₴) <PiArrowsDownUpThin className="icon" />
              </div>{" "}
            </th>{" "}
            <th>
              <div className="header-content"> </div>{" "}
            </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {this.state.products.map((product) => (
            <tr key={product.id}>
              <td> {product.id} </td> <td> {product.category} </td>{" "}
              <td> {product.name} </td> <td> {product.quantity} </td>{" "}
              <td> {product.price} </td>{" "}
              <td>
                <FaPencil color="black" /> <FaTrashAlt color="black" />{" "}
              </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </table>
    );
  }
}

export default ProductTable;
