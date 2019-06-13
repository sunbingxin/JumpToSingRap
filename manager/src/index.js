import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css';
import createLoading from 'dva-loading';
// 1. Initialize
const app = dva();
app.use(createLoading());
// 2. Plugins
// app.use({});

// 3. Model
 app.model(require('./models/user').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
