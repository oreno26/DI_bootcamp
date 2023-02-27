const timeLeft = () => {
    const now = Date.now()
    const dateTwo = new Date().setFullYear(2024, 01, 01)
    console.log(now);
    console.log(dateTwo);
    const diff = dateTwo - now
    const diffDays = Math.floor(diff / 86400000)
    const diffhours = Math.floor((diff % 86400000)%3600000)
    const diffMins = Math.floor(((diff % 86400000)%3600000)/6000)
    console.log(diffDays + "days");
    console.log(diffMins + "min");
console.log(diffhours + "hours");
}
timeLeft()