alert('After selected the bus seat then use your coupon code. Other wish you will not get actual discount');

const allBtn = document.getElementsByClassName('all-btn');
let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
            if (count < 4 && !btn.classList.contains('bg-green-500')) {
                // If button not selected then add bg-green;
                btn.classList.add('bg-green-500');
                btn.classList.add('text-white');
                //increase the seat number
                count = count + 1;
                const seatCount = document.getElementById('seat-count');
                seatCount.innerText = count;
                // decrease the Available seat
                const totalSeatAvailable = getTextValueById('total-seat-left');
                const upgradeTotalSeatAvailable = totalSeatAvailable - 1;
                setTextValueById('total-seat-left', upgradeTotalSeatAvailable);
                // Update total Selected seat
                const totalSelectedSeat = getTextValueById('selected-seat');
                const upgradeTotalSelectedSeat = totalSelectedSeat + 1;
                setTextValueById('selected-seat', upgradeTotalSelectedSeat);
                // Total Available seat decrease
                totalAvailableSeat();
                const Price = 550;
                const updateTotalPrice = Price * count;
                setTextValueById('total-price', updateTotalPrice);
                // Grand total price with discount
                document.getElementById('coupon-code').addEventListener('keyup', function(event){
                    const couponCode = event.target.value;
                    const applyBtn = document.getElementById('apply-btn');
                    if(couponCode === 'NEW15' || couponCode === 'Couple 20'){
                        applyBtn.removeAttribute('disabled');
                        // Add grand total price
                        document.getElementById('apply-btn').addEventListener('click', function(){
                            if(couponCode === 'NEW15'){
                                const discountPrice = (updateTotalPrice * 15)/100;
                                const grandTotalUpdate = updateTotalPrice - discountPrice;
                                const grandTotalPrice = document.getElementById('grand-total-price');
                                grandTotalPrice.innerText = grandTotalUpdate;
                            }
                            else if(couponCode === 'Couple 20'){
                                const discountPrice2 = (updateTotalPrice * 20)/100;
                                const grandTotalUpdate2= updateTotalPrice - discountPrice2;
                                const grandTotalPrice2 = document.getElementById('grand-total-price')
                                grandTotalPrice2.innerText = grandTotalUpdate2;
                            }
                            const applyInput = document.getElementById('apply-input');
                            applyInput.classList.add('hidden');
                        })
                    }
                    else{
                        applyBtn.setAttribute('disabled', true);
                    }
                })
                // When user select one button then the previous seat name remove and add selected seat name
                hideElementById();
                addSelectedName();
            }
            else if (btn.contains('bg-green-500')) {
                btn.classList.remove('bg-green-500');
                btn.classList.remove('text-white');
            }
    })
}