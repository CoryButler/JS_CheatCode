# JS Cheat Code
Add cheat codes to a webpage.
***
### Update either cheatCode.js or cheatCode_simple.js.
#### Update cheat code functions
Add a function to run upon entering a cheat code.

`const showAlert_konami = () => { alert("You entered the Konami code."); }`

#### Update cheat codes
Add a code object to the _codes array.
```
{
  func: function from functions above,
  code: array of cheat code keys in the order they need to be entered }
}
```
***
### Import either cheatCode.js or cheatCode_simple.js.
### cheatCode.js (class)
Import the class into another JS file.

`import {CheatCode} from './cheatCode.js';`

### cheatCode_simple.js
Import cheatCode_simple.js in the HTML.

`<script type="text/javascript" src="cheatCode_simple.js"></script>`