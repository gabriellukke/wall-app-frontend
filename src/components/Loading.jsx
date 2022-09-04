import React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';

export default function Loading({ type = 'bars', color = '#009cd8' }) {
  return (
    <div className="bg-stone-200 flex items-center justify-center mt-12">
      <ReactLoading
        type={type}
        color={color}
        height="64px"
        width="64px"
      />
    </div>
  );
}

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
};

Loading.defaultProps = {
  type: 'bars',
  color: '#009cd8',
};
