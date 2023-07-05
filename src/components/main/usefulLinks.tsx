import React from "react";
import styled from "styled-components";
import { NameBlock } from "../../componentStyled/nameBlock";

import gosUslugi from "./picture/gosUslugi.png";
import mvd from "./picture/mvd.png";
import nnLogo from "./picture/nnLogo.png";
import government from "./picture/pngtree-governmen.jpg";
import zags from "./picture/zags.png";

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
					<ItemImage src={mvd} alt="" />
					<Info>
						<h3>Главное управление Минюста России по Нижегородской области</h3>
						<a href="">to52.minjust.gov.ru</a>
					</Info>
				</Item>
				<Item>
					<ItemImage src={zags} alt="" />
					<Info>
						<h3>Нижегородский Дом бракосочетания</h3>
						<a href="">nn-svadba.ru</a>
					</Info>
				</Item>
				<Item>
					<ItemImage src={government} alt="" />
					<Info>
						<h3>Портал Госуслуг</h3>
						<a href="">www.gosuslugi.ru</a>
					</Info>
				</Item>
				<Item>
					<ItemImage src={nnLogo} alt="" />
					<Info>
						<h3>Правительство Нижегородской области</h3>
						<a href="">government-nnov.ru</a>
					</Info>
				</Item>
				<Item>
					<ItemImage src={gosUslugi} alt="" />
					<Info>
						<h3>Финансовый уполномоченный: быстро, бесплатно, справедливо</h3>
						<a href="">new.finombudsman.ru</a>
					</Info>
				</Item>
			</Grid>
		</div>
	);
};
