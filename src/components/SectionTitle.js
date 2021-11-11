import React from 'react';
import PropTypes from 'prop-types';
import {Box, Divider, Typography} from '@material-ui/core';

const SectionTitle = ({title}) => {
  return (
    <Box mt={2} mb={1} >
      <Typography
        variant='subtitle1'
        classes={{root: {fontWeight: 'bold'}}}
      >
        {title}
      </Typography>
      <Divider/>
    </Box>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;