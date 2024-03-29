import Link from "next/link";
import { caption } from "./typography";

const Navigation = ()  => {
    const links = linksMap.map(l => (
<li key={l.name} className='float-left'>
    <a href={l.target} className={`block text-primary ${caption} text-sm`}>{l.name}</a>

</li>    
    
    ));
    return (
      <div className="w-full h-14 bg-white shadow-default fixed top-0 flex items-center z-50">
          <div className="w-full px-8 flex items-center">
              <a href="#" className="no-underline mr-auto">
              <img src='icons/avatar.svg' />
              </a>
              <nav className="flex align-center mob:hidden">
                  <ul className="list-none m-0 p-0 overflow-hidden">
         {links}

                  </ul>
              </nav>
          </div>
      </div>
    );
}

const linksMap = [
    {
        name: 'Home',
        target: '#'
    },
    {
        name: 'About Me',
        target: '#about'
    },
    {
        name: 'Skills',
        target: '#skills'
    },
    {
        name: 'Projects',
        target: '#projects'
    },
    {
        name: 'Contact',
        target: '#contact'
    },
];

export default Navigation;