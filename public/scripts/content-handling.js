function changeTab(tab){
    var i, content, tablinks;
    var buttons = ['aboutButton', 'workButton', 'contactButton'];

    content = document.getElementsByClassName("tab");
    for (i = 0; i < content.length; i++){
        content[i].style.display = "none";
    }

    document.getElementById(tab).style.display = "block";


} 