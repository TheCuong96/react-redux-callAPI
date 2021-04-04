import React, { Component } from "react";
import { Link } from "react-router-dom";
import CallApiURL from '../util/CallApiURL';

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      txtName:'',
      txtPrice:'',
      checkBoxStatus:'',

    }
  }
  
  componentWillMount() {
    // var match = this.props.match;
    // console.log(match.id);
    // console.log(this.props.match.params.id);
  }
  
  onChange = (e) => {
    let name = e.target.name;
    // let value = e.target.value;
    let value = e.target.value === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]:value
    });
    console.log(e.target.type);
    console.log(e.target.checked);
    console.log(name,value);
  }
  
  onSave = (e) => {
    // e.preventDefault();
    CallApiURL('POST','products',{
      name:this.state.txtName,
      price: this.state.txtPrice,
      status:this.state.checkBoxStatus
    }).then((res) => {
      console.log(res);
      this.props.history.goBack();  // trở về trang trước
      // this.props.history.push('/'); // trở về trang home tùy theo cách mình set url
    })
  }
 
  render() {
    console.log(this.props.history);
    let {txtName,txtPrice,checkBoxStatus} = this.state;
    return (
        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form>
                        <div className="form-group">
                          <label htmlFor>Tên sản phẩm: </label>
                          <input
                            type="text"
                            name="txtName"
                            // value={txtName}
                            onChange={this.onChange}
                            // id
                            className="form-control"
                            // placeholder
                            // aria-describedby="helpId"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor>Giá: </label>
                          <input
                            type="text"
                            name="txtPrice"
                            // value={txtPrice}
                            onChange={this.onChange}
                            // id
                            className="form-control"
                            // placeholder
                            // aria-describedby="helpId"
                          />
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="checkBoxStatus"
                              // value={checkBoxStatus}
                              onChange={this.onChange}
                              // id
                              // defaultValue="checkedValue"
                              // defaultChecked
                            />
                            Còn hàng
                          </label>
                        </div>
                        <Link to="/product-list" className="btn btn-danger">Trở lại</Link>
                        <button type="reset" onClick={this.onSave}  className="btn btn-primary mx-10">
                           Lưu lại
                        </button>
                          {/* <input type="reset" onClick={this.onSave} value="Lưu lại" className="btn btn-primary"/> */}
                      </form>
                </div>
            </div>
            
        </div>
    );
  }
}

export default ProductActionPage;
