import React, { Component } from "react";
import { Platform } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { dateFormatDDMMMYYYY, dateFormatYYYYMMYY, timeFormat } from "../../utils/DateFormats";

export class DateTimePicker extends Component {

    state = {
        isVisible : false,
        type : 'date'
    }

  showModal = (type) => {
    this.setState({
        isVisible:true,
        type : type
    })
  };

  hideModal = () => {
    this.setState({isVisible:false})
  };

  handleConfirm = (date) => {
    console.log("[DateTimePicker.js] A date has been picked: ", date);
    this.hideModal()
    if(this.state.type === 'date'){
        this.props.setDate(dateFormatYYYYMMYY(date))
    }else if(this.state.type === 'time'){
        this.props.setTime(timeFormat(date))
    }
  };

 render() {

    const {isVisible,type} = this.state;

    return (
          <DateTimePickerModal
            isVisible={isVisible}
            mode={type}
            // time=''
            onConfirm={date => this.handleConfirm(date)}
            onCancel={() => this.hideModal()}
            display={Platform.OS == 'ios' ? 'inline' : 'default'}
          />
      );
 }
};