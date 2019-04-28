// //code snippets
// var code_snippet_button = document.getElementsByClassName('toggle-snippet');
//
// let vm = this;
// console.log(code_snippet_button)
//
// code_snippet_button.addEventListener("click", function (event) {
// var code_snippet = document.getElementById(vm.dataset.target);
// console.log('clicked', code_snippet);
// setInterval(function () {
//
// if(code_snippet.style.display == "") {
// code_snippet.style.display = "none";
// }
// else {
// code_snippet.style.display = "";
// }
// })
// });

var cy_dropdown = document.getElementsByClassName("menu_dropdown");
var i;

for (i = 0; i < cy_dropdown.length; i++) {
    cy_dropdown[i].addEventListener("click", function () {
        this.classList.toggle("dropdown_active");
        var parent = this.closest(".has_dropdown");

        if (parent.classList.contains('active')) {
            parent.classList.toggle('active');
        } else {
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.maxHeight === "5000px") {
                dropdownContent.style.maxHeight = "0";
            } else {
// dropdownContent.style.maxHeight = "500px";
                dropdownContent.classList.toggle("dropdown_content_active");
            }
        }
    });
}

function toggleContent(e) {
    var type = e.type,
        button = document.querySelector('.toggle-btn'),
        class_name = button.getAttribute('aria-controls'),
        content = document.querySelector(button.getAttribute('data-target'));

// Return if key pressed was not Space Bar or Enter
    if (type === 'keydown' && e.keyCode !== 13 && e.keyCode !== 32) {
        return true;
    }

    e.preventDefault();
    if (content != null) {
        if (content.getAttribute('aria-hidden') === 'true') {
            content.setAttribute('aria-hidden', 'false');
            button.setAttribute('aria-expanded', 'true');
            document.body.className = document.body.className.replace(class_name, "");
        } else {
            content.setAttribute('aria-hidden', 'true');
            button.setAttribute('aria-expanded', 'false');
            document.body.classList.add(class_name);
        }
    }
}

if (document.querySelectorAll('.toggle-btn') != null) {

    (function () {
        var toggleButtons = document.querySelectorAll('.toggle-btn');
        for (var i = 0, len = toggleButtons.length; i < len; i++) {
            var toggle_button = toggleButtons[i];
            toggle_button.addEventListener('click', toggleContent);
        }

//Array.forEach is not supported in earlier browsers so it is safe to use for
// toggleButtons.forEach(function(toggle_button)
// {
// toggle_button.addEventListener('click', toggleContent);
//
// });

    })();
}






/**
 * Created by Raphael Karanja on 02/08/2018.
 */

function cyCloseAlert(e) {
    var type = e.type,
        button = e.target,
        alert_attribute = button.getAttribute('data-target'),
        alert = document.querySelector('[role=' + alert_attribute + ']');

    if (alert != null) {
        alert.setAttribute('aria-hidden', true);
        setTimeout(function () {
            alert.style.display = 'none';
        }, 500);
    }
}

// if( document.querySelectorAll('.cy_close_alert') != null){
//
// (function(){
// let cy_close_alerts = document.querySelectorAll('.cy_close_alert');
// for(var i = 0, len = cy_close_alerts.length; i < len; i++){
// var cy_close_alert_button = cy_close_alerts[i];
// cy_close_alert_button.addEventListener('click', cyCloseAlert);
// }
// })();
// }

if (document.querySelectorAll('[data-dismiss=close-alert]') != null) {
    (function () {
        var cy_close_alerts = document.querySelectorAll('[data-dismiss=close-alert]');
        for (var i = 0, len = cy_close_alerts.length; i < len; i++) {
            var cy_close_alert_button = cy_close_alerts[i];
            cy_close_alert_button.addEventListener('click', cyCloseAlert);
        }
    })();
}





/**
 * Created by Raphael Karanja on 14/08/2018.
 */

function cyToggleOverflowMenu(e) {
    var type = e.type,
        button = e.currentTarget,
        overflow_menu_attribute = button.getAttribute('data-target'),
        menu = document.querySelector(overflow_menu_attribute);
    if (menu != null) {
        var menuattr = menu.getAttribute('aria-hidden');

        if (menuattr === 'true') {
            menu.setAttribute('aria-hidden', 'false');
            menu.style.display = "none";
        } else {
            setTimeout(function () {
                menu.setAttribute('aria-hidden', true);
            }, 200);
            menu.style.display = "block";
        }
    }
}

// if( document.querySelectorAll('.cy_close_alert') != null){
//
// (function(){
// let cy_close_alerts = document.querySelectorAll('.cy_close_alert');
// for(var i = 0, len = cy_close_alerts.length; i < len; i++){
// var cy_close_alert_button = cy_close_alerts[i];
// cy_close_alert_button.addEventListener('click', cyCloseAlert);
// }
// })();
// }

if (document.querySelectorAll('[data-toggle=overflow-menu]') != null) {
    (function () {
        var cy_open_overflow = document.querySelectorAll('[data-toggle=overflow-menu]');
        for (var i = 0, len = cy_open_overflow.length; i < len; i++) {
            var cy_open_overflow_button = cy_open_overflow[i];
            cy_open_overflow_button.addEventListener('click', cyToggleOverflowMenu);
        }
    })();
}



//<button onclick="exportTableToCSV('members.csv')">Export HTML Table To CSV File</button>

