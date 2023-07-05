import React from 'react';

import PropTypes from 'prop-types';

import { Button, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonsEl = options.map((option, index) => (
    <Button key={index} type="button" onClick={onLeaveFeedback}>
      {option}
    </Button>
  ));
  return <ButtonWrapper>{buttonsEl}</ButtonWrapper>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired,),
  onLeaveFeedback: PropTypes.func.isRequired,
};
