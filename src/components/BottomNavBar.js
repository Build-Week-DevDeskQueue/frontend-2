import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
  bottomNavBarRoot: {
    width: 500,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

const BottomNavBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState('recents');

  const handleIconChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleIconChange}
      className={classes.bottomNavBarRoot}
    >
      <BottomNavigationAction
        label="GitHub"
        value="github"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        label="Twitter"
        value="twitter"
        icon={<TwitterIcon />}
      />
      <BottomNavigationAction
        label="Facebook"
        value="facebook"
        icon={<FacebookIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNavBar;
