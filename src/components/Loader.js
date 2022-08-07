import React from 'react'
import Stack from '@mui/material/Stack'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItem="center" width="100%">
        <InfinitySpin color="grey"/>
    </Stack>
  )
}

export default Loader