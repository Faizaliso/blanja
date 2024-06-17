import Image from "next/image";
import blanjaLogo from "../../public/Logo.svg";

export const Logo = () => {
  return (
    <div className="flex justify-center">
      <Image src={blanjaLogo} alt="blanjaLogo" />
    </div>
  );
};
