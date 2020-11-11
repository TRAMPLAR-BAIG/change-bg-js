var btn_change_color = document.getElementById("btn_change_color");
btn_change_color.addEventListener('click', change_colorf);
btn_change_color.addEventListener('mouseover', change_cursorf);


let colors = ["White","Silver","Gray ","Black","Red ","Maroon","Yellow","Olive",
"Lime",	"Green","Aqua",	"Teal",	"Blue",	"Navy",	"Fuchsia","Purple"];


function change_colorf(){
    color_index = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[color_index];
    console.log(colors[color_index]);
}

function change_cursorf(){
    btn_change_color.style.cursor = "pointer";
}