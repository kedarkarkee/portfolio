import { gradient, subHeading } from "./typography";
const mainSkills = [
    {
        title: 'Flutter',
        desc: 'An open source framework by Google for building beautiful, natively compiled, multi-platform applications.',
        icon: 'icons/flutter.svg'
    },
    {
        title: 'Dart',
        desc: 'A client-optimized language for fast apps on any platform which  powers the Flutter Framework.',
        icon: 'icons/dart.svg'
    },

];
const subSkills = [
    {
        title: 'Firebase',
        icon: 'icons/firebase.svg'
    },
    {
        title: 'HTML',
        icon: 'icons/html.svg'
    },
    {
        title: 'JavaScript',
        icon: 'icons/js.svg'
    },
    {
        title: 'React',
        icon: 'icons/react.svg'
    },
    {
        title: 'Node JS',
        icon: 'icons/nodejs.svg'
    }
]

const Skills = () => {
    return (
        <>
            <h2 id="skills" className={`text-primary ${subHeading}`}>MY SKILLSETS</h2>
            <div className='flex justify-evenly flex-wrap mx-10 mt-24'>
                {
                    mainSkills.map(s => (
                        <div key={s.title} className='bg-white shadow-card rounded-3xl flex items-center justify-evenly flex-col py-8 my-8 w-96'>
                            <div className={`rounded-circular w-24 h-24 ${gradient} flex items-center justify-center`}>
                                <img src={s.icon} className="text-center" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className="font-bold text-xl text-primary">{s.title}</p>
                            </div>
                                <p className='text-primaryDark opacity-80 text-center px-8'>{s.desc}</p>
                        </div>
                    ))
                }

            </div>
            <div className='flex items-center justify-evenly mx-10 mt-24 flex-wrap'>                {
                    subSkills.map(s => (
                        <div key={s.title} className='flex flex-col p-8'>
                            <div className={`rounded-circular w-24 h-24 ${gradient} flex items-center justify-center`}>
                                <img src={s.icon} className="text-center" />
                            </div>
                            <div className='flex flex-col items-center py-4'>
                                <p className="font-bold text-xl text-primary">{s.title}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    );
}
export default Skills;