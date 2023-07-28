import Link from "next/link";
import backgroundImageSrc from "@/public/background.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const styling = {
    backgroundImage: `linear-gradient(180deg, #FFFFFF 19%, #FFFFFF 85%), url(${backgroundImageSrc.src})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    backgroundSize: "50%",
    backgroundPosition: "center",
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundBlendMode: "multiply" as const,
    position: "relative" as const,
    marginLeft: "auto" as const,
    marginRight: "auto" as const,
    backgroundAttachment: "fixed",
    fontFamily: "Montserrat",
    fontSize: "1.5rem"
};

interface ErrorPageProps {
    errorCode: number;
    message: string;
}

const ErrorPage = (props: ErrorPageProps) => {
    const [count, setCount] = useState(0);
    const { push } = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count + 1);
        }, 1000);
        return () => {
            if(count > 7){
                clearTimeout(timer);
                push("/");
            }
        };
    });
    return (
        <div className="container" style={styling}>
            <div className="row">
                <h1 className="display-1 lead d-flex justify-content-center "><span style={{ color: "#d9743f"}}>{props.errorCode}</span>&nbsp;-&nbsp;{props.message}</h1>
            </div>
            <div className="row">
                <Link href="/" className="d-flex justify-content-center text-decoration-none">
                    <div className="btn btn-outline-dark">Go Back</div>
                </Link>
            </div>
            <div className="row text-muted">
                <p className="d-flex justify-content-center">Redirecting in {8 - count} seconds</p>
            </div>
        </div>
    );
};


export default ErrorPage;