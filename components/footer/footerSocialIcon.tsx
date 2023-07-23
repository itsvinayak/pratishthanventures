import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface FooterSocialIconProps {
    href: string;
    icon: any;
}


const FooterSocialIcon = ({ href, icon }: FooterSocialIconProps) => {
    return (
        <Link href={href}
            className="btn btn-link btn-floating btn-lg text-dark m-1" >
            <FontAwesomeIcon
                icon={icon}
            />
        </Link>
    )
};



export default FooterSocialIcon;