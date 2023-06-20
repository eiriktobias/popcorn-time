function Header(props){
    return(
        <>
            <h1>This is the Header</h1>
            {props.children}
        </>
    );
}

export default Header;