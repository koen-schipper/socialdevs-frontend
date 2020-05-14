import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td className='hide-sm'>
        <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format='DD/MM/YYYY'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button className='btn btn-light'>Edit</button>
        <button
          onClick={() => deleteEducation(edu._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table' width='100%'>
        <thead>
          <tr>
            <th width='27%'>School</th>
            <th width='27%' className='hide-sm'>
              Degree
            </th>
            <th width='26%' className='hide-sm'>
              Years
            </th>
            <th width='20%' />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
