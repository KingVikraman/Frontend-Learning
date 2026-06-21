let title = document.getElementById("title");
let button = document.getElementById("button");

button.addEventListener("click", function()
{
	if(title.textContent == "Raja Vikraman")
	{
		title.textContent = "Welcome Raja";
	}
	else
	{
		title.textContent = ("Raja Vikraman");
	}
});


// Wait for click.
// ↓
// Read current text.
// ↓
// If current text is Raja Vikraman.
// ↓
// Show Welcome Raja.
// ↓
// Else.
// ↓
// Show Raja Vikraman.