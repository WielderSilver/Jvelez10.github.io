var footerLinks = {
	"Github" : "https://github.com/jvelez10",
	"Github Page" : "https://jvelez10.github.io/",
	"Github Page WEB115" : "https://github.com/Jvelez10/Jvelez10.github.io",
	"Freecodecamp" : "https://www.freecodecamp.org/Jvelez10",
	"CodeAcademy" : "https://www.codecademy.com/profiles/Jvelez10",
	"JSFiddle" : "https://jsfiddle.net/user/Jvelez10/fiddles/",
	"LinkedIn Learning" : "https://www.linkedin.com/learning/me/my-library/in-progress?u=76141674"
};
var levelFooterOffset = "";

function addValImage(src,alt)
{
	var img = document.createElement("img");
	img.setAttribute("src",src);
	img.setAttribute("alt",alt);
	img.setAttribute("height","31");
	img.setAttribute("width","88");
	img.setAttribute("style","border:0px;");
	return img;
}

function addValidation(footer)
{
	var validation = document.createElement("div");
	var html = document.createElement("a");
	html.setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
	html.appendChild(addValImage(levelFooterOffset +"Images/valid-html-blue.png", "Valid HTML 5"));
	var css = document.createElement("a");
	css.setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
	css.appendChild(addValImage(levelFooterOffset + "https://jigsaw.w3.org/css-validator/images/vcss-blue", "Valid CSS"));
	validation.appendChild(html);
	validation.appendChild(css);
	footer.appendChild(validation);
}

function addDesignBy(footer)
{
	var design = document.createElement("div");
	design.appendChild(document.createTextNode("Page built by Silverbeam Industires"));
	footer.appendChild(design);
}

function addLinks(footer)
{
	var links = document.createElement("div");
	// extra code to not add separator for last element.
	var dictLength = Object.keys(footerLinks).length;
	var lastkey = Object.keys(footerLinks)[dictLength-1];
	
	for (var key in footerLinks)
	{
		var value = footerLinks[key];
		var a = document.createElement("a");
		a.setAttribute("href",value);
		a.appendChild(document.createTextNode(key));				
		links.appendChild(a);
		if(key != lastkey) links.appendChild(document.createTextNode(" | "));
	}
	footer.appendChild(links);
}

function addFooter(level = 0)
{
	for (var i = 0; i < level; i++)
	{
		levelFooterOffset = "../" + levelFooterOffset;
	}	
	
	var body = document.body;
	var footer = document.createElement("footer");
	addLinks(footer);
	footer.appendChild(document.createElement("br"));
	footer.appendChild(document.createElement("br"));
	addDesignBy(footer);
	footer.appendChild(document.createElement("br"));
	addValidation(footer, level);			
	body.appendChild(footer);
}
