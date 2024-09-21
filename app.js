const selectSeat = document.getElementById("selected-seats");
const totalBookSeat = document.getElementById("total-book-count");
const availableSeat = document.getElementById("available-seat");
const totalPriceEl = document.getElementById("total-price");
const couponInputEl = document.getElementById("coupon-field");
const couponBtnEl = document.getElementById("coupon-btn");
const defaultText = document.getElementById("default-text");
const grandTotal = document.getElementById("grand-total");
const phoneNumber = document.getElementById("phone-number");
const nextBtn = document.getElementById("next-btn");
let selectSeats = [];
let total = 0;
function handelSelectSeat(event) {
  const value = event.innerText;
  if (selectSeats.includes(value)) {
    alert("seat already booked");
    return;
  } else if (selectSeats.length < 4) {
    event.classList.add("bg-[#1DD100]");
    event.classList.add("text-white");
    selectSeats.push(event.innerText);
    totalBookSeat.innerText = selectSeats.length;
    const availableSeatValue = parseFloat(availableSeat.innerText);
    const newAvailableSeatValue = availableSeatValue - 1;
    availableSeat.innerText = newAvailableSeatValue;
    defaultText.classList.add("hidden");
    selectSeat.innerHTML += `<li class="text-base font-Inter flex justify-between">
  <p>${event.innerText}</p>
  <p>Economy</p>
  <p>550</p>
  </li>`;
    total += 550;
    totalPriceEl.innerText = total.toFixed(2);
    if (selectSeats.length > 3) {
      couponInputEl.removeAttribute("disabled");
      couponBtnEl.removeAttribute("disabled");
    }
  } else {
    alert("maximum seat added");
  }
}
document.getElementById("coupon-btn").addEventListener("click", function () {
  const couponInputValue = couponInputEl.value;
  let couponSave = 0;
  if (couponInputValue !== "NEW15" && couponInputValue !== "Couple 20") {
    alert("please provide valid coupon");
    return;
  }
  if (couponInputValue === "NEW15") {
    couponSave = total * 0.15;
  } else if (couponInputValue === "Couple 20") {
    couponSave = total * 0.2;
  }
  const showCouponPrice = (document.getElementById(
    "show-coupon-price"
  ).innerHTML = `<div class="flex justify-between">
                                <h3 class="">Discount</h3>
                                <p>BDT: <span>-${couponSave}</span></p>
                            </div>`);

  const grandTotalValue = total - couponSave;
  grandTotal.innerText = grandTotalValue;
});
phoneNumber.addEventListener("keyup", function (event) {
  const inputValue = event.target.value;
  if (inputValue.length === 11) {
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.setAttribute("disabled", true);
  }
});
document.getElementById("continue").addEventListener("click", function () {
  window.location.reload();
});
