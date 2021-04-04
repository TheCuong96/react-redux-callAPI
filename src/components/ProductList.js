import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to='/product/add' type="button" className="btn btn-info my-10">
              {/* <Link to="">Thêm sản phẩm</Link> */}
              Thêm sản phẩm
            </Link>

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Danh sách sản phẩm</h3>
              </div>
              <div className="panel-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã</th>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Trạng thái</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                     */}
                     {this.props.children}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
