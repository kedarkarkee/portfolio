import { gradient, subHeading } from "./typography";

const things = [
    {
        title: 'Android',
        desc: 'App Development',
        icon: 'icons/android.svg'
    },
    {
        title: 'IOS',
        desc: 'App Development',
        icon: 'icons/apple.svg'
    },
    {
        title: 'Web',
        desc: 'App Development',
        icon: 'icons/web.svg'
    },
];

const ThingsIDo = () => {
    return (
        <div className='my-24'>
        
            <h2 className={`text-primary ${subHeading}`}>THINGS I DO</h2>
            <div className='flex items-center justify-evenly flex-wrap mx-10 mt-24'>
                {
                    things.map(s => (
                        <div key={s.title} className='bg-white shadow-card rounded-2xl flex items-center justify-evenly flex-col p-16 my-4'>
                            <div className={`rounded-circular w-24 h-24 ${gradient} flex items-center justify-center`}>
                                <img src={s.icon} className="text-center" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className="font-bold text-xl text-primary">{s.title}</p>
                                <p className='text-primaryDark opacity-80 text-center'>{s.desc}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ThingsIDo;

//  font-weight: 700;
// font-size: 40px;
// line-height: 150%;
// /* identical to box height, or 60px */

// text-align: center;

// /* Primary */

// color: #3B38E8;