// Write your code here

import {Component} from 'react'

import {format} from 'date-fns'

import {v4 as uuidV4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {inputTitle: '', dateNow: '', appointmentList: []}

  onchangeStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isStar: !eachItem.isStar}
        }
        return eachItem
      }),
    }))
  }

  addAppointments = event => {
    const {inputTitle} = this.state
    event.preventDefault()

    const newAppointmentList = {
      id: uuidV4(),
      inputTitle,
      dateNow: format(new Date(2022, 19, 7), 'dd MMMM yyyy, EEEE'),
      isStar: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointmentList],
      inputTitle: '',
      dateNow: '',
    }))
  }

  onChangeInputTitle = event => {
    this.setState({inputTitle: event.target.value})
    console.log(event.target.value)
  }

  onChangeInputDateNow = event => {
    this.setState({dateNow: event.target.value})
  }

  starredButton = () => {
    const {appointmentList} = this.state
    const filteredList = appointmentList.filter(
      eachList => eachList.isStar === true,
    )
    this.setState({appointmentList: filteredList})
  }

  render() {
    const {
      inputTitle,
      dateNow,

      isStar,
      appointmentList,
    } = this.state
    return (
      <div className="Container-Appointments">
        <div className="inner-container">
          <div className="flexing-inner-con">
            <form className="from-container" onSubmit={this.addAppointments}>
              <h1 className="main-heading">Add Appointment</h1>
              <div>
                <label htmlFor="inputEle" className="label">
                  TITLE
                </label>
              </div>
              <input
                id="inputEle"
                type="text"
                value={inputTitle}
                onChange={this.onChangeInputTitle}
                className="title"
              />
              <div>
                <label htmlFor="inputDate" className="label">
                  Date
                </label>
              </div>
              <input
                type="date"
                id="inputDate"
                value={dateNow}
                onChange={this.onChangeInputDateNow}
                className="dateInput"
              />
              <div>
                <button type="submit" className="buttonAdd">
                  Add
                </button>
              </div>
            </form>
            <img
              alt="appointments"
              className="imageApp"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <hr />
          <div className="appoints-down">
            <h1 className="appoints">Appointments</h1>

            <button type="button" className="para" onClick={this.starredButton}>
              Starred
            </button>
          </div>
          <ul className="unordered-list-appointments">
            {appointmentList.map(eachAppointment => (
              <AppointmentItem
                addAppointment={eachAppointment}
                key={eachAppointment.id}
                onchangeStar={this.onchangeStar}
                isStar={isStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
