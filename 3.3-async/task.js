class AlarmClock {
  constructor() {
    this.alarmCollection = [],
    this.timerId = null;
  }
  addClock(actionTime, callbackFn, callId) {
    if (!callId) {
      throw new Error('Не был передан id звонка');
    } else if (this.alarmCollection.some((element) => element.id === callId)) {
      console.error('Звонок с таким id уже существует');
    } else {
      this.alarmCollection.push(
        {
          id: callId,
          time: actionTime,
          callback: callbackFn
        }
      )
    }
  }
  removeClock(callId) {
    const newAlarmArr = this.alarmCollection.filter((element) => element.id != callId);
    const compareAlarmArrs = newAlarmArr.length < this.alarmCollection;
    this.alarmCollection = newAlarmArr;
    return compareAlarmArrs;
  }
  getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
    return `${hours}:${minutes}`;
  }
  start() {
    function checkClock (alarm) {
      if (this.getCurrentFormattedTime() === alarm.time) {
        alarm.callback();
      }
    }
    if (this.timerId != null) {
      function sortingAlarm() {
        this.alarmCollection.forEach((element) => checkClock(element));
      }
      this.timerId = setInterval(sortingAlarm, 1000);
    }
  }
  stop() {
    if (this.timerId === null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  printAlarms() {
    this.alarmCollection.forEach(function callback(element) {
      console.log(element.id, element.time);
    });
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
