import React from 'react';
import { connect } from 'dva';

function Examadd() {
  return (
    <div>
      添加试题
    </div>
  );
}

Examadd.propTypes = {
};

export default connect()(Examadd);
