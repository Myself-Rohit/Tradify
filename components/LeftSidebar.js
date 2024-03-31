
function LeftSidebar() {
   
    return `<div class="sidebar">
        <img class="sidebar-logo" src="../images/logo.png"/>
        <button class="arrow" onclick="toggleSidebar()">
            <img src="../images/arrow.svg"/></button>
        <ul class="sidebar-list">
            <li class="list-item" title="dashboard">
                <img  src="https://cdn-icons-png.flaticon.com/128/10084/10084720.png">
                <span>Dashboard</span>
            </li>
            <li class="list-item" title="profile">
                <img src="../images/profile.svg"/>
                <span>Profile</span>
            </li>
            <li class="list-item" title="wallet">
                <img src="../images/wallet.svg"/>
                <span>Wallet</span>
            </li>
            <li class="list-item" title="contact us">
                <img src="../images/contactus.svg">
                <span>Contact Us</span>
            </li>
            <li class="list-item" title="about us">
                <img src="../images/aboutus.svg"/>
                <span>About Us</span>
            </li>
            <span class="gap"></span>
            <li class="list-item" title="settings">
                <img src="../images/settings.svg"/>
                <span>Setting</span>
            </li>
            <li class="list-item" title="logout">
                <img src="../images/logout.svg"/>
                <span>Logout</span>
            </li>
        </ul>
    </div>`
}
export default LeftSidebar;