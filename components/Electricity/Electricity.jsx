import css from './Electricity.module.css';

export default function Electricity (props) {

    return (<>
        <div className={css.electricitySection}>
            <div className={css.electricityBox}>
                <div className="container">
                    <h2 className='section-header'>
                        Electricity we produced for all time
                    </h2>
                    <div className={css.decorationBox}>
                        <div className={css.decorationLine}></div>
                    </div>
                    <p className={css.electricityCounter}>
                        <span>1.134.147.814</span> 
                        <span className={css.kWh}>kWh</span>
                    </p>
                </div>
            </div>
        </div>
    </>)
}