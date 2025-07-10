import React, { useState } from 'react'

const ReactExplained = () => {
    const [count, setcount]=useState(0); //state variable
  return (
    <div className='react-explanation-main-div'>
      <h1> this is from react explanation component </h1>
      <p>i clicked this button {count} times</p>
      <button onClick={()=>setcount(count+1)}>
            click me !
      </button>
    </div>
  )
}

export default ReactExplained

/*
React: Virtual DOM    

DOM -> document object model.
user request -> html document <p>  <h1> etc from the server.
browser createsa a tree level structure from the HTML to shpw the user the requested page to the client

tree like sttrcuture is called DOM -> representation of dicument as nodes and objects, in this case html document

real dom -> reperesation -> virtual dom
example : user-> button click -> then changes which took place were not sent to real dom rather it gets compared and the
virtual dom manipulation happens
doffing algorith


react and performance? ->  DOM manipulation, virtual dom.


------------------------------------------------------------

SPA -> single page application

type of web application -> that loads a single HTML file and dyunamically renders and updates it.

point of entry is with a single div which is not having any classname

-------------------------------------------------------------

3.jsx and Babel

jsx -> jsx is syntex extension of JS taht allows to write html wwith js.

const element = document.getElement('div');
element.innerText='hello'

->

const element = <div>hello</div> -> jsx ?  No,it is just a syntex.

Babel -> JS compiler -> JS -> browsers -> META react -> JSX- > PLAIN js -> RUN IN ANY MODEN WEB Browser

------------------------------------------------------------------------

4. one way binding
it is a data flow mechanism ->  data flows in only one direction -> data source -> UI 
server -> UI
<p> 14 <p> 

in one way data binding -> UI -> X server but server - > UI will change 
---------------------------------------------------------------------------

5. component based react -> 
1. class based component
2. fucntional based component 

---------------------------------------------------------------------

6. named export and default export
named export -> to export multiple values from a module.

export const add = (a,b) => a+b;
export const subs = (a,b)=>a-b;

----------------------------------------------------------------

7. reddit, github etc etc stackoverflow 

-----------------------------------------------------------

components

 class based components -> JS class defined components.

------------------------------------------------------------

state and props 

useState, useEffect, useMemo etc

:state -> internal data of a component, when data is passed then only state can be modified.

setState(); -> it can be modified

why? state is used to handle user input, control componenet behavior and store incomponent data


props ->properties
ui->imagine insta


ex-> reel -> share -> arrow -> messing window/ share -? arrow -> story 



state vs props

source, mutabilty , ownership, usgae, updates, defaultvalues etc



parent compoent -> child component -> then how does data flow?


--------------------------------------------------------------------

conditional rendering.

kuch hone pe something should render.

conditional rendering -> different content on certain conditions.


-------------------------------------------------------------------


life cycle methods.

component -> till it gives data on UI.

1. mounting 
2.render()
3.componenrtDidMount()

DAY-4 SELF STUDY

-----------------------------------------------------------------------

Events in JS


click something
hover on something
scrolling
loading
image loading etc etc



HTML VS React event handling
<button onclcick -"clcicksomething()">
clciked
</button>

in react

<button onClick ={clickfunction}>
clciked
</button>



we cannot return false to prevent default behavior.








*/ 