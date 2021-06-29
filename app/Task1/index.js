import React, { Component } from "react";

export default class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {id: 5, name: "Spike", note: "dog"},
        {id: 10, name: "Tom", note: "cat"},
        {id: 44, name: "Tyke ", note: "puppy"},
        {id: 29, name: "Jerry", note: "mouse"},
      ],
      list1: []
    };
  }

 componentDidMount() {
    this.loadData()
 }

  loadData() {
    fetch("/list")
    .then(res => res.json())
    .then((response) => this.setState({ list1: response }))
    .catch((response) => this.setState({ list1: [] }))
  }

  render() {
     if (!this.state.list1) {
       return <div>Loading...</div>;
     }
const {list} = this.state
    return (
      <div>
         {list.map(el => <div key={el.id}>{el.name} {el.note}</div>)}
      </div>
    );
  }
}
