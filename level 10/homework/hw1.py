#1) აუცილებლად გადახედეთ ჩანაწერს;

#2) მოიყვანეთ while loop-ის მაგალითი და კომენტარის სახით ახსენით, თუ როგორ მუშაობს while ციკლი;

#3) კომენტარის სახით ახსენით თუ რა განსხვავებაა for loop-სა და while loop-ს შორის;

#4) ცვლადში შეინახეთ პაროლი. შემდეგ მომხმარებელს შემოატანინეთ პაროლი, სანამ მომხმარებლის მიერ შემოტანილი პაროლი არ დაემთხვევა თქვენს პაროლს, გამოუტანეთ "Incorrect password. Try again". იმ შემთხვევაში თუ ეს პაროლები ერთმანეთს დაემთხვევა გამოიტანეთ "Correct password. You have successfully logged in." (გააკეთეთ While ციკლით, არ გამოიყენოთ if else statement-ები.);

#5) ტერმინალში დაბეჭდეთ რიცხვები 1-დან 20-ის ჩათვლით ორ-ორის გამოტოვებით.

#6) Sololearn-ში გაიარეთ While loops სექცია:
#1 davaleba gadaxedilia
# davaleba 2 while loop aris cikli romelic gamoiyeneba mxolod mashin tu vicit ricxvis an momxmareblis shemotanili ragacis interacia
num=int(input("enter number: "))
while num <=5:
    print("bad")
    num=int(input("enter number: "))
print("good number")
#davaleba 3 for loop aris is rac  gamoiyeneba mashin roca vicit ricxvis an shemotanili ragacis interacia
#for while loop aris is rac gamoiyeneba mashin roca ar vicit shemotanili ricxvis an ragacis interacia
#davaleba 4
num1=("nika12")
num2=int(input("please enter password: "))
while num2 :
   print("Incorrect password.")
   num2=int(input("please enter password: "))
   while num1:
       print("Correct password you. you have successfully logged in")