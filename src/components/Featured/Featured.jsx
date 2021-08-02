import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import "./Featured.scss";

export default function Featured({ type }) {
    return (
        <div className="Featured">
            {type && (
                <div className="Category">
                    <span>{type === "Movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Western">Western</option>
                        <option value="Animation">Animation</option>
                        <option value="Drama">Drama</option>
                        <option value="Documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                src="img/netflix-background.jpg"
                alt=""
            />
            <div className="Info">
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt=""
                />
                <span className="Description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                    adipisci repellendus eum quasi illo, velit numquam, maxime tempora
                    sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
                    temporibus eum earum?
                </span>
                <div className="Buttons">
                    <button className="play">
                        <BsPlayFill />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <BsPauseFill />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
