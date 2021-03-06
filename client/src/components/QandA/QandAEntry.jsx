/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable eol-last */
import axios from 'axios';
import React from 'react';
// import axios from 'axios';
import Answer from './Answer';
import AddAnswer from './AddAnswer';

class QandAEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      initialAnswers: [],
      isAnsHelpfulClick: false,
      isQuesHelpfulClick: false,
      quesHelpfulCount: 0,
      modalShow: false,
    };
    this.handleMoreAnswersClick = this.handleMoreAnswersClick.bind(this);
    this.handleQuestionHelpfulClick = this.handleQuestionHelpfulClick.bind(this);
  }

  componentDidMount() {
    this.getAnswers();
    if (this.props.question) {
      this.setState({ quesHelpfulCount: this.props.question.question_helpfulness });
    }
  }

  handleMoreAnswersClick() {
    if (this.state.isAnsHelpfulClick === false) {
      this.setState({ isAnsHelpfulClick: true });
    } else {
      this.setState({ isAnsHelpfulClick: false });
    }
  }

  handleQuestionHelpfulClick() {
    const { questionID } = this.state;
    if (!this.state.isQuesHelpfulClick) {
      this.setState({ isQuesHelpfulClick: true });
      axios.put(`qa/questions/${questionID}/helpful`)
        .then(() => this.setState({ quesHelpfulCount: this.state.quesHelpfulCount + 1 }))
        .catch((err) => { throw Error('axios question helpful error', err); });
    }
  }

  handleAddAnswer(e) {
    this.setState({ modalShow: e });
  }

  getAnswers() {
    if (this.props.question) {
      const questionID = this.props.question.question_id;
      axios.get(`/qa/questions/${questionID}/answers`)
        .then((answers) => {
          this.setState({
            answers: answers.data.results,
            initialAnswers: answers.data.results.slice(0, 2),
            questionID,
          });
        });
    }
  }

  render() {
    let questionBody;
    let answerBody;
    let loadMoreAnswersButton;
    let answers;
    let moreAnswersButtonText;
    let indent;
    if (this.props.question) {
      questionBody = this.props.question.question_body;
      if (this.state.isAnsHelpfulClick === false) {
        answers = this.state.initialAnswers;
      } else {
        answers = this.state.answers;
      }
      answerBody = answers.map((answerObj, index) => (
        <Answer answerObj={answerObj} key={index} index={index} />
      ));
    } else {
      questionBody = 'No Question Data';
      answerBody = 'No Answer Data';
    }
    if (this.state.answers.length > 2) {
      if (this.state.isAnsHelpfulClick === false) {
        moreAnswersButtonText = 'LOAD MORE ANSWERS';
      } else {
        moreAnswersButtonText = 'COLLAPSE ANSWERS';
      }
      indent = <span className="ASide questionBody" />;
      loadMoreAnswersButton = <button type="button" className="loadMoreAnswers" onClick={this.handleMoreAnswersClick}>{moreAnswersButtonText}</button>;
    } else {
      loadMoreAnswersButton = '';
      indent = '';
    }
    return (
      <div>
        <div className="questionSection">
          <div className="questionBody">
            <span className="QSide questionBody"> Q: </span>
            {' '}
            {questionBody}
          </div>
          <div className="qHelpfulAddAnswerReport">
            Helpful?
            {' '}
            <span className="qandalink" onClick={this.handleQuestionHelpfulClick}>Yes</span>
            {' '}
            (
            {this.state.quesHelpfulCount}
            )
            {' '}
            <span className="qLine"> | </span>
            {' '}
            <button type="button" className="qandalink addAnswerBtn" onClick={() => this.handleAddAnswer(true)}>Add Answer</button>
            <AddAnswer
              show={this.state.modalShow}
              onHide={() => this.handleAddAnswer(false)}
            />
          </div>
        </div>
        {answerBody}
        {indent}
        {loadMoreAnswersButton}
      </div>
    );
  }
}

export default QandAEntry;