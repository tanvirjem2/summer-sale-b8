
let total = 0;
function FindProductName(target) {
    const productName = target.childNodes[5].childNodes[1].innerText;
    const productPriceString = target.childNodes[5].childNodes[3].innerText.split(' ')[0]
    const productPrice = parseFloat(productPriceString);
    const totalPrice = total = total + productPrice
    setProductName(productName);
    setProductPrice(totalPrice);
    const makePurchaseButton = document.getElementById('make-purchase-btn');

    // make purchase btn will work ---------------------------------------------

    if (total > 0) {
        makePurchaseButton.removeAttribute('disabled');
    } else {
        makePurchaseButton.setAttribute('disabled', true)
    }

    // Apply btn will work -----------------------------------------------------

    const applyButton = document.getElementById('apply-btn')
    if (total >= 200) {
        applyButton.removeAttribute('disabled')
    } else {
        applyButton.setAttribute('disabled', true)
    }

    document.getElementById('total').innerText = total;

    document.getElementById('coupon-code').addEventListener('keyup', function (event) {
        const text = event.target.value;
        if (text === 'SELL200') {
            const discount = (20 / 100) * total;
            document.getElementById('apply-btn').addEventListener('click', function () {
                const twoDecimal = discount.toFixed(2);
                document.getElementById('discount-price').innerText = twoDecimal;
                document.getElementById('total').innerText = (total - twoDecimal).toFixed(2);
            })
        }
    })
}

function setProductName(productName) {
    const productNameContainer = document.getElementById('product-name')
    const p = document.createElement('p')
    const count = productNameContainer.childElementCount;
    p.innerHTML = `<strong>${count + 1}. ${productName}</strong>`;
    productNameContainer.appendChild(p)
}

function setProductPrice() {
    const productPriceContainer = document.getElementById('total-price')
    productPriceContainer.innerText = total;
}

// Bonus part done -----
document.getElementById('go-home-btn').addEventListener('click', function () {
    window.location.reload()
})

