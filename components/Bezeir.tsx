import Image from 'next/image';
import classes from '../styles/Bezeir.module.css'

const Bezeir = () => {
return (
    // <div className={classes.Bezeir}></div>
    <Image src='/top.svg' width='40%' height='100%' className='absolute -z-50 top-14 right-0' />
)
}

export default Bezeir;