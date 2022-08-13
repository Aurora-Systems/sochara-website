const Footer=()=>{
    return(
        <div className="container-fluid footer">
            <div className="text-center d-flex flex-row align-items-center justify-content-between">
                <div className="col-sm">
                    <div><h3 className="link-text"><u>Facebook</u></h3></div>
                    <div><a className="link-text" href="mailto:socharaofficial@gmail.com" target="_blank">Email us</a></div>
                    <div><a className="" href="tel:+263777925292" target="blank">+263 77 792 5292</a></div>
                </div>
                <div className="col-sm">
                    <div><h3 className="link-text"><u>Instagram</u></h3></div>
                    <div><a className="link-text" href="shop">Shop</a></div>
                    <div><a className="link-text" href="">Store Policy</a></div>
                    <div><a className="link-text" href="">Shipping & Returns</a></div>
                </div>
                <div className="col-sm">
                    <div><h3 className="link-text"><u>Blog</u></h3></div>
                    <div><a>© {new Date().getFullYear()}</a></div>
                    <div><a className="link-text" href="http://aurorasystems.cf" target="_blank">Designed by Aurora</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer