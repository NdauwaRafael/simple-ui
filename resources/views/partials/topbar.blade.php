<header class="topbar">
    <a class="topbar__logo">
       <span class="logo_item">
            Awesome App
       </span>
    </a>
    <nav class="navarea">
        <div class="navarea__menu">
            <a data-target="#side_bar" aria-expanded="false" aria-controls="navigation_toggled"
               class="toggle_menu toggle-btn">
                <i class="material-icons">menu</i>
            </a>
        </div>

        <div class="navarea__actions">
            <notification-menu :notifications="[]"  ></notification-menu>
            <user-menu>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
            </user-menu>
        </div>
    </nav>
</header>
