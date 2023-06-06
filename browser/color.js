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
const handleColorCache=R.pipe(getCache,setColor);
function init(){
    handleColorCache();
}
// bgColor
$("#bgColor").on("change",handleColor)
$("#bgColor").val(getCache())
// bgColor:select bgColorDefault
$("#bgColorDefault").on("change", handleColor)
init()
