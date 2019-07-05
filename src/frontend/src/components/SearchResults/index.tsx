import React, { Component } from 'react';
import { Record } from './Record';

class index extends Component {
  render() {
    const expungementResult = {
      type_eligibility: 'True',
      time_eligibility: 'True',
      type_eligibility_reason: 'some string',
      time_eligibility_reason: 'some string',
      date_of_eligibility: '2/5/2020'
    };
    return (
      <main className="mw8 center ph2">
        <section className="cf mt4 mb3 pa3 pa4-l bg-white shadow br3">
          <h1 className="mb4 f4 fw6">Search Results for</h1>
          <Record
            statue="8112101A"
            name="Failure to Properly Use Safety Belts - MV Operator"
            disposition={{ date: '7/19/1987', ruling: 'Convicted' }}
            caseId="123"
            caseBalance="$400"
            expungementResult={expungementResult}
          />
        </section>
      </main>
    );
  }
}

export default index;
