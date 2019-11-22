import React from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '800px',
    background: '#f4f4f4'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    margin: '0 auto'
  },
  label: {
    marginBottom: '2px',
    marginTop: '10px',
    fontWeight: '700'
  },
  text1: {
    border: '1px solid hotpink',
    borderRadius: '5px',
    lineHeight: '2'
  },
  text2: {
    border: '1px solid hotpink',
    borderRadius: '5px'
  },
  submit: {
    marginTop: '5px',
    width: '60px',
    height: '25px',
    textAlign: 'center',
    alignSelf: 'center',
    border: '1px solid hotpink',
    borderRadius: '5px',
    background: 'pink'
  }
}));

const NewIssueForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      owner: '',
      date: '',
      title: '',
      type: 'Select',
      description: '',
      tried: '',
      assigned: 'Select'
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <label className={classes.label} htmlFor="owner">
          Name
        </label>
        <input
          id="owner"
          name="owner"
          type="text"
          className={classes.text1}
          onChange={formik.handleChange}
          value={formik.values.owner}
        />
        <label className={classes.label} htmlFor="date">
          Date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          className={classes.text1}
          onChange={formik.handleChange}
          value={formik.values.date}
        />
        <label className={classes.label} htmlFor="title">
          Issue
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className={classes.text1}
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <label className={classes.label} htmlFor="type">
          Issue Type
        </label>
        <select
          as="select"
          name="type"
          className={classes.text1}
          onChange={formik.handleChange}
          value={formik.values.type}
        >
          <option value="select">Select</option>
          <option value="algo">Algorithms</option>
          <option value="block">Blockchain</option>
          <option value="css">CSS</option>
          <option value="hash">Hash Tables</option>
          <option value="html">HTML</option>
          <option value="java">Java</option>
          <option value="js">JavaScript</option>
          <option value="react">React</option>
          <option value="redux">Redux</option>
          <option value="python">Python</option>
          <option value="">SQL</option>
        </select>
        <label className={classes.label} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          type="text"
          rows="5"
          className={classes.text2}
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <label className={classes.label} htmlFor="tried">
          What I've Tried
        </label>
        <textarea
          id="tried"
          name="tried"
          type="text"
          rows="5"
          className={classes.text2}
          onChange={formik.handleChange}
          value={formik.values.tried}
        />
        <label className={classes.label} htmlFor="assigned">
          Helper
        </label>
        <select
          as="select"
          name="assigned"
          className={classes.text1}
          onChange={formik.handleChange}
          value={formik.values.assigned}
        >
          <option value="select">Select</option>
          <option value="as">Andrew Speer</option>
          <option value="bt">Bonnie Turnbeaugh</option>
          <option value="cr">Carl Redding</option>
          <option value="dm">Derrick Mei</option>
          <option value="jp">Joseph Paniagua</option>
          <option value="jc">Julian Cole</option>
          <option value="ml">Michael Luck</option>
        </select>
        <button className={classes.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewIssueForm;
