const Footer=()=>{
    return(
        <div className="container-fluid footer">
            <br/>
            <div className="text-center d-flex flex-row align-items-center justify-content-between">
                <div className="col-sm">
                    <div><h3 className="link-text"><u>Facebook</u></h3></div>
                    <div><a href="mailto:socharaofficial@gmail.com">Email us</a></div>
                    <div><a href="tel:+263777925292">+263 77 792 5292</a></div>
                </div>
                <div className="col-sm">
                    <div><h3 className="link-text"><u>Instagram</u></h3></div>
                    <div><a href="shop">Shop</a></div>
                    <div><a>Store Policy</a></div>
                    <div><a>Shipping & Returns</a></div>
                </div>
                <div className="col-sm">
                    <div><h3 className="link-text"><u>Blog</u></h3></div>
                    <div><a>© {new Date().getFullYear()}</a></div>
                    <div><a href="http://aurorasystems.cf">Designed by Aurora</a></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer