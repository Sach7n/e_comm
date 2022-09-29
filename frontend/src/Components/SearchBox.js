import React from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = props => {
  return (
    <Form className="d-flex  flex-row">
    <Form.Control
      type='text'
      name='q'
      placeholder='Search'
      className='mr-sm-2 ml-sm-5 me-md-2 me-xs-1'
    ></Form.Control>
    <Button type='submit' variant='outline-success' className='p-md-2 p-sm-1 p-xs-1'>
      Search
    </Button>
  </Form>
  )
}


export default SearchBox;