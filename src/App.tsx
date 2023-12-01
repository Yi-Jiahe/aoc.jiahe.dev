import React from 'react';
import './App.css';
import { useState } from 'react';
import init, { day_1_get_sum_of_calibration_values_in_document, day_1_get_sum_of_calibration_values_in_document_part_2 } from "aoc-restore-snow-operations";

function App() {
  const [answer, setAnswer] = useState("");

  const raiseError = () => {
    alert(`Unable to generate solution.

    Please ensure your input is valid. 
                    
    If the problem persists, please submit a bug report with the day and part.`);
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1>Puzzle Input</h1>
      <textarea id="puzzle-input" />
        <h1>2023</h1>
        <h2>Day 1</h2>
        <button
          onClick={() => {
            init().then(() => {
              try {
                const puzzle_input = (document.getElementById('puzzle-input')! as HTMLTextAreaElement).value;
                setAnswer(day_1_get_sum_of_calibration_values_in_document(puzzle_input).toString());
              } catch {
                raiseError();
              }
            });
          }}>Part 1</button>
                  <button
          onClick={() => {
            init().then(() => {
              try {
                const puzzle_input = (document.getElementById('puzzle-input')! as HTMLTextAreaElement).value;
                setAnswer(day_1_get_sum_of_calibration_values_in_document_part_2(puzzle_input).toString());
              } catch {
                raiseError();
              }
            });
          }}>Part 2</button>
          <h1>Answer</h1>
        <p>{answer}</p>
      </header>
    </div>
  );
}

export default App;
