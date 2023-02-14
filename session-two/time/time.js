const timeForMandC = (date) => {
    // Your code here
    const month = date.getMonth();
    const day = date.getDate();

    if (month === 11 && day === 24) {
        return true;
    } else {
        return false;
    }
}

module.exports = timeForMandC;