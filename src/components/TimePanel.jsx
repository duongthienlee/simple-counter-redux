import React from 'react';
import { store } from "../store"
import { updateCounter } from "../actions"
import ActiveSessionSelect from "../components/ActiveSessionSelect"

const TimePanel = () => {
    const { days, hours, minutes, seconds, activeSession } = store.getState();
    const handleCounter = e => {
        const type = e.target.dataset.type;
        store.dispatch(updateCounter(type, activeSession));
    };

    return (
        <section className="Counter">
            <header>
                <h4 className="App__subheader">Using BEM, Redux, React</h4>
                <h1 className="App__header">Simple Counter App</h1>
            </header>
            <h4 className="App__subheader">TOTAL TIME SPENT ON THE PROJECT</h4>
            <main className="Counter--main">
                <div className="Counter--main__session">
                    <span className="Counter__text--grey">ACTIVE SESSION: </span>
                    <ActiveSessionSelect />
                </div>

                <div className="Counter--main__values">
                    <div>
                        <span className="App__text--white Counter__text--large">
                            {days}
                        </span>
                        <span className="Counter__text--grey">DAYS</span>
                    </div>

                    <div className="Counter__separator">:</div>

                    <div>
                        <span className="App__text--white Counter__text--large">
                            {hours}
                        </span>
                        <span className="Counter__text--grey">HOURS</span>
                    </div>

                    <div className="Counter__separator">:</div>

                    <div>
                        <span className="App__text--white Counter__text--large">
                            {minutes}
                        </span>
                        <span className="Counter__text--grey">MINUTES</span>
                    </div>

                    <div className="Counter__separator">:</div>

                    <div>
                        <span className="App__text--white Counter__text--large">
                            {seconds}
                        </span>
                        <span className="Counter__text--grey">SECONDS</span>
                    </div>
                </div>
            </main>
            <div className="App__buttons">
                <button
                    className="App__text--white"
                    data-type="INCREASE_COUNTER"
                    onClick={handleCounter}
                >
                    INCREASE
            </button>
                <button
                    className="App__text--white"
                    data-type="DECREASE_COUNTER"
                    onClick={handleCounter}
                >
                    DECREASE
            </button>
            </div>
        </section >
    );

}
export default TimePanel;