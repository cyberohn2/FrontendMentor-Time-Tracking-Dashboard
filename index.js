let reports = Array.from(document.querySelectorAll('.reports'))
let timeframeTime = Array.from(document.querySelectorAll('.timeframe-time'))
const weeklyBtn = document.querySelector('.weekly')
const dailyBtn = document.querySelector('.daily')
const monthlyBtn = document.querySelector('.monthly')

dailyBtn.addEventListener('click', () => {
    resetActive()
   dailyBtn.classList.add('active')
   getData().then(
        data =>{
            data.forEach((dataText, dataIndex) => {
                let timeframe = dataText.timeframes.daily
            
                let currentTime = reports[dataIndex].querySelector('.current-time')
                let previousTime = reports[dataIndex].querySelector('.frequency')
            
                currentTime.innerHTML = `${timeframe.current}hrs`
                previousTime.innerHTML = `Yesterday - ${timeframe.previous}hrs`
            
            });
        }
   )
})

weeklyBtn.addEventListener('click', () => {
    resetActive()
    weeklyBtn.classList.add('active')
    getData().then(
        data =>{
            data.forEach((dataText, dataIndex) => {
                let timeframe = dataText.timeframes.weekly
        
                let currentTime = reports[dataIndex].querySelector('.current-time')
                let previousTime = reports[dataIndex].querySelector('.frequency')
        
                currentTime.innerHTML = `${timeframe.current}hrs`
                previousTime.innerHTML = `Last Week - ${timeframe.previous}hrs`
            
        });
        }
    )
})

monthlyBtn.addEventListener('click', () => {
    resetActive()
    monthlyBtn.classList.add('active')
    getData().then(
        data =>{
            data.forEach((dataText, dataIndex) => {
                let timeframe = dataText.timeframes.monthly
        
                let currentTime = reports[dataIndex].querySelector('.current-time')
                let previousTime = reports[dataIndex].querySelector('.frequency')
        
                currentTime.innerHTML = `${timeframe.current}hrs`
                previousTime.innerHTML = `Last Month - ${timeframe.previous}hrs`
            
        });
        }
    )
})

function resetActive() {
    timeframeTime.forEach(elem =>{
        elem.classList.remove('active')
    })
}

const getData = async () =>{
    const response = await fetch('./data.json')
    const data = await response.json()

    return data

} 