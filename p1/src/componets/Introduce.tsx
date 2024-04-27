import React from "react";
import styled from "styled-components";

const Title = styled.div`
  margin-top: 30px;
  font-size: 30px;
  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentsSentences = styled.div`
  flex-direction: column;
`;
const Image = styled.img``;

function Introduce() {
  return (
    <>
      <Title>
        <div>찾아오는 클래스,</div>
        <div>이젠 000로 쉽고 간편하게 진행하세요!</div>
      </Title>
      <Contents>
        <ContentsSentences>
          <div>단순한 공부 플랫폼이 아닙니다!</div>
          <div>근본적인 문제해결 솔루션을 통해</div>
          <div>공부에 대한 즐거운 경험을 제공해드립니다!</div>
        </ContentsSentences>
        <Image>
          <>사진넣기</>
        </Image>
      </Contents>
    </>
  );
}

export default Introduce;
