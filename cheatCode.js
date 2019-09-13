// Uncomment to get key names when building your cheat code.
// (() => { window.addEventListener("keyup", evt => { console.log(evt.key); }); })();

(() => {
	const showAlert_konami = () => { alert("You entered the Konami code."); }
	const showAlert_metroid = () => { alert("You entered a Metroid code."); }
	const showAlert_mortalKombat = () => { alert("You entered a Mortal Kombat code."); }

	const _codes = [
		{ func: showAlert_konami, 
		code: ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"] },
		{ func: showAlert_metroid,
		code: ["j", "u", "s", "t", "i", "n", "b", "a", "i", "l", "e", "y"] },
		{ func: showAlert_mortalKombat,
		code: ["a", "b", "a", "c", "a", "b", "b"] }
	];

	let _pressed = [];
	const _pressedLimit = _codes.reduce((a, b) => { return a.code.length > b.code.length ? a : b }).code.length;

	const maintainPressedLength = () => { _pressed.splice(-_pressedLimit - 1, _pressed.length - _pressedLimit); }
	const isEnteredCodeCorrect = () => {
		let p = _pressed.join("");
		_codes.forEach(c => {
			if (p.includes(c.code.join(""))) {
				c.func();
				_pressed = [];
			}
		});
	}

	window.addEventListener("keyup", evt => {
		_pressed.push(evt.key);
		maintainPressedLength();
		isEnteredCodeCorrect();
	});
})();
