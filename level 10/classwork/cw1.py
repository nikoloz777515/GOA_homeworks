#დაწერეთ პროგრამა, რომელიც მომხმარებლს მოსთხოვს, რომ შემოიტანოს დადებითი რიცხვი. 
#თუ მომხმარებელი შემოიტანს უარყოფით რიცხვს ან ნულს, პროგრამამ უნდა მოსთხოვოს რიცხვის თავიდან შემოტანა
user_num=int(input("please enter possitive number: "))
while user_num <=0:
    print("ypur entered number isn't valid. try again")
    num=int(input("please enter possitive number: "))
print("your number was possitive.")