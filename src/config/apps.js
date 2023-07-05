import portfolioImg from "../assets/Images/sidenav/portfolio.svg";
import goalImg from "../assets/Images/sidenav/goal.svg";
import accountImg from "../assets/Images/sidenav/accounts.svg";
import hrImg from "../assets/Images/sidenav/hr.svg";

export const appLists = [
    {
        label : "Goals",
        id : "goals",
        icon : goalImg,
        path: "/goals"
    },
    {
        label : "Accounts",
        id : "accounts",
        icon : accountImg,
        path: "/accounts"
    },
    {
        label : "HR",
        id : "hr",
        icon : hrImg,
        path: "/hr"
    }
]

export const accessRights = {
    goals: true,
    hr:  true,
    accounts: true
}