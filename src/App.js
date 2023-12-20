import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./image/alexa.png";
import CortanaImage from "./image/cortana.png";
import SiriImage from "./image/siri.png";

function App() {

    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard image={AlexaImage} title="Alexa" handle="@Alexa11" description="Alexa was created by Amazon and it helps you buy things." />
                        </div>
                        <div className="column is-4">
                            <ProfileCard image={CortanaImage} title="Cortana" handle="@Cortana01" description="Cortana was made by microsoft. who knows what it does....."/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard image={SiriImage} title="Siri" handle="@Siri" description="Siri was developed by apple but its totally phased out now.." />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default App;