function updateDateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[now.getUTCDay()];

    document.getElementById('currentTimeUTC').textContent = utcTime;
    document.getElementById('currentDay').textContent = currentDay;
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second