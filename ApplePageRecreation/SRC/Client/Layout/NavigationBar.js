//  top navigation bar 
//  horizontal bar with:
//     Apple logo, Store, Mac, iPad, iPhone, Watch, Vision, AirPods, TV & Home, Entertainment, Accessories, Support, Looking glass icon, Shopping bag icon -->
//  on Hover of words, drop down menu appear main page background darkens and blurs
//         drop down includes: Explore Shop and More from


export default function NavigationBar () {
    return (
        <>
        <p>Apple Icon</p> { /* leads back to main/homepage */ }
        <button className="dropDownMenu">Store</button>
        <button className="dropDownMenu">Mac</button>
        <button className="dropDownMenu">iPad</button>
        <button className="dropDownMenu">Watch</button>
        <button className="dropDownMenu">Vision</button>
        <button className="dropDownMenu">AirPods</button>
        <button className="dropDownMenu">TV & Home</button>
        <button className="dropDownMenu">Entertainment</button>
        <button className="dropDownMenu">Accessories</button>
        <button className="dropDownMenu">Support</button>
        <button>Looking glass</button>
        <button>Shopping bag</button>
        </>
    )
}