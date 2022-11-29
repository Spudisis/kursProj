import React from "react";
import styled from "styled-components";
import { NameBlock } from "../../componentStyled/nameBlock";

const ListItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;
const Banners = () => {
  return (
    <>
      <NameBlock>Баннеры</NameBlock>
      <ListItems>
        <Item>
          <img
            src="https://zags.government-nnov.ru/upload/resize_cache/3e97ed0c0d07160748325c783d658565/1_351_134_fitted.png"
            alt=""
          />
        </Item>
        <Item>
          <img
            src="https://zags.government-nnov.ru/upload/resize_cache/46a33c8307ea6c51c9e582bc88ec2627/zagruzhennoe_351_134_fitted.png"
            alt=""
          />
        </Item>
        <Item>
          <img
            src="https://zags.government-nnov.ru/upload/resize_cache/5d10b4435b45910cb03569f05708ad12/600x600_351_134_fitted.png"
            alt=""
          />
        </Item>
      </ListItems>
    </>
  );
};

export default Banners;
