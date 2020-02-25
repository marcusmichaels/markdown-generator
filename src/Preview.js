import React from "react";
import "./Preview.scss";

const createMarkdown = (text) => {
  return {
    __html: text
  }
}

const Preview = (props) => {

  return (
    <div id="preview" className="preview-half" dangerouslySetInnerHTML={createMarkdown(props.markdown)}></div>
  );
}

export default Preview;