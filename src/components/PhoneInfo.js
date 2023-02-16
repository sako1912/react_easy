import React, { Component, Fragment } from "react";

class PhoneInfo extends Component {
  state = {
    edit: false,
    name: "",
    phone: "",
  };
  handleRemove = () => {
    const { info, onRemove } = this.props; //배열안에 map 존재
    onRemove(info.id);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleToggleEdit = () => {
    const { info, onUpdate } = this.props;
    console.log("handleToggleEdit>>" + info.id);

    //true -> false 시 저장된 값을 parent에 전달
    if (this.state.edit) {
      onUpdate(info.id, { name: this.state.name, phone: this.state.phone });
    } else {
      //false -> true 시
      //기존에 있던(parent) 값을 현재  state에 할당
      this.setState({
        name: info.name,
        phone: info.phone,
      });
    }

    this.setState({
      edit: !this.state.edit,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    //기존 state와 새로운 state가 다를 경우 udpate - 수정모드
    if (this.state !== nextState) {
      return true;
    }

    //기존 props info 와 새로운 info 가 다를 경우에 update 처리
    return this.props.info !== nextProps.info;
  }

  render() {
    const { name, phone } = this.props.info; //배열안에 map 존재
    const { edit } = this.state;

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };

    console.log(name);

    return (
      <div style={style}>
        {edit ? (
          <Fragment>
            <div>
              <input
                name="name"
                placeholder={name}
                onChange={this.handleChange}
                value={this.state.name}
              ></input>
            </div>
            <div>
              <input
                name="phone"
                placeholder={phone}
                onChange={this.handleChange}
                value={this.state.phone}
              ></input>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div>
              <b>{name}</b>
            </div>
            <div> {phone}</div>
          </Fragment>
        )}
        {edit ? (
          <Fragment>
            {/* <button onClick={this.handleToggleEdit}>취소</button> */}
          </Fragment>
        ) : (
          <Fragment>
            <button onClick={this.handleRemove}>삭제</button>
          </Fragment>
        )}

        {edit ? (
          <Fragment>
            <button onClick={this.handleToggleEdit}>적용</button>
          </Fragment>
        ) : (
          <Fragment>
            <button onClick={this.handleToggleEdit}>수정</button>
          </Fragment>
        )}
      </div>
    );
  }
}

export default PhoneInfo;
