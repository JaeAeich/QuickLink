import {
	ChakraProvider,
	Flex,
	Box,
	Input,
	Button,
	Icon,
	Link as ChakraLink,
	IconButton,
	Text,
	extendTheme,
	Image,
	Card,
	CardBody,
	Stack,
	Heading,
	Divider,
	CardFooter,
	Avatar,
	Grid,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { IconBase } from 'react-icons';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const theme = extendTheme({
	fonts: {
		body: 'Helvetica, Arial, sans-serif',
		heading: 'Helvetica, Arial, sans-serif',
	},
});

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Flex minHeight='100vh' direction='column'>
				{/* Navbar */}
				<Flex bg='teal.500' color='white' align='center' justify='center' p={4}>
					<Image
						src='/src/assets/android-chrome-512x512.png'
						alt='Logo'
						boxSize='40px'
						mr={2}
					/>
					<Text fontSize='xl' fontWeight='bold'>
						QuickLink
					</Text>
				</Flex>

				<Box minHeight='100vh' display='grid' gridTemplateRows={`1fr 1fr 1fr`}>
					{/* Hero Section */}
					<Flex
						flexGrow={1}
						justify='center'
						align='center'
						p={4}
						bg='gray.800'
						color='white'
						textAlign='center'
					>
						<Box textAlign='center' width='100%' maxW='960px'>
							<Flex
								direction={{ base: 'column', md: 'row' }}
								align={{ base: 'center', md: 'center' }}
								justify={{ base: 'center', md: 'space-between' }}
							>
								<Box
									mb={{ base: 4, md: 0 }}
									textAlign={{ base: 'center', md: 'left' }}
									px={{ base: 2, md: 0 }} // Add some horizontal padding on smaller screens
								>
									<Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight='bold'>
										Shorten Your URLs with QuickLink URL Shortener
									</Text>
									<Text
										fontSize={{ base: 'md', md: 'lg' }}
										maxW='600px'
										mx='auto'
										my={4}
									>
										With QuickLink URL Shortener, you can easily shorten long
										URLs and share them with your friends. It's fast, simple,
										and free to use.
									</Text>
									<Link
										activeClass='active'
										to='input'
										spy={true}
										smooth={true}
										offset={-70} // Adjust the offset to match the height of your navbar
										duration={500} // Set the duration of the scrolling animation in milliseconds
									>
										<Button
											colorScheme='teal'
											size='lg'
											width={{ base: 'full' }}
										>
											Get Started
										</Button>
									</Link>
								</Box>
								<Image
									src='/src/assets/Hero.png'
									alt='Hero Image'
									maxW='400px'
									display={{ base: 'none', md: 'block' }}
								/>
							</Flex>
						</Box>
					</Flex>

					{/* Input Section */}
					<Flex
						flexGrow={1}
						justify='center'
						align='center'
						p={4}
						bg='gray.100'
						textAlign='center'
					>
						<Box textAlign='center' width='100%' maxW='1024px'>
							<Flex
								direction={{ base: 'column', md: 'row' }}
								justify='center'
								align='center'
							>
								<Box flexShrink={0} textAlign='center' mr={{ base: 0, md: 6 }}>
									<Image
										src='/src/assets/illustrations.png'
										alt='Illustration'
										maxW={{ base: '100%', md: '400px' }}
									/>
								</Box>
								<Box width='100%' maxW='400px'>
									<Heading size='xl' mb={4}>
										Shorten Your URL in a Snap!
									</Heading>
									<Text fontSize='lg' mb={6}>
										Say goodbye to lengthy links! With QuickLink URL Shortener,
										you can shrink your URLs in just a quack! 🦆✨
									</Text>
									<Box w='100%'>
										<Input
											placeholder='Enter your URL here'
											size='lg'
											focusBorderColor='teal.500'
											rounded='md'
											mb={4}
											name='input'
										/>
										<Button colorScheme='teal' size='lg' width='100%'>
											Shorten URL
										</Button>
									</Box>
								</Box>
							</Flex>
						</Box>
					</Flex>

					{/* Testimonial Section */}
					<Flex
						flexGrow={1}
						justify='center'
						alignItems='center'
						direction='column'
						p={4}
						bg='gray.800'
					>
						<Text
							fontSize='4xl'
							color='white'
							fontWeight='bold'
							mb={4}
							textAlign='center'
						>
							What People Are Saying
						</Text>
						<Grid
							templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
							gap={4}
							justifyContent='center'
							maxW='720px'
						>
							<Card>
								<CardBody textAlign='center'>
									<Avatar
										name='Dan Abrahmov'
										src='https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg'
									/>
									<Stack mt='6' spacing='3'>
										<Heading size='md'>Life Changed</Heading>
										<Text>
											This URL shortener is faster than my superhero speed! It
											zaps long links into tiny ones quicker than Lex Luthor can
											come up with evil schemes! 💥 With this tool, I save more
											time than I do catching falling planes! It's like the
											Flash for URLs! ⚡️
										</Text>
									</Stack>
								</CardBody>
								<Divider></Divider>
								<CardFooter>Super Man</CardFooter>
							</Card>
							<Card>
								<CardBody textAlign='center'>
									<Avatar
										name='Donald J. Trump'
										src='https://sketchok.com/images/articles/01-cartoons/000-va/24/08.jpg'
									/>
									<Stack mt='6' spacing='3'>
										<Heading size='md'>Life Changed</Heading>
										<Text>
											Well, well, well, the QuickLink URL Shortener is one
											quack-tastic tool! 🦆💨 It shrinks long links faster than
											I can flap my wings! 😄✨ No more webbed feet tripping
											over those pesky URLs! Just click, quack, and done! 🎉👌
											Give it a try, folks! You'll be shouting "Quack-tastic!"
											in no time! 🚀🌟
										</Text>
									</Stack>
								</CardBody>
								<Divider></Divider>
								<CardFooter>Donald Duck</CardFooter>
							</Card>
						</Grid>
					</Flex>
				</Box>

				{/* Footer */}
				<Flex
					bg='teal.500'
					gap='1rem'
					color='white'
					align='center'
					justify='center'
					p={4}
				>
					<Flex gap='0.2rem' justify='center' alignItems='center'>
						<Box>Made With</Box>
						<IconBase>
							<Icon as={FaHeart} />
						</IconBase>
						<Box></Box>
						by JaeAeich
					</Flex>
					<IconButton
						as={ChakraLink}
						href='https://github.com/JaeAeich'
						aria-label='GitHub'
						icon={<Icon as={FaGithub} />}
						mr={2}
						isRound
					/>
					<IconButton
						as={ChakraLink}
						href='https://www.linkedin.com/in/javed-habib/'
						aria-label='Twitter'
						icon={<Icon as={FaLinkedin} />}
						mr={2}
						isRound
					/>
				</Flex>
			</Flex>
		</ChakraProvider>
	);
}

export default App;
