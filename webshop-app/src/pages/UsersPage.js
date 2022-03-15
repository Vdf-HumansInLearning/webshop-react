import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import UserList from "../components/UserList"
function UsersPage() {
    return (
        <>
            <NavbarComponent />
            <UserList />
            <FooterComponent />
        </>
    );
}

export default UsersPage;