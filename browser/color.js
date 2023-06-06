function getValue(event){
    return event.target.value
}
function setColor(color) {
    $("body").css("--bg", color);
    return color
}
function setCache(color){
    localStorage.setItem("bgColor", color);
    return color
}
function getCache(){
    var color = localStorage.getItem("bgColor");
    return color?color:"white";
}
const handleColor=R.pipe(getValue,setColor,setCache);

function init(){
    var color = localStorage.getItem("bgColor");
    if(color){
        setColor(color);
    }
}
// bgColor
$("#bgColor").on("change",handleColor)
$("#bgColor").val(getCache())
// bgColor:select bgColorDefault
$("#bgColorDefault").on("change", handleColor)
init()
