import React, { useEffect } from 'react'


const Home = () => {

    useEffect(()=>{
        document.body.style.cssText = "background-image: url("+"/umbracoLivingRoom.png"+");background-position: center;background-size: cover;background-repeat: no-repeat";
    })

    return (
        <div className="container d-flex justify-content-center" id="outer">
            <div id="inner" style={{maxWidth: "60%"}}>
                <h1 className="text-center">Home Page</h1>
                <br/>
                <h5 className="text-center" style={{color: "white", lineHeight: "1.5"}}>Moonfish, steelhead, lamprey southern flounder tadpole fish sculpin bigeye, blue-redstripe danio collared dogfish. Smalleye squaretail goldfish arowana butterflyfish pipefish wolf-herring jewel tetra, shiner; gibberfish red velvetfish. Thornyhead yellowfin pike threadsail ayu cutlassfish.</h5>
                <br/>
                <div class="col-md-12 text-center"> 
                    <a class="btn btn-secondary text-center" href="/products" role="button">See our amazing products!</a>
                </div>
            </div>
        </div> 
    )
}

export default Home