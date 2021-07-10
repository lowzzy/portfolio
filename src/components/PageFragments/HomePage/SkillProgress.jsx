import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <br />
    <h2>実務で触ったことあるもの</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Rails"
        />
        <ProgressBar
          percent={80}
          text="Git"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={50}
          text="Mysql"
        />
        <ProgressBar
          percent={30}
          text="Vue"
        />
      </Col>
    </Row>
    <br />
    <h2>趣味とかで触ったもの</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="C"
        />
        <ProgressBar
          percent={60}
          text="FFMPEG"
        />
      </Col>
    </Row>

  </div>
);

export default SkillsProgress;
