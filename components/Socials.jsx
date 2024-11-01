import Link from "next/link";
import { InstagramIcon, TwitterIcon, FacebookIcon } from "lucide-react";

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href="/">
          <InstagramIcon size={24} />
        </Link>
      </li>
      <li>
        <Link href="/">
          <FacebookIcon size={24} />
        </Link>
      </li>
      <li>
        <Link href="/">
          <TwitterIcon size={24} />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
