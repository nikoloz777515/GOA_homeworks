#დაწერეთ პროგრამა, რომელიც მომხმარებლს მოსთხოვს, რომ შემოიტანოს დადებითი რიცხვი. 
#თუ მომხმარებელი შემოიტანს უარყოფით რიცხვს ან ნულს, პროგრამამ უნდა მოსთხოვოს რიცხვის თავიდან შემოტანა
num=int(input("please enter possitive numbers: "))
while num <=0:
    print("wrong possitive number try again")
    num=int(input("please enter possitive numbers: "))
    print("your number was possitive")