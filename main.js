//設定變數
const redSlider = document.querySelector('#red-slider')
const greenSlider = document.querySelector('#green-slider')
const blueSlider = document.querySelector('#blue-slider')
const redOutput = document.querySelector('#output-red')
const greenOutput = document.querySelector('#output-green')
const blueOutput = document.querySelector('#output-blue')
const sixteen = document.querySelector('.sixteen')
const body = document.querySelector('body')

//10進位顯示函數
function displayValue(slider, output) {
  slider.oninput = function () {
    output.innerHTML = this.value
    displaySixteen()
  }
}
//16進位顯示函數
function displaySixteen() {
  let r = Number(redOutput.innerHTML).toString(16)
  let g = Number(greenOutput.innerHTML).toString(16)
  let b = Number(blueOutput.innerHTML).toString(16)
  if (r == 0) {
    r = '0' + '0'
  }
  if (g == 0) {
    g = '0' + '0'
  }
  if (b == 0) {
    b = '0' + '0'
  }
  sixteen.innerHTML = '#' + r + g + b
  changeColor(sixteen.innerHTML)
  return sixteen.innerHTML
}

//背景色函數
function changeColor(color) {
  body.style.background = color
}

//執行函數
displayValue(redSlider, redOutput)
displayValue(greenSlider, greenOutput)
displayValue(blueSlider, blueOutput)

