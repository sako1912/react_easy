import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined"),
  };

  render() {
    const { data, onRemove, onUpdate } = this.props; //info = []을 넘김
    //const {data} => { info=[{name:a},{mame:b}] }

    console.log("redering List");
    const list = data.map((info) => (
      <PhoneInfo
        onRemove={onRemove}
        onUpdate={onUpdate}
        info={info}
        key={info.id}
      ></PhoneInfo>
    ));
    return <div>{list}</div>;
  }
}

export default PhoneList;
