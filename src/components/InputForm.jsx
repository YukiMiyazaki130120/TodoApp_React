import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("a");
    // inputに打ち込んだ文字をコンソールに出力したい
    // console.log(inputText);

    // 一つ前の情報を配列として用意する
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false
      }
    ]);
    console.log(taskList);
    setInputText("");
    
  }

  const handleChange = (event) => {
    setInputText(event.target.value);
  }

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText}/>
        <button>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </form>
    </div>
  )
}
