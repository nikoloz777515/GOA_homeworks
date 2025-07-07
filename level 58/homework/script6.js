// <!-- 6) შექმენით ერთი ცვლადი სახელად role მაში შეინახეთ რაიმე role - ი მაგალითად (moderator, admin, user), switch - ის გამოყენებით შეამოწმეთ თუ role - ი არის admin - ი console ში გამოიტენეთ რომ "You Have Full Access" moderator - ის შემთხვევაში გამოიტანეთ "You Can Manage The Content", user - ის შემთხვევაში გამოიტანეთ "You Can View The Content"  სხვა შემთხვევაში კი "Access Denied" or "Invalid Role" -->

let roles = 'admin'

switch (roles) {
    case 'moderator':
        window.alert("You Can Manage The Content")
        break;

    case 'admin':
        window.alert("You Have Full Access")
        break;

    case 'user':
        window.alert("You Can View The Content")
        break;

    default:
        window.alert("Invalid Role")

}