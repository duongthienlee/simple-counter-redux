import React, { Component } from 'react';
import { store } from "../store"
import { setActiveSession } from "../actions"
export default class ActiveSessionSelect extends Component {

    render() {
        let activeSession = store.getState().activeSession;

        const setSession = e =>
            store.dispatch(setActiveSession(e.target.value));

        return (
            <select
                className="Counter__text--grey"
                onChange={setSession}
                value={activeSession}
            >
                <option>DAYS</option>
                <option>HOURS</option>
                <option>MINUTES</option>
                <option>SECONDS</option>
            </select>
        );
    }
}
