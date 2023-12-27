function includeHTML(file, containerID){
fetch(file)
.then(response => response.text())
.then(data => document.getElementById(containerID).innerHTML = data);
}

document.addEventListener('DOMContentLoaded', function(){
includeHTML('C:/Users/20034124/Desktop/www/Assets/Common/header_navbar.html', 'header-container');
});
