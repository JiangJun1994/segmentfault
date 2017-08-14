/**
 * Created by jiangjun on 2017/8/11.
 */


class Question extends React.Component{
  render(){
    <div className="container">
      <div>
        <Menu  mode="horizontal">
          <Menu.Item key="question">全部</Menu.Item>
          <Menu.Item key="artucle">文章</Menu.Item>
          <Menu.Item key="jobs">职位</Menu.Item>
          <Menu.Item key="deal">交易</Menu.Item>
        </Menu>
      </div>
    </div>
  }
}