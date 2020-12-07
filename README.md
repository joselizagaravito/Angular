# Login demo app in Angular 10
An angular application has been created that will help you with a basic structure with public components and private components.

to complete the application use the command:
> npm install --save-dev @angular-devkit/build-angular

 ```
-Inventory
---Ext
-----Login
-----HomePage
-----external-routing.module.ts
-----external.module.ts
---Pages
-----Categories
-------List
-------Add
-------Update
-----Products
-------List
-------Add
-------Update
-------Unsubscribe
```

# Basic commands for creating the structure manually
```
> ng new Inventory
> ng g module ext/external --flat --routing --dryRun=true
> ng g module pages/pages --flat --routing --dryRun=true
> ng g components ext/Login --skipTests=true --dryRun=true
> ng g components ext/HomePage --skipTests=true --dryRun=true
> ng g class ext/Login/loginRequest --skipTests=true --dryRun=true
> ng g class ext/Login/loginResponse --skipTests=true --dryRun=true
```
