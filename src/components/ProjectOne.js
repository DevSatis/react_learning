import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

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

