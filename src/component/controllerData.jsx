
import NormalFilterHOC from "./filter_hoc/NormalFilterHOC";
import FilterProducts from "./pages/FilterProducts";
import ListProducts from "./pages/ListProducts";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";

// single array to controll sidebar navs
export const navlinks=[
{path:"Users",icon:"bi bi-people-fill",comp:<ListProducts/>},
{path:"Home",icon:"bi bi-house-fill",comp:<NormalFilterHOC Comp={FilterProducts} placeholder='Search using Normal HOC'/>},
{path:"Login",icon:"bi bi-key-fill",comp:<Login/>},
{path:"SignUp",icon:"bi bi-pencil-square",comp:<Signup/>},
{path:"Profile",icon:"bi bi-person-bounding-box",comp:<Profile/>},
{path:"Settings",icon:"bi bi-gear-fill",comp:<Settings/>},
]

// this is the initial valuer of context api
export const initialStateValue = {
    users: [{
        name:'Jai Verma',
      email:'jai@gmail.com',
      password:'2222'
    }],
    loading:false,
    cart: [],
    products: [],
    searchInput:'',
    searchInputDebounce:'',
    session: {},
  };