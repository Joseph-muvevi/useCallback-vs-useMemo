import React, {useState} from 'react';
import { 
	Container, 
	Typography, 
	Button, 
	ButtonGroup, 
	// Stack, 
	// Alert, 
	// AlertTitle 
} from "@mui/material";

const HooksCounter = () => {

	const [counter, setCounter] = useState(0)

	const decrementFives = () => {
		for(let i = 0; i < 5; i++){
			setCounter(prevCounter => prevCounter - 1)
		}
	}
	const incrementFives = () => {
		for(let i = 0; i < 5; i++){
			setCounter(prevState => prevState + 1)
		}
	}

	// const customDecrease = () => {
	// 	return (
	// 		<Stack>
	// 			<Alert severity="warning">
	// 				<AlertTitle>Custom Decrease Coming Soon</AlertTitle>
	// 				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
	// 				Lorem Ipsum has been the industry's standard dummy text ever since the
	// 				1500s, when an unknown printer took a galley of type and scrambled it to
	// 				make a type specimen book.
	// 			</Alert>
	// 		</Stack>
	// 	)
	// }

	// const customIncrease = () => {
	// 	return (
	// 		<Alert severity="warning">
	// 			<AlertTitle>Custom Increase is Coming soon</AlertTitle>
	// 			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
	// 			Lorem Ipsum has been the industry's standard dummy text ever since the
	// 			1500s, when an unknown printer took a galley of type and scrambled it to
	// 			make a type specimen book.
	// 		</Alert>
	// 	)
	// }

	return (
		<Container>
			<Typography variant="h2" component="h2">
				Counter {counter}
			</Typography>

			<ButtonGroup variant="contained" color="secondary">
				<Button onClick={() => setCounter(counter - 1)}>
					Decrease
				</Button>
				{/* <Button  onClick={customDecrease}>
					Custom Decrease
				</Button> */}
				<Button onClick={decrementFives}>
					Decrement By 5
				</Button>
				<Button onClick={() => setCounter(0)}>
					Initialize
				</Button>
				<Button onClick={incrementFives}>
					Increment By 5
				</Button>
				{/* <Button onClick={customIncrease}>
					Custom Increase
				</Button> */}
				<Button onClick={() => setCounter(counter + 1)}>
					Increase
				</Button>
			</ButtonGroup>
		</Container>
	)
}

export default HooksCounter
