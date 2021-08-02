import "./Watch.scss"
import { BsArrowLeft } from "react-icons/bs";

export const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <BsArrowLeft />
                Home
            </div>
            <video className="video" autoPlay progress controls src="video/video1.mp4" />
        </div>
    )
}
