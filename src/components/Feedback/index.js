import {Component} from 'react'
import './index.css'

const FeedbackOption = props => {
  const {optionData, feedbackSelectionHandler} = props
  const {name, imageUrl} = optionData

  const onFeedbackSelection = () => feedbackSelectionHandler(name)

  return (
    <li className="feedback-option" onClick={onFeedbackSelection}>
      <img className="feedback-option-img" src={imageUrl} alt={name} />
      <p className="feedback-option-rating">{name}</p>
    </li>
  )
}

const CaptureFeedback = props => {
  const {emojiData, onUserFeedback} = props

  return (
    <div className="content-container">
      <h1 className="feedback-question">
        How satisfied are you with our customer support performance?
      </h1>
      <ul className="feedback-options-container">
        {emojiData.map(emojiDataItem => (
          <FeedbackOption
            key={emojiDataItem.id}
            optionData={emojiDataItem}
            feedbackSelectionHandler={onUserFeedback}
          />
        ))}
      </ul>
    </div>
  )
}

const DisplayMessage = props => {
  const {emojiUrl} = props

  return (
    <div className="content-container">
      <img className="message-top-img" src={emojiUrl} alt="love emoji" />
      <h1 className="message-text">Thank You!</h1>
      <p className="feedback-purpose-description">
        We will use your feedback to improve our customer support performance.
      </p>
    </div>
  )
}

export default class Feedback extends Component {
  state = {
    userFeedbackCaptured: false,
    userRating: '',
  }

  onUserFeedback = userChosenRating =>
    this.setState({
      userFeedbackCaptured: true,
      userRating: userChosenRating,
    })

  render() {
    const {userFeedbackCaptured, userRating} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="feedback-app-bg-container">
        {userFeedbackCaptured ? (
          <DisplayMessage emojiUrl={loveEmojiUrl} />
        ) : (
          <CaptureFeedback
            emojiData={emojis}
            onUserFeedback={this.onUserFeedback}
          />
        )}
      </div>
    )
  }
}
