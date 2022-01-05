import React, { Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Container, Typography } from "@mui/material";

class ClassCounter extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 count: 0
		}
	}

	increment = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	decrement = () => {
		this.setState({
			count: this.state.count - 1
		})
	}

	initialize = () => {
		this.setState({
			count: 0
		})
	}

	render() {
		return (
			<div>
				<Container>
					<Typography variant="h2" component="h2">
						Count: {this.state.count}
					</Typography>

					<ButtonGroup
						variant="contained"
						color="primary"
					>
						<Button onClick={this.decrement}>
							Decrease
						</Button>
						<Button onClick={this.initialize}>
							Initialize
						</Button>
						<Button onClick={this.increment}>
							Increase
						</Button>
					</ButtonGroup>
				</Container>
			</div>
		)
	}
}

export default ClassCounter
