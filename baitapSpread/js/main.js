/**
 * B1:tạo func hoverSpan()
 * B2: tạo biến str = classHeading.innerHTML
 * B3: tạo biến array = [..str]
 * B4: tạo biến newArray = array.filter xóa khoảng trắng
 * B5: lặp qua newArray để tạo span
 */


let hoverSpan = () => {
  let str = document.querySelector('.heading').innerHTML
  let array = [...str]
  let newArray = array.filter(item => item !== ' ')
  let html = newArray.map(spanELE => `<span>${spanELE}</span>`)
  document.querySelector('.heading').innerHTML = html.join('')
}
hoverSpan()