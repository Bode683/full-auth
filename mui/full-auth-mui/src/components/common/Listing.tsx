import React from "react";
import { Box, Typography, List } from "@mui/material";
import { Spinner } from '@/components/common';

interface Config {
	label: string;
	value: string | undefined;
}

interface Props {
	config: Config[];
}

const Listing: React.FC<Props> = ({ config }) => {
	return (
		<List>
			{config.map(({ label, value }) => (
				<Box key={label} sx={{ justifyContent: 'space-between' }}>
					<Typography variant="body2" color="textPrimary">
						{label}
					</Typography>
					<Typography variant="body2" color="textPrimary">
						{value || <Spinner sm />}
					</Typography>
				</Box>
			))}
		</List>
	);
};

export default Listing;
