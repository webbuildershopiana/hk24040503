
import { STATIC_CONTENT } from '@/lib/constants/static-content';
import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useAtom } from 'jotai';
import { displayHeaderSearchAtom } from '@/store/display-header-search-atom';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@/store/authorization-atom';
import { useIsHomePage } from '@/lib/use-is-homepage';
import { useEffect } from 'react';
import GroupsDropdownMenu from './menu/groups-menu';
import Link from '@/components/ui/link';
import { useRouter } from 'next/router';
import SearchWithSuggestion from '../ui/search/search-with-suggestion';
import Head from "next/head"
import { logoPlaceholder } from '@/lib/placeholders'; 
import { useHelloBar, useSettings } from '@/framework/settings';
import HelloBar from '../hello-bar/hello-bar';
const Search = dynamic(() => import('@/components/ui/search/search'));

const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const Header = ({ layout }: { layout: string }) => {
  const router = useRouter();
  const {
    settings: { storeName , favicon, displayStoreName, logo},
  } = useSettings();

  
  const [displayHeaderSearch, setDisplayHeaderSearch] = useAtom(
    displayHeaderSearchAtom
  );
  const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const isHomePage = useIsHomePage();
  useEffect(() => {
    if (!isHomePage) {
      setDisplayHeaderSearch(false);
    }
  }, [isHomePage, setDisplayHeaderSearch]);
  const isFlattenHeader =
    !displayHeaderSearch && isHomePage && layout !== 'modern';

  const favico = favicon ? favicon : logoPlaceholder.src;
  
  return ( 
    <header className={cn('site-header-with-search sticky top-0 z-50 h-auto')}>
    <div data-gjs-type="ui-header" id="ikmyhs"><nav className="navbar navbar-expand-lg navbar-light px-3"><div className="navbar-brand d-block d-lg-none"><a className="text-decoration-none fs-3" href="#">
                            Shopiana
                        </a></div><div className="hamburger2"><span className="bar2"></span><span className="bar2"></span><span className="bar2"></span></div><div className="collapse navbar-collapse justify-content-center ps-1 animation pt-lg-0 pb-lg-0 pt-2 pb-4"><ul className="navbar-nav w-100 flex justify-content-lg-evenly gap-lg-0 gap-4"><li className="nav-item"><a aria-current="page" className="text-decoration-none" href="#">Home</a></li><li className="nav-item"><a className="text-decoration-none" href="#">Shop</a></li><li className="nav-item"><a className="text-decoration-none" href="#">Gallery</a></li><li className="nav-item"><a className="text-decoration-none" href="#">About us</a></li></ul><div className="navbar-brand d-none d-lg-block m-0"><a className="text-decoration-none fs-3" href="#">
                                Shopiana
                            </a></div><ul className="navbar-nav w-100 flex justify-content-lg-evenly gap-lg-0 gap-4 mt-lg-0 mt-4"><li className="nav-item"><a className="text-decoration-none" href="#">Blog</a></li><li className="nav-item"><a className="text-decoration-none" href="#">Offer</a></li><li className="nav-item"><a className="text-decoration-none" href="#">Contact us</a></li><li className="nav-item"><a className="text-decoration-none" href="#">Pages</a></li></ul></div></nav></div>
    </header>
  );
};

export default Header;
