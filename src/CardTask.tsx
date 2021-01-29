import { Text, Divider, VStack, Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

export type Props = {
	title?: string
	content?: string
	icon?: ReactNode
}

export const CardTask: React.FC<Props> = (props) => {
	const { title, content, icon } = props
	return (
		<VStack bg='#FAF5FF' align='left'>
			<Box>
				<Text fontSize='2xl'>{title}</Text>
			</Box>
			<Box>
				<Text fontSize='1xl'>{content}</Text>
			</Box>
			<Box>{icon}</Box>
			<Divider />
		</VStack>
	)
}
