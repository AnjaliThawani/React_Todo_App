import React, { Component } from 'react'
import { Input, Flex, Box, Button, Stack, Text } from '@chakra-ui/react'
import ShowTodo from './showTodo'

class Header extends Component {
  taskArray = []
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      id: 0,
    }
  }

  taskHandler = (event) => {
    this.setState({
      task: event.target.value,
    })
  }

  clearInput = () => {
    this.setState({
      task: ''
    })
  }

  submitTask = () => {
    let object = {
      taskId: this.state.id,
      taskName: this.state.task,
    }
    this.taskArray.push(object);
    this.setState({
      id: this.state.id + 1,
      task: ''
    })

  }
  render() {
    const { task } = this.state;
    return (
      <>
        <Text marginTop={10} color={'blue.500'} fontSize="xl" fontWeight="bold" marginBottom={4}>
          TODO
        </Text>
        <Flex marginTop={20} align='center' justify='center'>
          <Stack direction='row' spacing={4} align='center'>
            <Box flex="2">
              <Input value={task} onChange={this.taskHandler} width="400px" variant='outline' placeholder='Enter Task' />
            </Box>
            <Box flex="1">
              <Stack direction='row' spacing={4} align='center'>
                <Button colorScheme='blue' variant='solid' isDisabled={task === '' ? true : false} onClick={this.submitTask}>
                  Save
                </Button>
                <Button colorScheme='red' variant='outline' onClick={this.clearInput}>
                  Clear
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        {this.taskArray.length > 0 ? <ShowTodo todoList={this.taskArray} /> : ''}

      </>
    );
  };
}


export default Header