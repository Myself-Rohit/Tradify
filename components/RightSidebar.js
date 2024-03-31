
const RightSidebar = () => {
    
    return `<div class="right-sidebar">
    <div class="profile">
        <img src="https://cdn-icons-png.flaticon.com/128/3665/3665997.png" title="profile"/>
        <span>username</span>
        </div>
        <button class="right-arrow" >
            <img onclick="toggleRightSidebar()" src="../images/arrow.svg"/>
        </button>
        <ul class="sidebar-list">
            <li class="right-list-item" title="stocks">
                <img src="../images/stocks.svg"/>
                <span>Stocks</span>
            </li>
            <li class="right-list-item" title="trading">
                <img src="../images/tradeIcon.svg"/>
                <span>Trading</span>
            </li>
        </ul>
    </div>`
}
export default RightSidebar;