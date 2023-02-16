import React, { Component } from "react";

class PhoneForm extends Component {
  //1. input 태그 안에서 ref를 불러와서 넣음 - ref={(ref) => (this.input = ref)
  //input = null;
  //2. 여기서 ref 직접생성
  input = React.createRef();
  state = {
    name: "",
    phone: "",
  };

  handleChange = (e) => {
    this.setState({
      // name:e.target.value
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    //submit 시 refresh 방지
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phone: "",
    });

    //ref dom에 접근 - sumit 후 이름에 forcus
    //1. input 안에서 함수로 사용 ref={(ref) => (this.input = ref)
    //this.input.focus();
    //2. input ref={this.input} 사용시
    this.input.current.focus();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
          ref={this.input}
        ></input>
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.phone}
        ></input>
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
