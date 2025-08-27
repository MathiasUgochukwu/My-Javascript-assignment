document.body.style.backgroundColor = "lightgreen ";
document.body.style.textAlign = "center";
document.body.style.padding = "100px";
document.body.fontFamily = "Times New Roman";


//login-header styling

let loginHeader = document.getElementById("loginHeader");
loginHeader.style.background ="gray";
loginHeader.style.color = "white";
loginHeader.style.fontsize = "24px";
loginHeader.style.borderRadius = "5px";
loginHeader.style.padding = "10px 20px";    

// Style container
container.style.width = "300px";
container.style.margin = "100px auto";
container.style.padding = "20px";
container.style.borderRadius = "8px";
container.style.textAlign = "center";  

//login-button styling

let loginButton = document.getElementById("loginHeader");
loginButton.style.background = "gray";
loginButton.style.cursor = "cursor" ;
loginButton.style.padding = "10px 20px";
loginButton.style.border = "2px solid black";
loginButton.style.borderRadius = "5px";


loginButton.onmouseout = function (hovered) {
    loginButton.style.color = "gray" ;
};
loginButton.onmouseout = function (notHovered) {
    loginButton.style.color = "black"
};

let container = document.getElementById("container");
container.style.borderBlock = "3px solid gray";
// container.body.style.width = "500px"

