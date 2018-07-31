import React, { Component } from 'react';
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Left,
	Right,
	Body,
	Icon,
	Text,
	Item,
	Input,
	Grid,
	Col
} from 'native-base';
import { Image, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import styles from './styles';

export default class HomePage extends Component {

	constructor() {
		super();

		this.state = {
			isLoading: true,
			data: [],
			entries: [
				{
					title: 'Beautiful and dramatic Antelope Canyon',
					subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
					illustration: 'https://i.imgur.com/UYiroysl.jpg'
				},
				{
					title: 'Earlier this morning, NYC',
					subtitle: 'Lorem ipsum dolor sit amet',
					illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
				},
				{
					title: 'White Pocket Sunset',
					subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
					illustration: 'https://i.imgur.com/MABUbpDl.jpg'
				},
				{
					title: 'Acrocorinth, Greece',
					subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
					illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
				},
				{
					title: 'The lone tree, majestic landscape of New Zealand',
					subtitle: 'Lorem ipsum dolor sit amet',
					illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
				},
				{
					title: 'Middle Earth, Germany',
					subtitle: 'Lorem ipsum dolor sit amet',
					illustration: 'https://i.imgur.com/lceHsT6l.jpg'
				}
			]
		}
	}

	componentDidMount() {
	}


	render() {
		return (
			<Container>
				<Header style={styles.header}>
					<Left>
						<Button transparent>
							<Icon name='menu'/>
						</Button>
					</Left>
					<Body>
					<Title>Manga Store</Title>
					</Body>
					<Right/>
				</Header>
				<Header searchBar rounded>
					<Item>
						<Icon name="ios-search"/>
						<Input placeholder="Search"/>
						<Icon name="ios-options"/>
					</Item>
				</Header>
				<Content style={styles.content}>

					<Image source={{ uri: 'https://www.springbot.com/wp-content/uploads/2015/03/HiRes.jpg' }}
					       style={styles.image}/>

					<Grid style={styles.grid} rounded>
						<Col style={styles.col}>
							<Text style={styles.buttonText}>
								Camisas
							</Text>
							<Icon name="ios-basket" style={styles.buttonIcon}/>
						</Col>
						<Col style={styles.col}>
							<Text style={styles.buttonText}>
								Camisas
							</Text>
							<Icon name="ios-basket" style={styles.buttonIcon}/>
						</Col>
						<Col style={styles.col}>
							<Text style={styles.buttonText}>
								Camisas
							</Text>
							<Icon name="ios-basket" style={styles.buttonIcon}/>
						</Col>
						<Col style={styles.col}>
							<Text style={styles.buttonText}>
								Camisas
							</Text>
							<Icon name="ios-basket" style={[ styles.buttonIcon, styles.last ]}/>
						</Col>
					</Grid>
				</Content>
			</Container>
		);
	}


}