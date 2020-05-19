import M from "materialize-css/dist/js/materialize";
const data = require("./datasource");
function initComponents() { 
	var sidenav = document.querySelectorAll('.sidenav');
	var slider = document.querySelectorAll('.slider');
	var collapsible = document.querySelectorAll('.collapsible');
	// var tabs = document.querySelectorAll('.tabs');
	
    M.Sidenav.init(sidenav);
	M.Slider.init(slider);
	M.Collapsible.init(collapsible);
	// M.Tabs.init(tabs);
}

const loadPage = (page) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4){
            var content = document.querySelector(".content");
            if(this.status == 200) {
                content.innerHTML = xhr.responseText;
                initComponents();
                switch (page) {
                    case "home":
                        data.showStanding();
                        break;
                    case "matches":
                        data.showMatches();
                        break;
                    case "teams":
                        data.showTeams();
                        break;
                    case "favorite":
                        data.showFavTeams();
                        break;
                    default:
                        break;
                }
            } else if(this.status == 404) {
                content.innerHTML = "<p>Not Found</p>";
            } else {
                content.innerHTML = "<p>Forbidden</p>";
            }
        }
    };
    xhr.open("GET", 'pages/'+page+'.html', true);
    xhr.send();
}

const loadNav = () => {
    document.querySelectorAll('.sidenav a, .topnav a').forEach(function(el){
        el.addEventListener('click', function(ev){
            const sidenav = document.querySelector('.sidenav');
            M.Sidenav.getInstance(sidenav).close();
            
            const page = ev.target.getAttribute('href').substr(1);
            loadPage(page);
        });
    });
}

const ui = () => { 
    document.addEventListener("DOMContentLoaded",function () {
	    loadNav();
        let page = window.location.hash.substr(1);
        if(page == '') page = 'home';
        loadPage(page);
    })
}
export default ui;