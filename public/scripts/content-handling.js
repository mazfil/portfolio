function changeTab(tab, button){
    var i, content, tablinks;
    var btns = ['aboutButton', 'workButton', 'contactButton'];

    content = document.getElementsByClassName("tab");
    for (i = 0; i < content.length; i++){
        content[i].style.display = "none";
    }

    document.getElementById(tab).style.display = "block";

    titles = document.getElementsByClassName("button");
    for (i = 0; i < titles.length; i++){
        titles[i].style.textDecoration = "none"
    }

    document.getElementById(button).style.textDecoration = "underline";

} 