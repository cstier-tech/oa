import { useState } from 'react'
import './styles/App.scss'
import { Alert } from './components/Alert'
import Icon from './components/Icon'
import { Badge } from './components/Badge'
import { Button, CircleButton, IconButton } from './components/Button'
import { Accordion, type AccordionItem } from './components/Accordion/Accordion'
import {AlertToast} from './components/AlertToast'
import { Card, CardBody, CardText } from './components/Card'
import { Tooltip } from './components/Tooltip'
import { Popover } from './components/Popover'



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

type AlertVariant = 'warning' | 'success' | 'danger'


function App() {


const [alertVariant, setAlertVariant] = useState<AlertVariant>('danger')
const [alertMessage, setAlertMessage] = useState<string>()
const [showAlert, setShowAlert] = useState<boolean>(false)

function alertHandler(variant: AlertVariant, message: string) {
  setAlertVariant(variant)
  setAlertMessage(message)
  setShowAlert(true)
}

  return (
    <>
    <Button onClick={() => alertHandler('success', 'This is an alert!')}>
      success alert
    </Button>
    <Button onClick={() => alertHandler('danger', 'This is a dangerous alert!')}>
      danger alert
    </Button>
    <Button onClick={() => alertHandler('warning', 'This is a warning')}>
      warning alert
    </Button>
    <AlertToast onClose={() => setShowAlert(false)} show={showAlert} variant={alertVariant}>
      {alertMessage}
    </AlertToast>

        <Card>
          <CardBody>
            <CardText>
              Testing
            </CardText>
            <Tooltip title='test' placement='bottom'>
              <Button>testt</Button>
            </Tooltip>
            <Popover content='sup' placement='left'>
              <Button>sdfs</Button>
            </Popover>
          </CardBody>
        </Card>
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
