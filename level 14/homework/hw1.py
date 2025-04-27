# 1) ცვლადში შეინახეთ თქვენი სახელი. შემდეგ ინდექსინგის მეშვეობით ეკრანზე გამოიტანეთ სტრინგიდან ყველა ის ასო, რომელიც არის ხმოვანი.
# name=("nikolozi")
# print(name[1],name[3],name[5],name[7]) done



# 2)True or False? Strings are mutable, Lists are immutable.
# False done




# 3) ახსენით თუ რატომ არის სწორი/არასწორი მეორე დავალებაში მოცემული წინადადება.
# imitom aris araswori rom strings strings verafers vershevucvlit ucvlelia 
# da listebs shevucvlit radgan listebi cvladia da shegvidzlia davamatot rame done



# 4) ცვლადში შეინახეთ ცარიელი სია. input-ის მეშვეობით მომხმარებელს შემოატანინეთ ინფორმაცია საკუთარი თავის შესახებ. (მაგ. სახელი, გვარი, ასაკი, დაბადების თარიღი, სიმაღლე და ა.შ.)მომხმარებელმა მინიმუმ უნდა შემოიტანოს 8 input. ეს ყოველივე input დაამატეთ თქვენს მიერ შექმნილ ცარიელ სიაში.
about_user=[]

name=input("please enter your name: ")
name.append(name)
lastname =input("please enter your last name: ")
age=int(input("please enter your age: "))
height=int(input("please enter your height: "))
email=input("please enter your email adress: ")
nationality=input("please enter your nationality: ")
phone_number=int(input("please enter your phone number:  "))
adress=input("please enter your street adress: ")


print(about_user)

# 5) დაასრულეთ საკლასო დავალებები. (ეცადეთ თქვენით გააკეთოთ სანამ ჩანაწერს გადახედავთ ):

#  • მომხმარებელს შემოატანინეთ 10 მნიშვნელობა სიაში (For loop-ის მეშვეობით. ) შემდეგ გამოიყენეთ კიდევ ერთი for loop, გადაუარეთ თითოეულ სიის ელემენტს და შამოწმეთ ეს რიცხვები ლუწია თუ კენტი.

# • მომხმარებელს შემოატანინეთ 5 სახეთი, შემდეგ კი კიდევ ერთი for loop გამოიყენეთ რათა გაიგოთ ამ სახელებში სიმბოლოების რაოდენობა აღემატება თუ არა 5-ს. თუ აღემატება დაუბეჭდეთ "the name consists of more than five letters).
# numbers=[0]
# for i in range (5):
#     numbers=int(input("please enter number"))
# i+=numbers
# for numbers in range(6):
#     if numbers % 2==0:
#          print("even")
# else:
#     print("odd")
#  • შექმენით სია, რომელშიც დაამატებთ ჯანსაღ საკვებ პროდუქტებს. (იყოს მინიმუმ 5 პროდუქტი). ამოშალეთ სიის პირველი და ბოლო ელემენტები და ტერმინალში დაბეჭდეთ სიის განახლებული ვერსია. 
# helaty=["peach","cucumber","tomato","carrot","alucha"]
# helaty.pop(0)
# helaty.pop()
# print(helaty) done



# • შექმენით რიცხვების სია, რომელშიც მინიმუმ გექნებათ 5 ელემენტი. ამ 5 ელემენტიდან 1 განსხვავებული ელემენტი იქნება. ეს ელემენტი უნდა იყოს მოთავსებული დაახლოების სიის შუაში. (არ უნდა იყოს სიის დასაწყისში ან დასასრულში). თქვენი დავალებაა დაწეროთ პროგრამა და იპოვოთ ეს განსხვავებული ელემენტი მოცემულ სიაში. (მინიშნება: სიის დალაგება)


# numbers=[7,7,7,7,7,7,1,7,7,7]
# sorted_numbers=sorted(numbers)
# print(sorted_numbers) done