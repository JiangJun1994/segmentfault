/**
 * Created by jiangjun on 2017/8/11.
 */


class Question extends React.Component{
  render(){
    <div className="container">
      <div className="row clbody">
        <div className="ant-col-lg-24">
          <ul id="myTabs" className="nav nav-tabs" role="tablist">
            <li role="presentation"
                {/*className= { this.props.collectorType === 'Active' ? "active text-center" : "text-center"}*/}
                style={{width:"20%"}}>
              <a href="#"
                 id="home-tab"
                 role="tab"
                 data-toggle="tab"
                 {/*onClick={ this.onTabClick }*/}
                 data-type="Active"
                 aria-controls="home"
                 aria-expanded="true">Active</a>
            </li>
            <li role="presentation"
                {/*className= { this.props.collectorType === 'Passive' ? "active text-center" : "text-center"}*/}
                style={{width:"20%"}}>
              <a href="#"
                 role="tab"
                 id="profile-tab"
                 data-toggle="tab"
                 {/*onClick={ this.onTabClick }*/}
                 data-type="Passive"
                 aria-controls="profile"
                 aria-expanded="false">Passive</a>
            </li>
            {/*<li role="presentation"*/}
                {/*className= { this.props.collectorType === 'Agent' ? "active text-center" : "text-center"}*/}
                {/*style={{width:"20%"}}>*/}
              {/*<a href="#"*/}
                 {/*role="tab"*/}
                 {/*id="agent-tab"*/}
                 {/*data-toggle="tab"*/}
                 {/*onClick={ this.onTabClick }*/}
                 {/*data-type="Agent"*/}
                 {/*aria-controls="agent"*/}
                 {/*aria-expanded="false">Agent</a>*/}
            {/*</li>*/}
          </ul>
          <div id="myTabContent" className="tab-content p-20">
            <div role="tabpanel"
                 {/*className={ this.props.collectorType === 'Active' ? "tab-pane fade active in" : "tab-pane fade " }*/}
                 id="home"
                 aria-labelledby="home-tab">
              <ActiveCollector />
            </div>

            <div role="tabpanel"
                 {/*className={ this.props.collectorType === 'Passive' ? "tab-pane fade active in" : "tab-pane fade " }*/}
                 id="profile"
                 aria-labelledby="profile-tab">
              <PassiveCollector />
            </div>

          </div>
        </div>
      </div>
    </div>
  }
}
export default Question
