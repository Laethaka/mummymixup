import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import students from "./students.json";
import "./App.css";

class App extends Component {
  state = {
    students: students,
    clickedCards: [],
    score: 0,
    highscore: 0
  };

  cardClick = id => {
    const newStudents = [];
    if (this.state.clickedCards.includes(id)) {//GAME LOST
      this.setState({ score: 0, clickedCards: [] })
      alert ('Duplicate clicked!')
    } else {//GAME CONTINUES
        this.state.clickedCards.push(id);
        this.state.score++;
      if (this.state.score > this.state.highscore) {//REWRITING HIGHSCORE
        this.setState({ 
          highscore: this.state.score,
        });
      }
    }

    for (let idx=0; idx<12; idx++) { //RANDOMLY LOOPING THROUGH STUDENTS ARRAY AND MIGRATING EACH CHOSEN INDEX
      newStudents.push(this.state.students.splice
        (Math.floor
          (Math.random()*this.state.students.length),1
        )[0]
      )
    }
    this.setState({ students: newStudents });
  };

  render() {
    return (
      <Wrapper>
        <Title
          title= 'Welcome to Mummy Mixup!'
          instructions="Click on an artpiece to retrieve ancient knowledge, but don't click any duplicates!"
          score={this.state.score}
          highscore={this.state.highscore}
        />
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
