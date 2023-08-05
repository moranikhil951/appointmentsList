// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {addAppointment, onchangeStar} = props
  const {inputTitle, dateNow, id, isStar} = addAppointment

  const starClickButton = () => {
    onchangeStar(id)
  }

  const starImage = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return inputTitle !== '' && dateNow !== '' ? (
    <li className="listed-items">
      <div>
        <p className="title-heading">{inputTitle}</p>
        <p className="date">Date: {dateNow}</p>
      </div>
      <button
        type="button"
        data-testid="star"
        onClick={starClickButton}
        className="button-star"
      >
        <img alt="star" className="image-star" src={starImage} />
      </button>
    </li>
  ) : (
    alert
  )
}

export default AppointmentItem
