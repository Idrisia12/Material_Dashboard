import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(({
  root: {}
}));

const Password = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    weight: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Fill and submit form to get products quote sent to your mail. Thank you."
          title="Retail Form"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            name="name"
            onChange={handleChange}
            type="text"
            value={values.name}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            onChange={handleChange}
            type="text"
            value={values.email}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Phone Number"
            margin="normal"
            name="phone"
            onChange={handleChange}
            type="text"
            value={values.phone}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Product Name"
            margin="normal"
            name="product"
            onChange={handleChange}
            type="text"
            value={values.product}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Weight / Quantity"
            margin="normal"
            name="weight"
            onChange={handleChange}
            type="text"
            value={values.weight}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Request A Quote
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Password.propTypes = {
  className: PropTypes.string
};

export default Password;
