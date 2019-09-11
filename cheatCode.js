(function () {
	const _code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
	const _codeLength = _code.length;
	const _codeJoined = _code.join("");
	let _pressed = [];

	const maintainPressedLength = () => { _pressed.splice(-_codeLength - 1, _pressed.length - _codeLength); }
	const isEnteredCodeCorrect = () => { return _pressed.join("") === _codeJoined; }
	const codeEnteredCorrectly = () => { /* code to be executed when the cheat code is entered */ }

	$(window).keyup(evt => {
		_pressed.push(evt.key);
		maintainPressedLength();
		if (isEnteredCodeCorrect()) codeEnteredCorrectly();
	});
})();