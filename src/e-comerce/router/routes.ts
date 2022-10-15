import { lazy, LazyExoticComponent } from "react";
type JSXComponents = ()=> JSX.Element

interface Route{
    to:string;
    path:string;
    Component:LazyExoticComponent<JSXComponents> | JSXComponents;
    name:string;

}

const Main = lazy(()=>import('../pages/PageMain'))
const Hoodie = lazy(()=>import('../pages/PageHoodie'))
const Pants= lazy(()=>import('../pages/PagePants'))
const Products = lazy(()=>import('../pages/PageProducts'))
const Snakers = lazy(()=>import('../pages/PageSnakers'))


export const routes : Route[]=[

    {
        to:'/main',
        path:'main',
        Component:Main,
        name:'Home'
    },
    {
        to:'category/hoodie',
        path:'category/:id',
        Component:Hoodie,
        name:'Hoodies'
    },
    {
        to:'category/pants',
        path:'category/:id',
        Component:Pants,
        name:'Pantalones'
    },
    {
        to:'category/snaker',
        path:'category/:id',
        Component:Snakers,
        name:"Snakers"
    },
    {
        to:'products',
        path:'products',
        Component:Products,
        name:"Productos"
    },
    
]