import React from "react";
import styled from "styled-components";
import { NameBlock } from "../../componentStyled/nameBlock";
import banner1 from "./picture/banner1.png";
import banner2 from "./picture/banner2.png";
import banner3 from "./picture/banner3.png";
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
					<img src={banner1} alt="" />
				</Item>
				<Item>
					<img src={banner2} alt="" />
				</Item>
				<Item>
					<img src={banner3} alt="" />
				</Item>
			</ListItems>
		</>
	);
};

export default Banners;
