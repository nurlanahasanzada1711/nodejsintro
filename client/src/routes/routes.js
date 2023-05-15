import AddProduct from "../pages/Admin/AddProduct";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import ProductDetail from "../pages/Admin/ProductDetail";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import AddProducts from "../pages/AddProducts";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";

export const ROUTES = [
    //Main Root - user side
    {
        path:'/',
        element:<MainRoot/>,
        children: [
            {
                path:'',
                element: <Products/>
            },
            {
                path: 'productDetail',
                element: <ProductDetail/>
            },
            {
                path: 'addProducts',
                element: <AddProducts/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    }
]