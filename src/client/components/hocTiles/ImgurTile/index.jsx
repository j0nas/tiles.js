import React from "react";

const mapTypeToClass = type => {
  const info = "alert alert-info";
  const types = {
    "success": "alert alert-success",
    "message": info,
    "caution": "alert alert-warning",
    "error": "alert alert-danger"
  };

  return types[type] || info;
};

const Notification = ({type, children}) =>
  <div className={mapTypeToClass(type)}>{children}</div>;

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(callback) {
    this.setState({visible: false}, () => callback && callback());
  }

  render() {
    const {message, type, accept, decline} = this.props;
    const renderComponent = message && this.state.visible;
    return (
      renderComponent
        ? <Notification type={type}>
          <p>{message}</p>
          <div onClick={() => this.buttonClick(accept)} className="btn btn-primary">Sure</div>
          <div onClick={() => this.buttonClick(decline)} className="btn btn-danger">No Thanks</div>
        </Notification>
        : null
    );
  }
}

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayQuestion: false,
    }

    this.showQuestion = this.showQuestion.bind(this);
  }

  showQuestion() {
    this.setState({displayQuestion: true});
  }

  render() {
    const {question, answer} = this.props;
    console.log("test", question, answer);
    return (
      <div className="container">
        <p className="question">{question}</p>
        <div className="btn btn-primary show-answer" onClick={this.showQuestion}>Show Answer</div>
        {this.state.displayQuestion
          ? <Notification type="info">
            <div className="btn btn-primary show-answer">Show Answer</div>
          </Notification>
          : null}
      </div>
    )
  }
}

const QuestionList = ({questions}) =>
  <div>
    {questions.map(question => <QuestionContainer {...question} />)}
  </div>

const App = props =>
  <div id="app">
    <QuestionList {...props} />
  </div>;
