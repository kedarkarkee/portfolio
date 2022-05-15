import Link from "next/link";
import { caption } from "./typography";

const Navigation = ()  => {
    const links = linksMap.map(l => (
<li key={l.name} className='float-left'>
    <a href={l.target} className={`block text-primary ${caption}`}>{l.name}</a>

</li>    
    
    ));
    return (
    //   <div className="w-full h-14 shadow-default fixed top-0 flex items-center z-50">
    <>
          <div className="w-full px-40 flex items-center">
              <a href="#" className="no-underline mr-auto">
              <img src='https://www.svgrepo.com/show/134579/linkedin.svg' width={30} height={30} />
              </a>
              <nav>
                  <ul className="list-none m-0 p-0 overflow-hidden">
         {links}

                  </ul>
              </nav>
          </div>
      </>
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