import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";



const FooterSocialIcon = ({ href, icon }: FooterSocialIconProps) => {
    return (
        <Link href={href}
            className="btn btn-link btn-floating btn-lg text-dark m-1" >
            <FontAwesomeIcon
                icon={icon}
                ></FontAwesomeIcon>
        </Link>
    )
};



export default FooterSocialIcon;