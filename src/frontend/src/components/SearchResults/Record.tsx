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
    <section className="flex">
      <ul className="list pl0 w5">
        <li>
          <p>{Eligibility}</p>
        </li>
        <li>
          <p>Time:{time_eligibility_reason}</p>
        </li>
        <li>
          <p>Type:{type_eligibility_reason}</p>
        </li>
      </ul>

      <ul className="list pl0">
        <li>
          <p>
            Charge:{statue}-{name}
          </p>
        </li>
        <li>
          <p>Disposition:{disposition.ruling}</p>
        </li>
        <li>
          {disposition.ruling === 'Convicted' ? (
            <p>Convicted:{disposition.date}</p>
          ) : (
            <p>Arrested:{disposition.date}</p>
          )}
        </li>
        <li>
          <p>Case:{caseId}</p>
        </li>
        <li>
          <p>CaseBalance:{caseBalance}</p>
        </li>
      </ul>
    </section>
  );
};
