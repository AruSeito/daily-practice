import './App.css';
import { Layout} from "antd";
import SiderBar from "./components/SiderBar"

const {Sider, Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <SiderBar />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content id="container"><div id="root"></div></Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
