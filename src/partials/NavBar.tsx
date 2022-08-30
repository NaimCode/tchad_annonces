import { useTranslation } from "next-i18next";
import Link from "next/link";
import LanguageChanger from "../components/LanguageChanger";

import Logo from "../components/Logo";
import WorkspaceButton from "../components/WorkspaceButton";
import { FileIcon} from "../constants/icons";

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar bg-base-100 sticky top-0 left-0">
      <div
        className={`container max-w-7xl mx-auto h-full flex flex-row items-center justify-between gap-3`}
      >
        <Logo />
        <div className="flex-grow"></div>
       <LanguageChanger/>
        <Link href="/inscription">
          <button className="btn btn-outline gap-2">
            <FileIcon className="icon" />
            {t('home.Button inscription')}
          </button>
        </Link>
       <WorkspaceButton/>
      </div>
    </div>
  );
};


export default NavBar;
