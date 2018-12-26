import React, { Component } from 'react'
import { render } from 'react-dom'
import { Row, Col, Select, Card } from 'antd'
import { AnalogClock } from '../../lib'
import 'antd/dist/antd.css'
import './index.css'
const Option = Select.Option;

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      size: 500,
      borderColor: "black",
      backgroundColor: "white",
      scaleColor: "black",
      hourColor: "black",
      scaleType: "arabic",
      borderImage: null,
      backgroundImage: null,
      hourHandColor: "black",
      minuteHandColor: "black",
      secondHandColor: "red"
    }
  }
  componentDidMount() {
  }
  render() {
    let {
      size, borderColor, backgroundColor, scaleColor, hourColor, scaleType,
      borderImage, backgroundImage, hourHandColor, minuteHandColor, secondHandColor
    } = this.state;
    const keyW = 10;
    const valueW = 6;
    const selectW = 120;
    const mb = 10;
    return (
      <div style={{ height: "100%" }}>
        <div style={{ float: "left", width: "50%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <AnalogClock {...this.state} />
        </div>
        <div style={{ float: "left", width: "50%", height: "100%", display: "flex", alignItems: "center" }}>
          <Card title="参数" style={{ width: 300 }}>
            <Row type="flex" align="middle" style={{ marginBottom: mb }}>
              <Col span={keyW} >尺寸：</Col>
              <Col span={valueW} >
                <Select defaultValue={size} style={{ width: selectW }} onChange={size => { this.setState({ size }) }}>
                  <Option value={300}>300px</Option>
                  <Option value={400}>400px</Option>
                  <Option value={500}>500px</Option>
                  <Option value={600}>600px</Option>
                </Select>
              </Col>
            </Row>
            <Row type="flex" align="middle" style={{ marginBottom: mb }}>
              <Col span={keyW} >边框颜色：</Col>
              <Col span={valueW} >
                <Select defaultValue={borderColor} style={{ width: selectW }} onChange={borderColor => { this.setState({ borderColor }) }}>
                  <Option value="black">黑色</Option>
                  <Option value="red">红色</Option>
                  <Option value="brown">棕色</Option>
                </Select>
              </Col>
            </Row>
            <Row type="flex" align="middle" style={{ marginBottom: mb }}>
              <Col span={keyW} >背景颜色：</Col>
              <Col span={valueW} >
                <Select defaultValue={backgroundColor} style={{ width: selectW }} onChange={backgroundColor => { this.setState({ backgroundColor }) }}>
                  <Option value={3}>白色</Option>
                  <Option value="white">白色</Option>
                  <Option value="black">黑色</Option>
                </Select>
              </Col>
            </Row>
            <Row type="flex" align="middle" style={{ marginBottom: mb }}>
              <Col span={keyW} >刻度线颜色：</Col>
              <Col span={valueW} >
                <Select defaultValue={scaleColor} style={{ width: selectW }} onChange={scaleColor => { this.setState({ scaleColor }) }}>
                  <Option value="black">黑色</Option>
                  <Option value="white">白色</Option>
                  <Option value="yellow">黄色</Option>
                </Select>
              </Col>
            </Row>
            <Row type="flex" align="middle" style={{ marginBottom: mb }}>
              <Col span={keyW} >刻度值颜色：</Col>
              <Col span={valueW} >
                <Select defaultValue={hourColor} style={{ width: selectW }} onChange={hourColor => { this.setState({ hourColor }) }}>
                  <Option value="black">黑色</Option>
                  <Option value="white">白色</Option>
                  <Option value="yellow">黄色</Option>
                </Select>
              </Col>
            </Row>
            <Row type="flex" align="middle" style={{ marginBottom: mb }}>
              <Col span={keyW} >刻度值类型：</Col>
              <Col span={valueW} >
                <Select defaultValue={scaleType} style={{ width: selectW }} onChange={scaleType => { this.setState({ scaleType }) }}>
                  <Option value="arabic">阿拉伯数字</Option>
                  <Option value="roman">罗马数字</Option>
                  <Option value="none">不显示</Option>
                </Select>
              </Col>
            </Row>
            <Row type="flex" align="middle" style={{ marginBottom: mb }}>
              <Col span={keyW} >边框背景图：</Col>
              <Col span={valueW} >
                <Select defaultValue={borderImage} style={{ width: selectW }} onChange={borderImage => { this.setState({ borderImage }) }}>
                  <Option value={null}>无</Option>
                  <Option value="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545802326239&di=79b3b96817803de52035f2f186199507&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130530%2F0008020226603091_b.jpg">图片1</Option>
                  <Option
                    value="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545553805386&di=ec656215a2958d617ef30631e96304e0&imgtype=0&src=http%3A%2F%2Fimg1.ali213.net%2Fshouyou%2Fupload%2Fimage%2F2018%2F07%2F09%2F584_2018070952816881.png"
                  >图片2</Option>
                </Select>
              </Col>
            </Row>
            <Row type="flex" align="middle" style={{ marginBottom: mb }}>
              <Col span={keyW} >表盘背景图：</Col>
              <Col span={valueW} >
                <Select defaultValue={backgroundImage} style={{ width: selectW }} onChange={backgroundImage => { this.setState({ backgroundImage }) }}>
                  <Option value={null}>无</Option>
                  <Option value="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545802448652&di=32d6590a8a2128ad4ff40d1ab7e6d89a&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F58dc739fada5a8258d3cba6013f8d7881556d02c.jpg">图片1</Option>
                  <Option
                    value="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545553773235&di=1c768f80fc088c2edc20fa75af77c515&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F03%2F20160703164252_2WySB.jpeg"
                  >图片2</Option>
                </Select>
              </Col>
            </Row>
            <Row type="flex" align="middle" style={{ marginBottom: mb }}>
              <Col span={keyW} >时针颜色：</Col>
              <Col span={valueW} >
                <Select defaultValue={hourHandColor} style={{ width: selectW }} onChange={hourHandColor => { this.setState({ hourHandColor }) }}>
                  <Option value="black">黑色</Option>
                  <Option value="red">红色</Option>
                  <Option value="green">绿色</Option>
                  <Option value="blue">蓝色</Option>
                </Select>
              </Col>
            </Row>
            <Row type="flex" align="middle" style={{ marginBottom: mb }}>
              <Col span={keyW} >分针颜色：</Col>
              <Col span={valueW} >
                <Select defaultValue={minuteHandColor} style={{ width: selectW }} onChange={minuteHandColor => { this.setState({ minuteHandColor }) }}>
                  <Option value="black">黑色</Option>
                  <Option value="red">红色</Option>
                  <Option value="green">绿色</Option>
                  <Option value="blue">蓝色</Option>
                </Select>
              </Col>
            </Row>
            <Row type="flex" align="middle" style={{ marginBottom: mb }}>
              <Col span={keyW} >秒针颜色：</Col>
              <Col span={valueW} >
                <Select defaultValue={secondHandColor} style={{ width: selectW }} onChange={secondHandColor => { this.setState({ secondHandColor }) }}>
                  <Option value="red">红色</Option>
                  <Option value="green">绿色</Option>
                  <Option value="blue">蓝色</Option>
                  <Option value="black">黑色</Option>
                </Select>
              </Col>
            </Row>
          </Card>
        </div>
      </div >
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
