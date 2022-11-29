import React from "react";
import styled from "styled-components";
import { NameBlock } from "../../componentStyled/nameBlock";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const ItemImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 20px;
  border-radius: 50%;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    margin: 0px;
  }
  a {
    color: rgba(48, 123, 120, 0.834);
  }
  a:hover {
    content: ">";
  }
`;

export const UsefulLinks = () => {
  return (
    <div>
      <NameBlock>Полезные ссылки</NameBlock>
      <Grid>
        <Item>
          <ItemImage
            src="https://zags.government-nnov.ru/upload/resize_cache/63d41f01df7dddb1c4101af6f2742a1c/Glavnoe-upravlenie-Minyusta-Rossii-po-NO_60_60_fitted.png"
            alt=""
          />
          <Info>
            <h3>Главное управление Минюста России по Нижегородской области</h3>
            <a href="">to52.minjust.gov.ru</a>
          </Info>
        </Item>
        <Item>
          <ItemImage
            src="https://zags.government-nnov.ru/upload/resize_cache/4933a3495917605d4104e91e9025e88f/DSC_5990_60_60_fitted.png"
            alt=""
          />
          <Info>
            <h3>Нижегородский Дом бракосочетания</h3>
            <a href="">nn-svadba.ru</a>
          </Info>
        </Item>
        <Item>
          <ItemImage
            src="https://zags.government-nnov.ru/upload/resize_cache/181e1c2185ba0f01988df5960dec1cdf/g2_01_60_60_fitted.png"
            alt=""
          />
          <Info>
            <h3>Портал Госуслуг</h3>
            <a href="">www.gosuslugi.ru</a>
          </Info>
        </Item>
        <Item>
          <ItemImage
            src="https://zags.government-nnov.ru/upload/resize_cache/af804096c15585b75925ea5644ef4cfe/Gerb-Nizhegorodskoy-oblasti_60_60_fitted.png"
            alt=""
          />
          <Info>
            <h3>Правительство Нижегородской области</h3>
            <a href="">government-nnov.ru</a>
          </Info>
        </Item>
        <Item>
          <ItemImage
            src="https://zags.government-nnov.ru/upload/resize_cache/9d40f8a5b545825e5721dfe99c2efead/slujba_fin_upol_60_60_fitted.png"
            alt=""
          />
          <Info>
            <h3>Финансовый уполномоченный: быстро, бесплатно, справедливо</h3>
            <a href="">new.finombudsman.ru</a>
          </Info>
        </Item>
      </Grid>
    </div>
  );
};
