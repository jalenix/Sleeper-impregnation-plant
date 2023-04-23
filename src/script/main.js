const rangeWay = document.getElementById('rangeWay')
const amount = document.getElementById('amount')
const result = document.getElementById('result')

function count() {
    const wayValue = rangeWay.value
    const amountValue = amount.value
    // console.log(wayValue,' ', amountValue)
    const resultValue = (amountValue / 1000) * wayValue
    result.textContent = resultValue
}
document.addEventListener("DOMContentLoaded", function (event) {
    count();
});


rangeWay.addEventListener('input', function () {
    count()
})
amount.addEventListener('change', function () {
    count()
})