// 1) შექმენით ერთი ფაილი სახელად math.utils.js ამ ფაილში უნდა გქონდეთ ფუნქციები როგორიცაა შეკრება, გამოკლება, გაყოფა, ნამრავლი
// module.exports - ის გამოყენებით გაიტაეთ ფაილიდან ფუნქციები და გამოიყენეთ თქვენს მთავარ ფაილში გატესეტეთ მუშაობა Nodejs - ის გამოყენებით



const math = {
  sum: function(a, b) {
    return a + b;
  },

  substract: function(a, b) {
    return a - b; 
  },

  multiply: function(a, b) {
    return a * b;
  },

  divide: function(a, b) {
    if (b === 0) {
      return 'wrong number';
    }
    return a / b;
  }
};

module.exports = math;






// 3) აუცილებლად მოიძიეთ ინფორმაცია npm - ის შესახებ, საიდან გვაქვს npm ჩვენს კომპიუტერში, ასევე ახსენით თუ რა არის package.json და რაში ვიყენებთ ჩვენ მას