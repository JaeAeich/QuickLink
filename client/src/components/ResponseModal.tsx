import {
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	IconButton,
	Tooltip,
	Box,
	Flex,
	Text,
	Heading,
} from '@chakra-ui/react';
import { AiOutlineCopy } from 'react-icons/ai';
import { ApiResponse } from '../App';
import { useState } from 'react';

function ResponseModal({
	url,
	short,
	expiry,
	rate_limit,
	rate_limit_reset,
}: ApiResponse) {
	const [urlCopied, setUrlCopied] = useState(false);
	const [shortCopied, setShortUrlCopied] = useState(false);
	return (
		<>
			<ModalOverlay />
			<ModalContent
				bg='white'
				fontFamily='monospace'
				borderRadius='md'
				boxShadow='lg'
				maxW='400px'
			>
				<ModalCloseButton _hover={{ backgroundColor: 'red' }} />
				<ModalHeader>
					<Heading fontSize='3xl'>Shortened URL Details</Heading>
				</ModalHeader>
				<ModalBody>
					<Box>
						<Text fontSize='2xl' fontWeight='bold'>
							Original URL:
						</Text>
						<Flex justifyContent='space-between'>
							<Flex
								p='0.6rem'
								bg='teal.500'
								color='white'
								fontStyle='oblique'
								justifyContent='space-between'
								alignItems='center'
								borderRadius='2rem'
								width='100%'
								mb={2}
							>
								{url}
								<Tooltip
									label={urlCopied ? 'Copied!' : 'Copy Original URL'}
									placement='right'
								>
									<IconButton
										bg={urlCopied ? 'gray.800' : 'teal:400'}
										border='1px solid black'
										color='white'
										icon={<AiOutlineCopy />}
										aria-label='Copy Short URL'
										size='sm'
										ml={2}
										onMouseDown={() => {
											setShortUrlCopied(false);
										}}
										onClick={() => {
											navigator.clipboard.writeText(url);
										}}
										onMouseUp={() => setUrlCopied(true)}
									/>
								</Tooltip>
							</Flex>
						</Flex>
					</Box>
					<Box>
						<Text fontSize='2xl' fontWeight='bold'>
							Short URL:
						</Text>
						<Flex justifyContent='space-between'>
							<Flex
								p='0.6rem'
								bg='teal.500'
								justifyContent='space-between'
								alignItems='center'
								borderRadius='2rem'
								width='100%'
								mb={2}
							>
								{short}
								<Tooltip
									label={shortCopied ? 'Copied!' : 'Copy Short URL'}
									placement='right'
								>
									<IconButton
										bg={shortCopied ? 'gray.800' : 'teal:400'}
										border='1px solid black'
										color='white'
										icon={<AiOutlineCopy />}
										aria-label='Copy Short URL'
										size='sm'
										ml={2}
										onMouseDown={() => {
											setUrlCopied(false);
										}}
										onClick={() => {
											navigator.clipboard.writeText(short);
										}}
										onMouseUp={() => setShortUrlCopied(true)}
									/>
								</Tooltip>
							</Flex>
						</Flex>
					</Box>
					<Flex justifyContent='space-between'>
						<Text>Expiry:</Text>
						<Text fontWeight='bold'>{expiry}</Text>
					</Flex>
					<Flex justifyContent='space-between'>
						<Text>Rate Limit Remaining:</Text>
						<Text fontWeight='bold'>{rate_limit}</Text>
					</Flex>
					<Flex justifyContent='space-between'>
						<Text>Rate Limit Reset Time:</Text>
						<Text fontWeight='bold'>{rate_limit_reset}</Text>
					</Flex>
				</ModalBody>
				<ModalFooter>
					<Button
						colorScheme='teal'
						onClick={() => window.open(url, '_blank')}
						mr={3}
					>
						Visit URL
					</Button>
				</ModalFooter>
			</ModalContent>
		</>
	);
}

export default ResponseModal;
