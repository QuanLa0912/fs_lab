export function Header() {
    return (
        <header className="site-header">
            <img className="site-header_logo" src="https://itsm-ace.ca/images/logo.svg" alt="Pixell River Financial logo" />
            <div>
                <h1>Pixell River Employee Directory</h1>
                <p className="greeting">Welcome to Pixell River</p>
            </div>
        </header>
    );
}

export default Header;