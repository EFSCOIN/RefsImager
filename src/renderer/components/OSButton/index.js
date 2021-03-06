import React from 'react'

import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

import OSDialog from './OSDialog'

class OSButton extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this.handleDialogClose = this.handleDialogClose.bind(this)
  }

  handleDialogClose (val) {
    this.setState({
      open: false
    })

    if (typeof val !== 'undefined') {
      this.props.onChange(val)
    }
  }

  render () {
    const loaded = this.props.list !== null
    const placeholder = loaded ? 'Choose OS' : <i>Loading...</i>
    const buttonText = this.props.value === null ? placeholder : this.props.value.name
    const buttonDisabled = !loaded || this.props.writing

    return (
      <FormControl className='form-selector'>
        <FormHelperText>Operating System</FormHelperText>
        <Button className='disable-focus hidden-overflow' variant='outlined' color='primary' disabled={buttonDisabled} onClick={() => this.setState({ open: true })}>
          {buttonText}
        </Button>
        <OSDialog
          options={this.props.list}
          open={this.state.open}
          onClose={this.handleDialogClose}
          online={this.props.online}
        />
      </FormControl>
    )
  }
}

export default OSButton
