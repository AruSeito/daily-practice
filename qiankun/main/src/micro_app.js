const apps = [{
  name: 'app1', // app name registered
  entry: '//localhost:3001',
  container: '#container',
  activeRule: '/app1',
  props:{
    routerBase:"/app1"
  }
}, {
  name: 'app2', // app name registered
  entry: '//localhost:3002',
  container: '#container',
  activeRule: '/app2',
  props:{
    routerBase:"/app2"
  }
}]

export default apps;