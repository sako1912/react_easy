import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneList from "./components/PhoneList";

class App extends Component {
  id = 3;
  state = {
    keyword: "",
    info: [
      {
        id: 0,
        name: "홍길동",
        phone: "010-01",
      },
      {
        id: 1,
        name: "철수",
        phone: "010-02",
      },
      {
        id: 2,
        name: "영희",
        phone: "010-03",
      },
    ],
  };

  //목록 생성
  handleCreate = (data) => {
    const { info } = this.state;

    this.setState({
      info: info.concat(Object.assign({}, data, { id: this.id++ })), //불변성을 위해 새로 객채룰 만들에서 배열에 넣기 - 기존 배열 수정하지않고 새로운 배열을 만들어서 넣기
    });
  };

  //목록제거
  handleRemove = (id) => {
    //비구조화
    const { info } = this.state;
    this.setState({
      info: info.filter((i) => i.id !== id),
    });
  };

  //데이터 수정
  handleUpdate = (id, data) => {
    console.log("handleupdate");
    const { info } = this.state;
    this.setState({
      info: info.map((i) => {
        if (i.id === id) {
          return { id, ...data };
        }
        return i;
      }),
    });
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <input
          name="keyword"
          placeholder="검색..."
          value={this.state.keyword}
          onChange={this.handleChange}
        ></input>
        <PhoneList
          data={this.state.info.filter(
            (i) =>
              i.name.indexOf(this.state.keyword) > -1 ||
              i.phone.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        ></PhoneList>
      </div>
    );
  }
}

export default App;
