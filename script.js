const dailyBtn = document.getElementById("daily-btn")
const weeklyBtn = document.getElementById("weekly-btn")
const monthlyBtn = document.getElementById("monthly-btn")
const taskCurrentDuration = document.querySelectorAll(".task-current-duration")
const taskPreviousDuration = document.querySelectorAll(".task-previous-duration")


let fetchedData

const fetchData = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    fetchedData = data
    displayData("daily")
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

fetchData("data.json")

const displayData = (basis) => {
  let lastTime
  if (basis === "daily") {
    lastTime = "Last Day"
  } else if (basis === "monthly") {
    lastTime = "Last Month"
  } else {
    lastTime = "Last Week"
  }
  fetchedData.forEach((el, i) => {
    taskCurrentDuration[i].innerHTML = `${el.timeframes[basis].current}hrs`
    taskPreviousDuration[i].innerHTML = `${lastTime} - ${el.timeframes[basis].previous}hrs`
  })
}

dailyBtn.addEventListener("click", (e) => {
  const buttonsList = [dailyBtn, weeklyBtn, monthlyBtn]
  buttonsList.forEach(button => button.classList.remove("active"))
  e.target.classList.add("active")
  displayData("daily")
})

weeklyBtn.addEventListener("click", (e) => {
  const buttonsList = [dailyBtn, weeklyBtn, monthlyBtn]
  buttonsList.forEach(button => button.classList.remove("active"))
  e.target.classList.add("active")
  displayData("weekly")
})
monthlyBtn.addEventListener("click", (e) => {
  const buttonsList = [dailyBtn, weeklyBtn, monthlyBtn]
  buttonsList.forEach(button => button.classList.remove("active"))
  e.target.classList.add("active")
  displayData("monthly")
})