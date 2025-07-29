function calculateAge() {
      const day = parseInt(document.getElementById('txt1').value);
      const month = parseInt(document.getElementById('txt2').value);
      const year = parseInt(document.getElementById('txt3').value);

      if (!day || !month || !year) {
        alert('please enter full birth date');
        return;
      }

      const birthDate = new Date(year, month - 1, day);
      const today = new Date();

      if (birthDate > today) {
        alert('wrong date your date will note be next year');
        return;
      }

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      
      document.getElementById('resYear').textContent = years;
      document.getElementById('resMonth').textContent = months;
      document.getElementById('resDay').textContent = days;
    }