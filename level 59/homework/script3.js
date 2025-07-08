// 3) შექმენით increaseTheCount პროექტი, გექნებათ:
// ერთი პარაგრაფი რომლის საწყისი მნიშვნელობა იქნება <p>Count: 0</p>, 
// ერთი ღილაკი Increase Count By One რომელიც ყოველ ჯერზე გაზრდის Count პარაგრაფის მნიშვნელობას ერთით

 const paragraph = document.getElementById("p1");
    const button = document.getElementById("btn");

    button.addEventListener('click', () => {
      
      let currentValue = parseInt(paragraph.textContent.split(':')[1]);

      if (isNaN(currentValue)) {
        currentValue = 0;
      }

      currentValue++;

      
      paragraph.textContent = `count: ${currentValue}`;
    });