function Sidebar(){
    return(
        <div>Sidebar</div>
    );
}

function Main(){
    return(
        <div>Main</div>
    );
}

function Middle(){
    return(
        <div>
            <Sidebar />
            <Main />
        </div>
    );
}

export default Middle;