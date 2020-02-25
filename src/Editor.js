import React from "react";
// import ReactDOM from "react-dom";
import "./Editor.scss";

const Editor = (props) => {
  return(
    <textarea id="editor" className="editor-half" type="text" value={props.rawText} onChange={props.handleText} />
  );
}

export default Editor;