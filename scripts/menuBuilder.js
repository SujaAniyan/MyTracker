var _ = require("underscore");

var constants	= require('../scripts/constants');
var logger 		= require(constants.paths.scripts + '/logger');
var util 			= require(constants.paths.scripts + '/util');
var secure 		= require(constants.paths.scripts + '/secure');
var menuDef 	= require(constants.paths.views + '/assets/menuDef');
var routeDef 	= require(constants.paths.views + '/assets/routeDef');

var menuBuilder = {};

menuBuilder.getMenu = getMenu;
menuBuilder.getDefaultPage = getDefaultPage;

module.exports = menuBuilder;

function getMenu(user, type){
    var menu = [];
	menu.push("<div class='sb-menu'>");
	menu.push("<ul>")

	menuDef.items.forEach(function(item){
		//if(secure.isInAnyGroups(user, item.roles)){
			menu.push("<li class='sidebar-item'>");
			menu.push(util.formatString("<a  href='%s'>", item.link));
			menu.push(util.formatString("<i class='menu-icon fa %s fonticon'></i>", item.icon));
			menu.push(util.formatString("%s</a>",item.name));
			menu.push("</a></li>");           
		//} // end of if condition
	}); // end of for each block

    //menu.push("<div id='tabsI'>");
   // menu.push("<ul>"); 
    /*for(i = 0; i < user.folders.length; i++){
        console.log("user.folders[i] = ", user.folders[i]);
        menu.push(util.formatString("<li><a  href='%s' title='Folders'><span>" + user.folders[i].folderName + "</span></a></li>", user.folders[i].folderName));
    }*/
    /*menu.push("<li><a href='#folders' title='Folders''><span>Folders</span></a></li>");
    menu.push("<li><a href='#labels' title='Labels'><span>Labels</span></a></li>");
    menu.push("<li><a href='#filters' title='Filters'><span>Filters</span></a></li>"); 
    menu.push("<div class='items'>");
    menu.push("<div id='folders'>... item 1... </div>");
    menu.push("<div id='labels'>... item 2... </div>");
    menu.push("<div id='filters'>... item 3... </div></div>");*/
    
    menu.push("<div class='tabbed-area'> <ul class='tabs group'><li><a href='#box-one'>Tab 1</a></li> <li><a href='#box-two'>Tab 2</a></li> <li><a href='#box-three'>Tab 3</a></li></ul>");
    menu.push("<div class='box-wrap'> <div id='box-one'>box two content </div> <div id='box-two'>box two content</div><div id='box-three'>box two content</div></div>div>");  
    
    //menu.push("</ul></div>");
	menu.push("</ul>")
	menu.push("</div>");
	return(menu.join("\n"));
} // end of getMenu()

function showFolders(){
    console.log("herereeeeeeerre");
     if(user.folders != undefined){
         for(i = 0; i < user.folders.length; i++){
            console.log("user.folders[i] = ", user.folders[i]);
            menu.push(util.formatString("<li class='sidebar-item'><a  href='%s'><span>" + user.folders[i].folderName + "</span></a></li>", user.folders[i].folderName));
        }
     }
}

function getDefaultPage(user, type){
	//var grps = secure.getGroups(user).split(',');
	var seg = routeDef['mobile'];
	var path = seg['admin'];
	return path;
}