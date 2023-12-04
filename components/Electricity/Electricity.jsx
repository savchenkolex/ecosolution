import css from './Electricity.module.css';

export default function Electricity (props) {

    return (<>
        <div className={css.electricitySection}>
            <div className="container">
                <h2 className='section-header'>
                    Electricity we produced for all time
                </h2>
                <p className={css.electricityCounter}>1.134.147.814 
                    <span className={css.kWh}>kWh</span>
                </p>
            </div>
        </div>
    </>)
}