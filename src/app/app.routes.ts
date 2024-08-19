import { Routes } from '@angular/router';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartsComponent } from './layout/pages/carts/carts.component';
import { ProductDetailsComponent } from './layout/addation/product-details/product-details.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { NotfoundComponent } from './layout/addation/notfound/notfound.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';

export const routes: Routes = [
    {path : "" , redirectTo:"login" , pathMatch:"full"},
    {path: "login" , component:LoginComponent},
    {path: "register" , component:RegisterComponent},
    {path: "home" , component:HomeComponent},
    {path: "cart" , component:CartsComponent},
    {path: "products" , component:ProductDetailsComponent},
    {path: "brands" , component:BrandsComponent},
    {path: "categries" , component:CategoriesComponent},
    {path: "**" , component:NotfoundComponent},
];
