import { lazy, LazyExoticComponent } from "react";
type JSXComponents = ()=> JSX.Element

interface Route{
    to:string;
    path:string;
    Component:LazyExoticComponent<JSXComponents> | JSXComponents;
    name:string;

}

const Main = lazy(()=>import('../e-comerce/pages/PageMain'))
const Hoodie = lazy(()=>import('../e-comerce/pages/PageHoodie'))
const Pants= lazy(()=>import('../e-comerce/pages/PagePants'))
const Products = lazy(()=>import('../e-comerce/pages/PageProducts'))
const Snakers = lazy(()=>import('../e-comerce/pages/PageSnakers'))


export const routes : Route[]=[

    {
        to:'/main',
        path:'main',
        Component:Main,
        name:'Main'
    },
    {
        to:'/hoodie',
        path:'hoodie',
        Component:Hoodie,
        name:'Hoodie'
    },
    {
        to:'/pants',
        path:'pants',
        Component:Pants,
        name:'Pants'
    },
    {
        to:'/products',
        path:'products',
        Component:Products,
        name:"Products"
    },
    {
        to:'/snakers',
        path:'snakers',
        Component:Snakers,
        name:"Snakers"
    },
    
]