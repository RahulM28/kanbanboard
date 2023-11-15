import React from 'react';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    uploadButton: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      border: '2px dashed transparent',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        border: `2px dashed ${theme.palette.primary.main}`,
      },
    },
    input: {
      display: 'none',
    },
  }));
  export default function UploadButton() {
    const classes = useStyles();
  return (
    <label htmlFor="file-input">
      <Button
        className={classes.uploadButton}
        variant="outlined"
        component="span"
        color="primary"
      >
        <Typography variant="body1">Upload File</Typography>
      </Button>
      <input id="file-input" type="file" className={classes.input} />
    </label>
  );
  }

  