import { Button, Container, Stack, TextField } from "@mui/material";
import React, {useState} from 'react';


function HookObjects() {
	return (
		<Container>
			<br/>
			<br/>
			<form>
				<Stack width="100%" justifyContent="center">
					<TextField variant="outlined" label="First Name">
						
					</TextField>
					<br/>
					<TextField variant="outlined" label="Last Name">

					</TextField>
					<br/>
					<Button variant="contained" color="primary">
						Submit
					</Button>
				</Stack>
			</form>
		</Container>
	)
}

export default HookObjects
