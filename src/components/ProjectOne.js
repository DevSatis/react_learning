import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function ProjectOne() {

    return (
        <div>
            <Header />
            <Main />
            <Footer />

        </div>
    );
}

ReactDOM.render(
    
    <div>
        <ProjectOne />
    </div>, 
    document.getElementById("root"));

