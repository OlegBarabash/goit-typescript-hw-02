/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week { MON, TUE, WED, THU, FRI, SAT, SUN }

function isWeekend(day: Week): boolean{
  return day === Week.SAT || day === Week.SUN
}
