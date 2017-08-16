import { Form, Input, Icon, Button } from 'antd';
const FormItem = Form.Item;

class Sign_log extends React.Component{
render(){
  const { getFieldDecorator } = this.props.form;
  const { autoCompleteResult } = this.state;
  const formItemLayout = {
    labelCol:{span:6},
    wrapperCol:{span:18}
  }
  return(
    <Form>
      <FormItem {...formItemLayout} label="username" hasfeedback>
        {getFieldDecorator("username",{
          rules: [{
            type: 'email', message: 'The input is not valid E-mail!',
          }, {
            required: true, message: 'Please input your E-mail!',
          }],
        })(<Input/>)}
      </FormItem>

      <FormItem {...formItemLayout} label="username" hasfeedback>
        {getFieldDecorator("username",{
          rules: [{
            type: 'email', message: 'The input is not valid E-mail!',
          }, {
            required: true, message: 'Please input your E-mail!',
          }],
        })(<Input/>)}
      </FormItem>
    </Form>
  )
}
}