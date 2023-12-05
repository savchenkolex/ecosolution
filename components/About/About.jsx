import css from './About.module.css';

export default function About (props) {

    return (<>
        <div id='sectionabout' className={css.sectionAbout}>
            <div className="container">
                <div className={css.aboutBox}>
                <h2 className='section-header'>Main values of our company</h2>
                <div className={css.gridBox}>

                </div>
                </div>
            </div>
        </div>
    </>)
}