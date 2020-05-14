import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td className='hide-sm'>
        <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format='DD/MM/YYYY'>{exp.to}</Moment>
        )}
      </td>
      <td>
        <button className='btn btn-light'>Edit</button>
        <button
          onClick={() => deleteExperience(exp._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table' width='100%'>
        <thead>
          <tr>
            <th width='27%'>Company</th>
            <th width='27%' className='hide-sm'>
              Title
            </th>
            <th width='26%' className='hide-sm'>
              Years
            </th>
            <th width='20%' />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
