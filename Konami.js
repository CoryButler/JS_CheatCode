var konami = new Konami();

function Konami()
{
  // Private Variables
	var _pressed = [];
	var _code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];

	// Private Functions
	var codeEnteredCorrectly = function()
	{
        /* Add code here to be executed when the Konami code is entered correctly. */
	}

	var maintainPressedArrayLength = function()
	{
		_pressed.splice(-_code.length - 1, _pressed.length - _code.length);
	}

	var isEnteredCodeCorrect = function()
	{
		return _pressed.join('') === _code.join('');
	}

	// Constructor
	$(window).keyup(function(evt)
	{
		_pressed.push(evt.key);
		maintainPressedArrayLength();
		if (isEnteredCodeCorrect()) codeEnteredCorrectly();
	});
}
