import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css';
import createLoading from 'dva-loading';
import {createLogger} from 'redux-logger';
import { message } from 'antd';
// 1. Initialize
const app = dva({
    onAction: createLogger(),
// import {createLogger} from 'redux-logger';
onError(e) {
    message.error(e.message, /* duration */3);
  },
// 1. Initialize
});
app.use(createLoading());


// 2. Plugins
// app.use({});

// 3. Model
 app.model(require('./models/user').default);
 app.model(require('./models/makerUser').default);
 app.model(require('./models/class').default);
 app.model(require('./models/show').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
