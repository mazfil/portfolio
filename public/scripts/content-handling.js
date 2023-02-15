function changeTab(tab){
    var i, content, tablinks;

    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++){
        content[i].style.display = "none";
    }

    document.getElementById(tab).style.display = "flex";
}