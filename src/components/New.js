import React from 'react';
import { useFormik } from 'formik';

const NewIssueForm = () => {
  const formik = useFormik({
    initialValues: {
      owner: '',
      date: '',
      title: '',
      type: 'Select',
      description: '',
      tried: '',
      assigned: '',
      resolved: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="owner">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.owner}
      />
      <label htmlFor="date">Date</label>
      <input
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label htmlFor="title">Issue</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <label htmlFor="type">Issue Type</label>
      <select
        id="type"
        name="type"
        type="select"
        onChange={formik.handleChange}
        value={formik.values.type}
      >
        <option value="Algorithms">Algorithms</option>
        <option value="Blockchain">Blockchain</option>
        <option value="CSS">CSS</option>
        <option value="Hash Tables">Hash Tables</option>
        <option value="HTML">HTML</option>
        <option value="Java">Java</option>
        <option value="Javascript">JavaScript</option>
        <option value="React">React</option>
        <option value="Redux">Redux</option>
        <option value="Python">Python</option>
        <option value="SQL">SQL</option>
      </select>
      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <label htmlFor="tried">What I've Tried</label>
      <input
        id="tried"
        name="tried"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.tried}
      />
      <label htmlFor="assigned">Helper</label>
      <select
        id="assigned"
        name="assigned"
        type="select"
        onChange={formik.handleChange}
        value={formik.values.assigned}
      >
        <option value="BT">Andrew Speer</option>
        <option value="BT">Bonnie Turnbeaugh</option>
        <option value="BT">Carl Redding</option>
        <option value="BT">Derrick Mei</option>
        <option value="BT">Joseph Paniagua</option>
        <option value="BT">Julian Cole</option>
        <option value="BT">Michael Luck</option>
      </select>
      <label htmlFor="resolved">Resolved</label>
      <input
        id="resolved"
        name="resolved"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.resolved}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewIssueForm;
