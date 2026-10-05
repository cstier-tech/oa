import { useState } from 'react'
import './styles/App.scss'
import { Alert } from './components/Alert'
import Icon from './components/Icon'
import { Badge } from './components/Badge'
import { Button, CircleButton, IconButton } from './components/Button'
import { Accordion, type AccordionItem } from './components/Accordion/Accordion'



const accordItems: AccordionItem[] = [
  {
    id: '1',
    label: 'test1',
    body: 'This is a test....'
  },
  {
    id: '2',
    label: 'test1',
    body: 'This is a test....'
  },
  {
    id: '3',
    label: 'test1',
    body: 'This is a test....'
  },
]

function App() {


  return (
    <>
      <Alert>TEST</Alert>
      <Alert variant='danger'>TEST</Alert>
      <Icon name='user' />
      <Badge variant='info'>dfdgdfg</Badge>
      <Button>sdfsdf</Button>
      <IconButton icon='user' variant='info' size='sm' />
      <CircleButton icon='user' />
      <Accordion items={accordItems} />
    </>
  )
}

export default App
