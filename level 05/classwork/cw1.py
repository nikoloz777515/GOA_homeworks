# shows your name

name = input ("please enter first name: ")
print("entered value is: " + name )
#enter your last name 

lastname = input ("please enter last name: ")
print("entered value is: " + lastname)
#shows your age 

age = input ("please enter your age: ")
print("entered value is: " + age)
# davaleba 2

num1 = int(input("please enter first number: "))
num2 = int(input("please enter second number: "))

print(num1 + num2)
print(num1 - num2)
print(num1 * num2)
print(num1 / num2)

#davaleba 3

# BONUS:
# შექმენით პროგრამა სადაც მომხმარებელს შემოატანინებთ სახელს და ასაკს, შემდეგ შეამოწმეთ ასაკი, თუ ასაკი >= 18 დაუბეჭდეთ რომ მას შეუძლია შევიდეს კლუბში, სხვა შემთხვევაში დაუბეჭდეთ რომ არ შეუძლია.
name=input("please enter your name: " )
age=int(input("please enter your age: "))
if age >= 18:
    print(name ,"you can enter in the club")
else:
    print(name , "you cannt enter club")

