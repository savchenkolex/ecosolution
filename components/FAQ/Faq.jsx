import css from './Faq.module.css';

export default function Faq (props) {

    return (<>
        <div id='sectionfaq'>
            <div className="container">
                <h2 className='section-header'>
                    Frequently Asked Questions
                </h2>
                <div className={css.questionBox}>
                    <details open>
                        <summary>
                            How do wind turbines and solar panels work together in a renewable energy system?
                        </summary>
                        <p>
                        Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.
                        </p>
                    </details>
                    <details>
                        <summary>
                        What sets EcoSolution's renewable energy solutions apart from others on the market?
                        </summary>
                        <p>
                        Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.
                        </p>
                    </details>
                    <details>
                        <summary>
                        How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?
                        </summary>
                        <p>
                        Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.
                        </p>
                    </details>
                    <details>
                        <summary>
                        What measures does EcoSolution take to ensure the environmental sustainability of its products?
                        </summary>
                        <p>
                        Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.
                        </p>
                    </details>
                    <details>
                        <summary>
                        How does EcoSolution engage with local communities and support a just transition to renewable energy?
                        </summary>
                        <p>
                        Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.
                        </p>
                    </details>
                </div>
                <div className={css.moreQuestions}>
                    <p>Didn't find the answer to your question?</p>
                    <a href="#sectioncontactus" className={css.contactUsBtn}>
                        <span>Contact Us</span>
                        <span className={css.contactUsBtnDot} ></span>
                    </a>
                </div>
            </div>
        </div>
    </>);
}