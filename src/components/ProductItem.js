import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  
  onDelete = (id) => {
    if(confirm('Bạn có chắc chắn muốn xóa')){ //eslint-disable-line
        return this.props.onDelete(id);
    }
  }


  render() {
    // console.log(this.props.);
    // console.log(this.props.price);
    console.log(this.props.id);
    const {id,name,price,status,index} = this.props;
    let statusName = status ? 'Còn hàng' : 'Hết hàng';
    let statusClass = status ? 'success' : 'warning';
  
    
    return (
        <tr>
          <td>{index+1}</td>
          <td>{id}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <button type="button" className={`btn btn-${statusClass}`}>{statusName}</button>
          </td>
          <td>
            <Link to={`product/${id}/edit`} className="btn btn-warning mx-10">
              Sửa
            </Link>
            <button onClick={() => this.onDelete(id)} type="button" className="btn btn-danger">
              Xóa
            </button>
          </td>
        </tr>
    );
  }
}

export default ProductItem;
