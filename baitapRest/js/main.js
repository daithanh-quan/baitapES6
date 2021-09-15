/**
 * B1: tạo func handleSum(spanID,...numbers)
 * B2: tạo biến tổng, result: sum = 0, result = 0
 * B3: lặp qua number sum+= number
 *  result = sum / numbers.length
 * B4: return result
 */



let handleSum = (spanID, ...numbers) => {
  let sum = 0
  let result = 0
  numbers.map((number) => {
    sum += number
  })
  result = sum / numbers.length
  return getELE(spanID).innerHTML = result.toFixed(2)
}
// tạo biến và lấy giá trị các input khi click
// lớp 1
var getELE = (ELE) => {
  return document.getElementById(ELE)
}


//tính cho lớp 1
getELE('btnKhoi1').addEventListener('click', (e) => {
  e.preventDefault()
  let inputMath = parseFloat(getELE('inpToan').value)
  let inputPhysical = parseFloat(getELE('inpLy').value)
  let inputChemistry = parseFloat(getELE('inpHoa').value)
  handleSum('tbKhoi1', inputMath, inputPhysical, inputChemistry)
})
// tính cho lớp 2
getELE('btnKhoi2').addEventListener('click', (e) => {
  e.preventDefault()
  let inputLiterature = parseFloat(getELE('inpVan').value)
  let inputHistory = parseFloat(getELE('inpSu').value)
  let inputGeography = parseFloat(getELE('inpDia').value)
  let inputEnglish = parseFloat(getELE('inpEnglish').value)
  handleSum('tbKhoi2', inputLiterature, inputHistory, inputGeography, inputEnglish)
})