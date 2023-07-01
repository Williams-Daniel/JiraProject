import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Block/Layout"
import HomePage from "../Pages/HomePage"
import SignIn from "../Pages/Register/SignIn"
import SignUp from "../Pages/Register/SignUp"

const MainRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<HomePage/>
                },
                {
                    path:"sign-in",
                    element:<SignIn/>
                },
                {
                    path:"sign-up",
                    element:<SignUp/>
                },
            ]
        }
    ]
)

export default MainRouter