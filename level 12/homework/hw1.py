# 3) კომენტარის სახით ჩამოწერეთ და დეტალურად განიხილეთ Control Flow-ს შემადგენელი 3 კომპონენტი.
# sequence tanmimdevroba
#cikli ragacis gameoreba
# selection ragacaze dayrdnobit azris gaketeba



# 4) კომენტარის სახით დაწერეთ თუ რას ნიშნავს იტერაცია და რით განსხვავდება for და while ციკლი ერთმანეთისგან. დაწერე ორივე ციკლის თითო მაგალითი.
#interacia aris ragacis gameoreba sanam pasuxs ar miagwevs
# for da while cikli ertmanetisgan imit gansxvavdeba rom for cikls viyenebt roca vicit interacia
#da while cikls vikenebt mashin roca ar vicit interacia #magalitebi
# num=10
# for i in range(10):
#     print(i)

# user_input = int(input ("enter a num: "))
# while user_input != 7:
#     user_input = int(input("enter a num: ")) 


# 5) დაწერეთ პროგრამა, რომელიც 1-დან 10-მდე რიცხვების ჯამს დაითვლის for ციკლით.
# sum=0
# for i in range(1,11):
#     sum+=i
# print(sum) done

# # 6) დაწერეთ მეხუთე დავალების მსგასი პროგრამა, თუმცა ამჯერად While loop-ის გამოყენებით.
# sum=0
# i=0
# while i <10:
#     sum+=i
#     i+=1
# print(sum)
         


# 7) გამოიყენეთ for ციკლი და დაბეჭდეთ 2-დან 20-ის ჩათვლით ყველა ლუწი რიცხვი.

# for i in range (2,21):
#    if i % 2 == 0 :
#print(i) done



# 8) While ციკლის საშუალებით დაბეჭდეთ ყველა კენტი რიცხვი 30-დან 70-მდე.
# i=30
# while i <70:
#     i+=1
#     if i % 2 != 0:
#         print(i)
# 9) კომენტარის სახით ახსენით თუ როგორ მუშაობს Indexing პითონში და განმარტეთ უშუალოდ Index-ის მნიშვნელობა.
# index aris ricxvis an stringis misamarti index iwyeba ricxvze an strigze 0 idan da grdzeldeba iqamde sanam ar morcheba stringi #done

# 10) რთული:
# მომხმარებელს შემოატანინეთ რიცხვი და დაწერეთ პროგრამა, რომელიც შეამოწმებს ეს რიცხვი მარტივია თუ არა. (მარტივია რიცხვი, თუ მას მხოლოდ ორი გამყოფი აქვს). მინიშნება: გამოიყენეთ For loop და % გამყოფი ოპერატორი, ასევე აუცილებლად დაგჭირდებათ პროგრამაში Boolean ნიშვნელობების გამოყენება (True და False).

# 11) მომხმარებელს შემოატანინეთ ნებისმიერი რიცხვი, შემდეგ კი 1-დან მომხმარებლის მიერ შეყვანილი რიცხვის ჩათვლით არსებული ყველა რიცხვის ჯამი გამოთვალეთ და გამოიტანეთ ეკრანზე.i
# sum=0
# user_input=int(input("please enter any number:"))
# for i in range(1,user_input):
#     sum+=i
# print(sum)
# 12) დააკვირდით მოცემულ flowchart-ს, ახსენით მისი მუშაობის პრინციპი. მისი მიხედვით შეადგინეთ პროგრამა და დაწერეთ რა შედეგს გამოიტანს კოდი იმ შემთხვევაში როცა მომხმარებელი არის 14 წლის და არ არის სტუდენტი.
user_age=int(input("enter your age: "))
if user_age >18:
    print("regular price")
elif user_age <18:
    is_student=(input("enter True or False"))
    if is_student=="True" :
        print("20% discount")
    elif is_student=="False":
        print("10% discount")