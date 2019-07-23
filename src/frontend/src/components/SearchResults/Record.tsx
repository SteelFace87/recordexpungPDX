import React from 'react';

interface RecordProps {
  statue: string;
  name: string;
  disposition: {
    date: string;
    ruling: string;
  };
  caseId: string;
  caseBalance: string;
  expungementResult: {
    type_eligibility: string;
    time_eligibility: string;
    type_eligibility_reason: string;
    time_eligibility_reason: string;
    date_of_eligibility: string;
  };
}

export const Record: React.FC<RecordProps> = ({
  statue,
  name,
  disposition,
  caseBalance,
  caseId,
  expungementResult
}) => {
  let Eligibility = '';
  const {
    type_eligibility,
    time_eligibility,
    type_eligibility_reason,
    time_eligibility_reason,
    date_of_eligibility
  } = expungementResult;
  if (time_eligibility === 'True' && type_eligibility === 'True') {
    Eligibility = 'Eligible Now';
  } else if (type_eligibility === 'True' && time_eligibility === 'False') {
    Eligibility = `Eligible ${date_of_eligibility}`;
  } else {
    Eligibility = 'Ineligible';
  }

  return (
    <section className="flex bb w-100 mb2 pb2" style={{ position: 'relative' }}>
      <section
        className="h-100 w1"
        style={{
          position: 'absolute',
          background: 'linear-gradient(white,#9EEBCF,white)'
        }}
      ></section>
      <ul className="list pl0 w5 mh4">
        <li className="flex">
          <section className="h2 br-pill bg-green flex items-center ma2 pa2">
            <p>{Eligibility}</p>
          </section>
        </li>
        <li className="flex">
          <p className="b">Time:</p>
          <p>logo</p>
          <p>{time_eligibility_reason}</p>
        </li>
        <li className="flex">
          <p className="b">Type:</p>
          <p>{type_eligibility_reason}</p>
        </li>
      </ul>

      <ul className="list pl0">
        <li className="flex">
          <p className="b">Charge:</p>
          <p>
            {statue}-{name}
          </p>
        </li>
        <li className="flex">
          <p className="b">Disposition:</p>
          <p>{disposition.ruling}</p>
        </li>
        <li className="flex">
          {disposition.ruling === 'Convicted' ? (
            <>
              <p className="b">Convicted:</p>
              {disposition.date}
              <p></p>
            </>
          ) : (
            <>
              <p className="b">Arrested:</p>
              {disposition.date}
              <p></p>
            </>
          )}
        </li>
        <li className="flex">
          <p className="b">Case:</p>
          <p>{caseId}</p>
        </li>
        <li className="flex">
          <p className="b">CaseBalance:</p>
          <p>{caseBalance}</p>
        </li>
      </ul>
    </section>
  );
};
