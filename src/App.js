import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import students from "./students.json";
import "./App.css";

class App extends Component {
  state = {
    students: students,
    clickedCards: []
  };

  cardClick = id => {
    // console.log('starting with:',this.state.students)
    const newStudents = [];
    for (let idx=0; idx<12; idx++) {
      newStudents.push(this.state.students.splice
        (Math.floor
          (Math.random()*this.state.students.length),1
        )[0]
      )
      // console.log(newStudents)
    }
    this.setState({ students: newStudents });
  };

  render() {
    return (
      <Wrapper>
        <Title>Students List</Title>
        {this.state.students.map(student => (
          <FriendCard
            cardClick={this.cardClick}
            id={student.id}
            key={student.id}
            image={student.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
