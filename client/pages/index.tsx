import React, { useState, useEffect } from 'react';

// Styles
import { Container } from '@pages/Main/styles' ;

const Main = () => {
  return (
    <Container>
      <section className={'title'}>
        {`안녕하세요,
          저는 개발자 박병훈입니다.`}
      </section>
      <section className={'content'}>
        {`스타트업에서 2년째 프론트엔드 개발을 맡고 있으며, 
          읽기 쉬운 코드로 금방 사용법을 알 수 있는 컴포넌트를 개발 하는것을 좋아합니다. 
          기획자, 디자이너, 타 개발자 분들과 소통 및 협업하며 주도적으로 개발 업무를 진행하는 것을 선호합니다.`}
      </section>
    </Container>
  );
};

export default Main;
