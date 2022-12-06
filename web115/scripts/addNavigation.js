var pages = {
	Home : "index.html",
	Introduction : "introduction.html",
	Contract : "contract.html",
	Brand : "brand.html",
	TOC : "toc.html"
};
var leveNavlOffset = "";

function addLogo(navigation) 
{
	
	var logo = document.createElement("div"); // create div element
	var a = document.createElement("a");			
	var logoLink  = leveNavlOffset + "index.html";


	a.setAttribute("href", logoLink); 
	var headerTemp = document.createElement("h1");
	headerTemp.appendChild(document.createTextNode("Joseph Velez's WEB115"));
	a.appendChild(headerTemp); 
	logo.appendChild(a);
	navigation.appendChild(logo);
}
function addNavigationBar(navigation)
{
	var navUl = document.createElement("ul");
	for(var key in pages)
	{
		var value = pages[key];				
		var navLi = document.createElement("li");
		var a = document.createElement("a");
		
		value = leveNavlOffset + value;

		a.setAttribute("href", value);
		
		if (location.pathname.indexOf(value) > -1) { a.setAttribute("class", "active"); } 
		a.appendChild(document.createTextNode(key));
		navLi.appendChild(a);
		navUl.appendChild(navLi);				
	}			
	navigation.appendChild(navUl);
}
function addNavigation(level = 0)
{
	for (var i = 0; i < level; i++)
	{
		leveNavlOffset = "../" + leveNavlOffset;
	}	
	
	var body = document.body;
	var headerNav = document.createElement("header");
	var navigation = document.createElement("nav");
	
	addLogo(navigation, level);
	addNavigationBar(navigation, level);
	
	headerNav.appendChild(navigation);			
	body.appendChild(headerNav);
}
