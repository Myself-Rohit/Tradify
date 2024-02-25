// ..........header.............
class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `<div class="header">
            <img src="../images/Logo.png" />
            <div>
                <p>FAQ's</p>
                <p>About Us</p>
            </div>
            
        </div>`
    }
}
customElements.define('my-header', MyHeader)

// .............footer............

class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
            <ul>
                <li>Copyright © Tradify</li>
                <li class="footer-text">FAQ's</li>
                <li class="footer-text">About Us</li>
            </ul>
        </div>`
    }
}
customElements.define('my-footer',MyFooter)