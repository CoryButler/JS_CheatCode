export class CheatCode {
    constructor(logKeysToConsole = false) {

        /*
        *	Editable area start =========================================================
        */

        // Functions to run upon entering a cheat code.
        const showAlert_konami = () => { alert("You entered the Konami code."); }
        const showAlert_metroid = () => { alert("You entered a Metroid code."); }
        const showAlert_mortalKombat = () => { alert("You entered a Mortal Kombat code."); }

        // { func: function from functions above, code: array of cheat code keys in the order they need to be entered }
        const _codes = [
            { func: showAlert_konami, 
            code: ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"] },
            { func: showAlert_metroid,
            code: ["j", "u", "s", "t", "i", "n", "b", "a", "i", "l", "e", "y"] },
            { func: showAlert_mortalKombat,
            code: ["a", "b", "a", "c", "a", "b", "b"] }
        ];

        /*
        *	Editable area end ===========================================================
        */

        

        // Find length of longest code.
        const _pressedLimit = _codes.reduce((a, b) => { return a.code.length > b.code.length ? a : b }).code.length;

        // Array of recently pressed keys
        let _pressed = [];

        // Limit the length of _pressed.
        const maintainPressedLength = () => { _pressed.splice(-_pressedLimit - 1, _pressed.length - _pressedLimit); }

        // Check if a full cheat code has been entered,
        // execute the associated function,
        // and clear out _pressed.
        const isEnteredCodeCorrect = () => {
            let p = _pressed.join("");
            _codes.forEach(c => {
                if (p.includes(c.code.join(""))) {
                    c.func();
                    _pressed = [];
                }
            });
        }

        // When a key is pressed, add it to _pressed,
        // limit the length of _pressed if needed,
        // and check it a full cheat code has been entered.
        window.addEventListener("keyup", evt => {
            _pressed.push(evt.key);
            maintainPressedLength();
            isEnteredCodeCorrect();
        });

        // Log the entered keys to the console as they are pressed.
        // This is useful when building your cheat code.
        if (logKeysToConsole) { window.addEventListener("keyup", evt => { console.log(evt.key); }); }
    }
}