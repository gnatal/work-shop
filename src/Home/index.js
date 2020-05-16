import React, { Component, Fragment } from "react";
import { Board, BoardCell, Mark, DefaultInput } from "./style";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      nome: "",
      idade: 0,
    };
  }

  updateBlock = (index) => {
    let board = this.state.board;

    switch (board[index]) {
      case "x":
        board[index] = "O";
        break;
      case "O":
        board[index] = "x";
        break;
      default:
        board[index] = "x";
    }

    this.setState({ board: board });
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    const { nome, idade, board } = this.state;
    console.log("nome:", nome);
    console.log("idade:", idade);
    console.log("board:", board);
  };

  render() {
    return (
      <Fragment>
        <p style={{ color: this.props.color }}>
          i'm barbie girl in barbie world
        </p>
        <Board>
          {this.state.board.map((value, index) => (
            <BoardCell key={index} onClick={(e) => this.updateBlock(index)}>
              <Mark>{value}</Mark>
            </BoardCell>
          ))}
        </Board>

        <Fragment>
          <DefaultInput
            placeholder="nome"
            name="nome"
            onChange={this.handleInput}
          ></DefaultInput>
          <input
            placeholder="idade"
            name="idade"
            onChange={this.handleInput}
          ></input>
        </Fragment>
      </Fragment>
    );
  }
}
