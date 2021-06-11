const monthDays = [];
const weekDays = [
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
      "воскресенье"
    ];

const firstJanuaryWeekDay = "суббота";
const weekDayIndex = weekDays.indexOf(firstJanuaryWeekDay);

for (let i = 1; i < 32; i++) {
	monthDays.push(i);
}

for (const monthDay of monthDays) {
    const index = (weekDayIndex + monthDay - 1) % 7; 
    console.log(`${monthDay} января, ${weekDays[index]}`);
}

