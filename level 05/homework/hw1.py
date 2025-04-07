#2)  ცვლადში შეინახეთ პაროლი, შემდეგ კი მომხმარებელს შემოატანინეთ პაროლი. იმ შემთხვევაში, თუ მომხმარებლის მიერ შემოტანილი პაროლი სწორია, დაბეჭდეთ "access granted". წინააღმდეგ შემთხვევაში - "access denied".

#3) მომხმარებელს შემოატანინეთ რიცხვი და დაწერეთ ისეთი პროგრამა, რომელიც განსაზღვრავს ეს რიცხვი ლუწია თუ კენტი.

#4) მომხმარებელს შემოატანინეთ 5 რიცხვი. დაწერეთ პროგრამა, რომელიც გამოთვლის და დაბეჭდავს ამ რიცხვების საშუალო არითმეტიკულს.

#5) მომხმარებელს შემოატანინეთ ტემპერატურა ცელსიუსში. დაწერეთ პროგრამა, რომელიც მომხმარებლის მიერ შემოტანილ ტემპერატურას გადაიყვანს ფარენგეიტში და დაბეჭდეთ საბოლოო შედეგი. (მოიძიეთ ფორმულა ინტერნეტში)

#6) მეხუთე დავალების მსგავსად, შემოატანინეთ მომხმარებელს ტემპერატურა, თუმცა ამჯერად ფარენგეიტში. შემდეგ კი დაწერეთ პროგრამა, რომელიც შემოტანილ ტემპერატურას ცელსიუსში გადაიყვანს და საბოლოოდ დაბეჭდეთ შედეგი.

# davaleba 2
password=input("please enter your password: ")
mypassword="nikoniko"
if password ==mypassword:
    print(   password , "access granted")
else:
    print( "access denied")




#davaleba3

num=int(input("enter number"))
if num % 2 ==0:
    print("luwia")
else: 
    print("kentia")
         
 

#davaleba4
num1 = int (input("please enter first number" ))
num2 = int (input('please enter second number'))
num3= int  (input("please enter third number"))
num4 = int (input("please enter four number"))
num5=int(input("please enter five number"))
print((num1+num2+num3+num4+num5)/5)

#davaleba 5
celsius=float(input("please enter temperature in celsius: "))
farenheit=celsius * (9/5) + 32

print("temperature in farenheit is", farenheit)
 
