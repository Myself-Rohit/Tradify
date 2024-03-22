
const LeftSidebar = () => {
   
    return `<div class="sidebar">
        <img class="sidebar-logo" src="../images/logo.png"/>
        <button class="arrow" onclick="toggleSidebar()">
            <img src="https://cdn-user-icons.flaticon.com/142592/142592826/1711122798096.svg?token=exp=1711123739~hmac=27b322024f039a9137d2d23d9437f9f8"/></button>
        <ul class="sidebar-list">
            <li class="list-item">
                <img src="https://cdn-icons-png.flaticon.com/128/10084/10084720.png">
                <span>Dashboard</span>
            </li>
            <li class="list-item">
                <img src="https://cdn-user-icons.flaticon.com/142592/142592826/1711122025351.svg?token=exp=1711122974~hmac=59db8885ff12483fdf1e7a1af70e7364"/>
                <span>Profile</span>
            </li>
            <li class="list-item">
                <img src="https://cdn.iconfinder.com/stored_data/1598883/128/png?token=1711119877-R2QDMDrpXtBbkYvZYDQXwUQ3JJGCO6TRMC%2FKlTD7RN8%3D"/>
                <span>Wallet</span>
            </li>
            <li class="list-item">
                <img src="https://cdn-user-icons.flaticon.com/142592/142592826/1711120757887.svg?token=exp=1711121789~hmac=b96b5b6669943e491965c7e22d557ccc">
                <span>Contact Us</span>
            </li>
            <li class="list-item">
                <img src="https://cdn-user-icons.flaticon.com/142592/142592826/1711120535329.svg?token=exp=1711121449~hmac=ed8015aad6cea5b7622018fbf179acc4"/>
                <span>About Us</span>
            </li>
            <span class="gap"></span>
            <li class="list-item">
                <img src="https://cdn-user-icons.flaticon.com/142592/142592826/1711121043326.svg?token=exp=1711121987~hmac=fce309de6611e5d802254bc08361777a"/>
                <span>Setting</span>
            </li>
            <li class="list-item">
                <img src="https://cdn-user-icons.flaticon.com/142592/142592826/1711121746303.svg?token=exp=1711122783~hmac=5a2b184f47225cc0b8396b5f64fab6a4"/>
                <span>Logout</span>
            </li>
        </ul>
    </div>`
}
export default LeftSidebar;