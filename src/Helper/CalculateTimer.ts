function calculateTimer(timeInSeconds: number): Array<number | string> {
    let hours: number = Math.floor(timeInSeconds / 3600);
    let minutes: number = Math.floor((timeInSeconds - (hours * 3600)) / 60);
    let seconds: number = timeInSeconds - (hours * 3600) - (minutes * 60);
    // debugger
    let hoursFormated: number | string = hours < 10 ? `0${hours}` : hours
    let minutesFormated: number | string = minutes < 10 ? `0${minutes}` : minutes
    let secondsFormated: number | string = seconds < 10 ? `0${seconds}` : seconds

    return [
        hoursFormated,
        minutesFormated,
        secondsFormated
    ]
}

export default calculateTimer;