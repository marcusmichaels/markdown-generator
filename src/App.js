import React from "react";
import marked from "marked";

import Editor from "./Editor";
import Preview from "./Preview";

marked.setOptions({
  breaks:true
});

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      input: "",
      markdown: ""
    }
  }

  componentDidMount() {
    let firstText = "# This is an H1\n" +
                    "## This is an H2\n" + 
                    "[This is a link](https://marcusmichaels.com)\n\n" +
                    "I quite **like** the `<kbd>` HTML tag. Others like a `<blockquote>`:\n" +
                    '> Education is what survives\n> when what has been learned\n> has been forgotten\n\n' +
                    "How about some list items?\n\n" +
                    "* List item one\n* List item two\n* List item three\n\n" +
                    "You've been _kind_ reading this far, so here's a kitten.\n\n" +
                    "![Kitten Photo](https://placekitten.com/300/300)\n\n" +
                    "Lastly, if you'd like to annoy co-workers while they're not at their computer\n" +
                    "Try adding this in their browser's console:\n\n" +
                    "```\nsetInterval( function() {\n\talert('Oh, hey there!');\n}, 1000);\n```" ;

                    // a code block,

    this.setState({
      input: firstText,
      markdown: marked(firstText)
    });
  }

  handleText = (event) => {
    console.log(event.target.value);
    this.setState({
      input: event.target.value,
      markdown: marked(event.target.value)
    });
  }

  render () {
    return (
      <React.Fragment>
        <header>
          <p>Simple Markdown Generator by <a href="https://marcusmichaels.com" target="_blank" title="View Marcus' site" rel="noopener noreferrer">Marcus</a></p>
        </header>
        <Editor rawText={this.state.input} handleText={this.handleText} />
        <Preview markdown={this.state.markdown} />
      </React.Fragment>

    );
  }
}

export default App;