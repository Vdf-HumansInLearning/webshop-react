import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import PhoneList from "../components/PhoneList";

import '../css/StorePage.css';

function StorePage() {
    return (
        <>
            <NavbarComponent/>
            <PhoneList />
            <FooterComponent/>
        </>
    );
}

export default StorePage;