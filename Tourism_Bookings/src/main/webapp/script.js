document.addEventListener('DOMContentLoaded', function() {
    const paymentMethods = document.querySelectorAll('.payment-method');
  
    paymentMethods.forEach(method => {
      method.addEventListener('click', function() {
        const detailsContent = document.getElementById('details-content');
        detailsContent.innerHTML = ''; // Clear previous content
  
        const methodId = this.id;
        let detailsHtml = '';
  
        switch (methodId) {
          case 'credit-card':
            detailsHtml = `
              <p>Card Details: <input type="text" placeholder="Card Number"></p>
              <p>Valid Thru: <input type="text" placeholder="MM/YY"></p>
              <p>CVV: <input type="text" placeholder="CVV"></p>
              <button>Pay Now</button>
            `;
            break;
          case 'net-banking':
            detailsHtml = `
              <p>Select Bank: <select>
                <option>Bank A</option>
                <option>Bank B</option>
                <option>Bank C</option>
              </select></p>
              <button>Pay Now</button>
            `;
            break;
          case 'eWallet':
            detailsHtml = `
              <p>Choose eWallet: <select>
                <option>Wallet X</option>
                <option>Wallet Y</option>
                <option>Wallet Z</option>
              </select></p>
              <button>Pay Now</button>
            `;
            break;
          case 'debit-card':
            detailsHtml = `
              <p>Card Details: <input type="text" placeholder="Card Number"></p>
              <p>Valid Thru: <input type="text" placeholder="MM/YY"></p>
              <p>CVV: <input type="text" placeholder="CVV"></p>
              <button>Pay Now</button>
            `;
            break;
          case 'upi':
            detailsHtml = `
              <p>Enter UPI ID: <input type="text" placeholder="Enter UPI ID"></p>
              <button>Pay Now</button>
            `;
            break;
        }
  
        detailsContent.innerHTML = detailsHtml;
        detailsContent.style.display = 'block';
      });
    });
  });
  