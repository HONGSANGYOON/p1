import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;

  @media screen and (min-width: 1441px) {
    background-color: #ffffff;
    padding: 0 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-width: 1100px;
  padding: 0 20px;
  display: flex;
  /* justify-content: space-between; */
  @media screen and (max-width: 1440px) {
    padding: 0 10px;
  }
`;

const S1 = styled.div``;

const S2 = styled.div`
  display: flex;
`;
//헤더부분 버튼 공용스타일
const S1button = styled.button`
  border: none;
  border-radius: 8px;
`;
const S2button = styled.button`
  border: none;
  border-radius: 8px;
`;
const S3button = styled.button`
  border: none;
  border-radius: 8px;
`;
const Separator = styled.span`
  color: #9a9797;
  text-align: center;
  display: inline-block;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <S1>
          <S1button>견적요청하기</S1button>
        </S1>
        <S2>
          <S2button>자주 찾는 질문</S2button>
          <S2button>회사소개</S2button>
          <Separator>|</Separator>
          <S3button>회원가입하기</S3button>
        </S2>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
