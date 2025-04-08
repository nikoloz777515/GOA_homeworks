#1) კომენტარის სახით ჩამოწერეთ and და or ლოგიკური ოპერატორების ყველა შესაძლო გამოსახულება. ამასთანავე, მიუწერეთ თუ რა იქნება თითოეული ოპერაციის შედეგი.

#2) ტერმინალში გაშვების გარეშე დაადგინეთ თუ რას გამოიტანს მოცემული კოდი:
True and False or True or True and False
#ბოლოს კი გაუშვით ეს კოდი და შეამოწმეთ თქვენი ვარაუდი გამართლდა თუ არა.

#3) მომხმარებელს შემოატანინე ორი რიცხვი, შეამოწმე არის თუ არა ეს რიცხვები ერთმანეთის ტოლი და შედეგი გამოიტანე ტერმინალში. (შედეგი Boolean მნიშვნელობის უნდა იყოს.)

#4) მომხმარებელს შემოატანინე მისი შემაფასებელი ქულა (0-დან 100-ის ჩათვლით).

#• იმ შემთხვევაში თუ შემოტანილი ქულა მეტია ან ტოლია 90-ის, ტერმინალში გამოიტანე "Grade A".
# თუ მისი ქულა მეტია ან ტოლია 70-ზე გამოიტანე "Grade B". 
#• თუ მომხმარებლის ქულა მეტია ან ტოლია 50-ზე ტერმინალში დაბეჭდე "Grade C"
#• ყველა დანარჩენ შემთხვევაში გამოიტანე  "Grade F"

#5) მომხმარებელს შემოატანინე მთელი რიცხვი. იმ შემთხვევაში, თუ ეს რიცხვი არის ლუწი და ამავდროულად არის 10-ზე მეტი, დაბეჭდე True. ყველა სხვა შემთხვევაში False. 

#davaleba1
# and 
print(True and False) #False
print(False and True) #False
print(False and False) #False
print(True and True) #True
 # or
print(True or False) #True
print(False or True) #True
print(False or False) #False
print(True or True) #True

#davaleba2
print (True and False or True or True and False)


#davaleba 3
num1=int(input("please enter first number: "))
num2=int(input("please enter second number: "))

print(num1 == num2)

#davaleba 4
num1=input(("please rate your self: "))
if num1>=90:
    print("Grade A")
elif num1>=70:
    print("Grade B")
elif num1>=50:
    print("Grade C")
else:
    print("Grade F")


#davaleba 5
num=int(input("please enter first number: "))
if num % 2 ==0 and num>10:
    print("True")
else:
    print("False")