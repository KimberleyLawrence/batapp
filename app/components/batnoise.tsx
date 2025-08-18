
import batnoise from "../../public/media/bat_noise_trimmed.wav";

//insert code for app between return (         )}
export default function Batnoise() {
    return (


        <>
            <audio controls className="inline-flex h-12 w-35">
                <source src={batnoise} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>

        </>
    )
}
