# Angular after React  
January 2024
By: Mohd Aman
amaneximp@gmail.com

![](https://lh7-us.googleusercontent.com/qVwN-EYEaqPq3_IV4tb63Ml9zMFumXadCXwxIfwFZJ-iazauU_fDQyICDENkB2cY3B9KUKp588u47GV4wvdCwKqduYCQmBsmbk1rNDtfE49N-0W2393ZACBG5mqwqQAN7UkzgydvfeE6vuGWDtbZRp0 "horizontal line")

## Setting up dev environment
1.  Install latest v of nodejs    
2.  Install angular cli
    

## Start new Angular project
1.  ng new [project-name]    
2.  Select the defaut options    
3.  cd [project-name] and run ng serve
    

## File structure of an angular component:

There are three main files in an angular component dir.
1.  abc.component.ts    
2.  abc.component.css    
3.  abc.component.html     

For eg for the App component:

![](https://lh7-us.googleusercontent.com/qQ78T-kOPc7i3zbjl6F54G2zFwbdGnEiYu4fOJo_KW3hbEmO7B41GBs0gHCDk32FZkPnZpNwZjXC_A7e1-VUCbdSBFr7XGi6xn6VKMKTsypID-vmLNJ0ieWE6zg5unoHHQrQdI556V_x4Ii_945lyaA)


  
  

Here the value of the selector is used for using the component as element. Like <app-root></app-root> (check index.html for reference).

In case of app.component.ts, when we use it as <app-root></app-root>, all the files of app.component.html is rendered.

Unline in react where components class/funtions returns JSX itself all with all the state management, in angular we have separate html file and separate file for managing states and _____.

  

# Data Binding

We don't use frameworks like angular to render static html, lets add some dynamic value in our app component, Remove everything from the app.*.html file and add `<h2>Welcome to {{ title }}</h2>`. Hit save and see the now you page renders. “Welcome to [your project name]”. This value is nothing but the title property of your AppComponent class and we are calling it with double { braces. Whenever title value gets change the compoent will also get updated value dynamically.

This concept here is called data binding where we are bindfing title property tp our html using `{{}}`.

## Creating A Component
The components other than the app compoent are called child compoennts and the convention is to create all the compoennts inside the parent component. You can easily create a component using `ng generate component <component-name>` command or you can also create a component manually

1.  Create a folder inside app component name it however you want, I am calling it manual, and inside this folder create a  **manual.component.ts** file, by convetion the name of the compoent class should be as `FilenameComponent`, also just like we extend component class in React with React.Component here in angular we have to use Component decorators on our classes with some Properties aka Directives. 
here `selector` name would be how we will call this component as element in html and `template` is what we will render from this component (note that generally we use dedicated html file for rendering we are using template in this example just for simplicity, and when we have to render from html then we use anothjer directive `templateUrl` and pass path for html.
```
import { Component } from  "@angular/core";  

@Component({
selector:  'app-manual',
standalone:  true,
template:  '<h2>I am a manual component</h2>'
}) 

export  class  ManualComponent{

}
```
Now in your app.component.ts file import this newly created component
```
import { Component } from  '@angular/core';
import { ManualComponent } from  './manual/manual.component';  

@Component({
selector:  'app-root',
standalone:  true,
imports: [ManualComponent],
templateUrl:  './app.component.html',
styleUrl:  './app.component.css'
})

export  class  AppComponent {
}
```
*Note: Since I am on Angular v17 I don't use app.module.ts and import component direftlty in component.ts file* 

Now finally delete everything from your app.component.html file and add `<app-manual></app-manual>`
Hit save and your app should render:
**![](https://lh7-us.googleusercontent.com/jVKPCDPRVurX3Q-rQ3gauoSCjYo-kivNNK0e0weVg3uoMOymM3_9DmF1CNwKzby7n1I2jIveEfhCIiudCq4UyEY8akivMkJU9aea1gYTlLikDvX0cwXIjDSK5hszh8-lkeEu5FL9PoT2gYQCx5aYv4E)**
Congrats!! 🎉🥳 you succesfully created your first Angular Component.
