const dayChecker = ((personalBirth) => {
    // Split the inputDate into an array
    const dateComponents = personalBirth.split("-");

    // Extract year, month, and day components
    const month = dateComponents[1];
    const day = dateComponents[2];

    return `${month}-${day}`
})

const dailyChecker = (() => {
    // Get the current date
    const currentDate = new Date();

    // Get the month (0-11) and day of the month
    const month = currentDate.getMonth() + 1; // Adding 1 because months are 0-indexed
    const day = currentDate.getDate();

    // Format month and day as two digits
    const formattedMonth = (month < 10 ? "0" : "") + month;
    const formattedDay = (day < 10 ? "0" : "") + day;

    // Combine formatted month and day with a hyphen to get "MM-DD" format
    const formattedDate = formattedMonth + "-" + formattedDay;
    return formattedDate
})

const birthDayControl = ((personalBirth) => {
    if(dayChecker(personalBirth) === dailyChecker()){
        return true
    } else {
        return false
    }
})

export default birthDayControl;