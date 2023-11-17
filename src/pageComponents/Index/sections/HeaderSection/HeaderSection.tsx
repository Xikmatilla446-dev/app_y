import { Col, Row } from "antd";

import { Container, SliderCard, SecondCard } from "@/components";

import classes from "./HeaderSection.module.scss";

const HeaderSection = () => {
	return (
		<div className={classes.wrapper}>
			<Container>
				<Row gutter={[20, 20]} justify={"center"}>
					<Col xs={24} sm={24} md={24} lg={16}>
						<SliderCard />
					</Col>
					<Col xs={24} sm={24} md={16} lg={8}>
						<SecondCard />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HeaderSection;
