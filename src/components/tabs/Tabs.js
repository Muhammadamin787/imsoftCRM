import React from 'react';
import { Tabs, Button } from 'antd';
import "./Tabs.scss";
import {ServiceIcon} from "../functions/icons"

const { TabPane } = Tabs;

class BottomTabs extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = new Array(2).fill(null).map((_, index) => {
      const id = String(index + 1);
      return { title: `Tab ${id}`, content: `Content of Tab Pane ${id}`, key: id };
    });
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  // const [is, setIs] = useState(0)

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div>
        {/* <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>ADD</Button>
        </div> */}
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
          className="site-footer__tabs"
        >
          {this.state.panes.map(pane => (
            <TabPane 
              tab={<div className="site-footer__tab" ><ServiceIcon/>  <span>{pane.title}</span></div>}
              key={pane.key} 
              forceRender="true"
              >
              {/* {pane.content}   */}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default BottomTabs

// ReactDOM.render(<Demo />, mountNode);