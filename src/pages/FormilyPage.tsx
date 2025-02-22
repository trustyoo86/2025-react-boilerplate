// filepath: /Users/hanseungyoo/workspace/2025-react-boiler-plate/src/FormilyPage.tsx
import React, { useState } from 'react'
import { createForm } from '@formily/core'
import { FormProvider } from '@formily/react'
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Snackbar,
  Alert
} from '@mui/material'

const FormilyPage: React.FC = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    role: ''
  })
  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    role: ''
  })

  const form = createForm({
    initialValues: formValues,
    validateFirst: true
  })

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'username':
        if (!value) return 'Username is required'
        if (value.length < 3) return 'Username must be at least 3 characters'
        return ''
      case 'email':
        if (!value) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Invalid email format'
        return ''
      case 'role':
        if (!value) return 'Role is required'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)

    setFormValues(prev => ({
      ...prev,
      [name]: value
    }))

    setFormErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors = {
      username: validateField('username', formValues.username),
      email: validateField('email', formValues.email),
      role: validateField('role', formValues.role)
    }

    setFormErrors(newErrors)

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '')

    if (!hasErrors) {
      setOpenSnackbar(true)
      console.log('Form submitted:', formValues)
    }
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component="h1" variant="h5">
          Formily with Material-UI
        </Typography>

        <FormProvider form={form}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3, width: '100%' }}
          >
            <TextField
              fullWidth
              margin="normal"
              label="Username"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              error={!!formErrors.username}
              helperText={formErrors.username}
              variant="outlined"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
              variant="outlined"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Role"
              name="role"
              select
              value={formValues.role}
              onChange={handleChange}
              error={!!formErrors.role}
              helperText={formErrors.role}
              variant="outlined"
            >
              <MenuItem value="developer">Developer</MenuItem>
              <MenuItem value="designer">Designer</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
            </TextField>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </FormProvider>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: '100%' }}
          >
            Form submitted successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  )
}

export default FormilyPage