import {Component} from 'react'

import {
  BgContainer,
  Heading,
  Form,
  Label,
  Input,
  Button,
  Select,
  Div,
  Para,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    activeOptionId: fontSizesOptionsList[0].optionId,
    display: false,
  }

  changeFontSize = event => {
    this.setState({activeOptionId: event.target.value})
  }

  enterImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  formClicked = event => {
    event.preventDefault()
    console.log('formClicked')
    this.setState({display: true})
  }

  renderImageContainer = () => {
    const {activeOptionId, imageUrl, topText, bottomText} = this.state

    return (
      <Div imageUrl={imageUrl} data-testid="meme">
        <Para fontSize={activeOptionId}>{topText}</Para>
        <Para fontSize={activeOptionId}>{bottomText}</Para>
      </Div>
    )
  }

  render() {
    const {activeOptionId, imageUrl, topText, bottomText, display} = this.state
    return (
      <BgContainer>
        <Form onSubmit={this.formClicked}>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="image">Image URL</Label>
          <Input
            placeholder="Enter the image URL"
            id="image"
            onChange={this.enterImageUrl}
            value={imageUrl}
          />
          <Label htmlFor="top">Top Text</Label>
          <Input
            placeholder="Enter the Top Text"
            id="top"
            onChange={this.onChangeTopText}
            value={topText}
          />
          <Label htmlFor="bottom">Bottom Text</Label>
          <Input
            placeholder="Enter the Bottom Text"
            id="bottom"
            onChange={this.onChangeBottomText}
            value={bottomText}
          />
          <Label htmlFor="font">FONT SIZE</Label>
          <Select
            id="font"
            value={activeOptionId}
            onChange={this.changeFontSize}
          >
            {fontSizesOptionsList.map(eachItem => (
              <option key={eachItem.optionId} value={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </Select>
          <Button type="submit">Generate</Button>
        </Form>
        {display ? this.renderImageContainer() : ''}
      </BgContainer>
    )
  }
}

export default MemeGenerator
