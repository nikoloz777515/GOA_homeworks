# 1) კომენტარის სახით ახსენით, თუ რა დანიშნულება აქვს სიებს (lists) პითონში, დეტალურად განიხილეთ list-ების სინტაქსი და ახსენით თუ როგორ მუშაობს ინდექსინგი.
# listebis funqcia aris siis shenaxva siashi shegvidzlia chavwerot float integer bollean string ertad da aranairi problema areqneba 
#indexin mushaobs ricxvebze an stringebze da iwyebas atvla 0 idan iqamde sanam stringi an ricxvebi ar damtavrdeba
#done



# 2) შექმენით სია, სადაც შეინახავთ ჯანსაღ საკვებ პროდუქტებს. შემდეგ კი ტერმინალში დაბეჭდეთ ეს სია.
# helaty=["carrot,cabbage,beans,tomato,onion,cherry,peach,apple"]
# print(helaty) #done


# 3) შექმენით სია, სადაც შეინახავთ თქვენი საყვარელი მანქანის მოდელებს. დაბეჭდეთ ამ სიის მესამე ელემენტი.
# fav_carbrands=["mercedes","audi","bmw","ferarri"]
# print(fav_carbrands[-2]) done



# 4) შექმენით რიცხვების სია და შეინახეთ 10+ ელემენტი. შემდეგ დაბეჭდეთ ამ სიის ბოლო ელემენტი უარყოფითი ინდექსინგის გამოყენებით.
# num=["1","2","3","4","5","6","7","8","9","10","11","12"]
# print(num[-1]) done

# 5) შექმენით სია და მასში შეინახეთ 5 ფილმის სახელწოდება. დაბეჭდეთ ამ სიის მეორე და მეოთხე ინდექსზე მდგომი ელემენტები. (sclicing-ის გამოყენების გარეშე).
# films=("hangover","tba","qerchi","evroturi","chachrilebi")
# print(films[1],films[3]) done



# 6) ვისაც წინა საშინაო დავალება არ გაგიკეთებიათ, დაფიქრდით და აუცილებლად გააკეთეთ:
# მომხმარებელს შემოატანინეთ რიცხვი და დაწერეთ პროგრამა, რომელიც შეამოწმებს ეს რიცხვი მარტივია თუ არა. (მარტივია რიცხვი, თუ მას მხოლოდ ორი გამყოფი აქვს). მინიშნება: გამოიყენეთ For loop და % გამყოფი ოპერატორი, ასევე აუცილებლად დაგჭირდებათ პროგრამაში Boolean ნიშვნელობების გამოყენება (True და False).
num=0
user_input=int(input("enter a number: "))

for i in range(user_input):
    user_input+=num
if user_input % 2 ==0:
        print("True")
else:
        print("False")
# 7) გაიარეთ Sololearn - More on conditional statements-ებიდან lists ჩათვლით