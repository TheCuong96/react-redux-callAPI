import React, { Component } from "react";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import ProductActionPage from "./ProductActionPage";
import ProductListPage from "./ProductListPage";

const routes = [
    {
        path:'/',
        exact:true,
        main: () => <HomePage/>
    },
    {
        path:'/product-list',
        exact:false,
        main: () => <ProductListPage/>
    },
    {
        path:'/product/add',
        exact:false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path:'/product/:id/edit',
        exact:false,
        main: ({match,history}) => <ProductActionPage match={match,history}/>
    },
    {
        path:'',
        exact:false,
        main: () => <NotFound/>
    }
]
export default routes;