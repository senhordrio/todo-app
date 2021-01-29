import { HStack, Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

export type Props = {
	title: string
	icon?: ReactNode
}

export const Navbar: React.FC<Props> = (props) => {
	const { title, icon } = props
	return (
		<Box bg='tomato' h='42px'>
			<HStack justify='center'>
				<Box color='white' fontWeight='bold' fontSize='xl'>
					{title}
				</Box>
				{icon}
			</HStack>
		</Box>
	)
}
