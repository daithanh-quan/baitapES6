/**
 * --tạo button
 * B1: tạo func createButtons
 * B2: colorList = ["pallet", "viridian", "pewter", "cerulean", "vermil
lion", "lavender","celadon","saffron","fuschia","cinnabar"];
 * B3: map qua colorList, tạo thẻ button
 * B4: chạy hàm
 * --click khi thay đổi màu
 * B1: tạo func handleChangeColor(colorChanged, index)
 * B2: lặp qua các button, thêm và xóa active
 * B3: lặp qua các màu, để thêm và xóa cho house
 */


const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"]
let createButtons = () => {
  let html = ''
  colorList.map((color, index) => {
    html += `<button class="color-button ${color}" onclick="handleChangeColor('${color}',${index})"></button>`
  })

  return document.getElementById('colorContainer').innerHTML = html
}
createButtons()
document.querySelectorAll('.color-button')[0].classList.add('active')
let handleChangeColor = (colorChanged, index) => {
  let house = document.querySelector('.house')
  let buttons = document.querySelectorAll('.color-button')
  buttons.forEach(() => {
    let active = document.querySelector('.active')
    if (active === null) {
      buttons[index].classList.add('active')
    }
    else {
      active.classList.remove('active')
    }
  })
  for (let i = 0; i < colorList.length + 1; i++) {
    const color = colorList[i];
    if (house.classList.contains(color)) {
      house.classList.remove(color)
    }
    else {
      house.classList.add(colorChanged)
    }
  }
}



