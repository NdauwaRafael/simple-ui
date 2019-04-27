<header class="topbar">
    <a href="/" class="topbar__logo">
        Awesome App
    </a>
    <nav class="navarea">
        <div class="navarea__menu">

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
