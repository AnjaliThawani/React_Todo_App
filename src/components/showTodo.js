import React, { Component } from 'react'
import { Input, Flex, Box, Stack, } from '@chakra-ui/react'
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'

class ShowTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todoList,
      isEdit: false
    }
  }

  deleteTodo = (id) => {
    const index = this.props.todoList.findIndex((item) => item.taskId === id)
    if (index !== -1) {
      this.props.todoList.splice(index, 1)
    }
    this.setState({
      todo: this.props.todoList
    })
  }

  editTodo = (id) => {
    this.setState({
      isEdit: true
    })
  }


  render() {
    return (
      this.props.todoList.map((item) => {
        return (
          <Flex
            marginTop={5}
            align='center'
            justify='center' >
            <Stack direction='row' spacing={4} align='center'>
              <Box flex="2">
                <Input value={item.taskName} width="400px" variant='outline' />
              </Box>
              <Box flex="1">
                <Stack direction='row' spacing={4} align='center'>
                  <DeleteIcon
                    boxSize={6}
                    cursor="pointer"
                    _hover={{ color: 'red.500' }}
                    onClick={() => { this.deleteTodo(item.taskId) }} />
                  <EditIcon
                    boxSize={6}
                    cursor="pointer"
                    _hover={{ color: 'red.500' }}
                    onClick={() => { this.editTodo(item.taskId) }} />

                  <AddIcon
                    boxSize={6}
                    cursor="pointer"
                    _hover={{ color: 'red.500' }}
                    onClick={() => { this.saveEditedTodo(item.taskId) }} />
                </Stack>

              </Box>
            </Stack>
          </Flex >
        )
      })
    )
  }

}



export default ShowTodo