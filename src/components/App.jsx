import React, { useState } from 'react';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container } from './Container/Container';


const App = () => {

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  
  const totalFeedbacksCount = () => {
     const feedbackNumbersArray = Object.values(state);
     const total = feedbackNumbersArray.reduce(
       (acc, number) => acc + number,
       0
     );
     return total;
  };

  const positivePercentageCount = () => {
    const total = totalFeedbacksCount();
    if (total) {
      const positivePercentage = (state.good / total) * 100;
      return Math.round(positivePercentage);
    }
    return '0';
  };

  const onButtonClick = e => {
    const value = e.target.textContent;

    switch (value) {
      case 'good':
        setState(prevValue => {
          return (
            {
              ...prevValue, good: prevValue.good + 1
            }
          )
        });
        break;
      case 'neutral':
        setState(prevValue => {
          return {
            ...prevValue,
            neutral: prevValue.neutral + 1,
          };
        });
        break;
      case 'bad':
        setState(prevValue => {
          return {
            ...prevValue,
            bad: prevValue.bad + 1,
          };
        });
        break;
      default: 
        throw new Error ('Error in OnButtonClick function')
    }
  };


  return (
    <>
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onButtonClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedbacksCount() > 0 ? (
            <Statistics
              options={state}
              total={totalFeedbacksCount}
              positivePercentage={positivePercentageCount}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </Container>
    </>
  );
}


export default App



