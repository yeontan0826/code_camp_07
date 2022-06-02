import { Component } from "react";

class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  // 1번 방법 (this를 binding)
  onClickCounter() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
    console.log(this.state.count);
  }

  // 2번 방법 (화살표 함수)
  // onClickCounter = () => {
  //   this.setState((prev) => ({
  //     count: prev.count + 1,
  //   }));
  //   console.log(this.state.count);
  // };

  render() {
    return (
      <div>
        <div>현재 카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운트 증가</button> {/* 1번 방법 (this를 binding) */}
        {/* <button onClick={this.onClickCounter}>카운트 증가</button> */} {/* 2번 방법 (화살표 함수) */}
      </div>
    );
  }
}

export default ClassCounterPage;
