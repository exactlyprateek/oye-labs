import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Center, Container, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/layout';

import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Select } from '@chakra-ui/select';
import Head from 'next/head';
import { useState } from 'react';
// import "../styles/globals.css"
export default function Home() {
	const [ details, setDetails ] = useState([]);
	const [ name, setName ] = useState('');
	const [ number, setNumber ] = useState(0);
	const [ cocktail, setCocktail ] = useState('Malta');
	const setInital = () => {
		setName('');
		setNumber(0);
		setCocktail('Malta');
	};
	const handleAdd = () => {
		setDetails([ { name: name, number: number, cocktail: cocktail }, ...details ]);
		setInital();
		console.log(details)
	};
	const deleteVal = (i) => {
		let det = details;
		det.pop(i);
		setDetails(det);
		console.log([...details]);
	};
	return (
		<Box w="100%" backgroundColor="#333333">
			<Head>
				<title>Oye Labs Task</title>
				{/* <meta name="description" content="Generated by create next app" /> */}
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box d="flex" maxW="100vw" height="8vh" backgroundColor="#222">
				<Button
					as={'li'}
					borderRadius="4px 2px 4px 10px"
					p="0.75rem 1rem"
					fontSize="1rem"
					m="0.8rem 0.8rem 0 auto"
				>
					<Heading fontSize="xl">task</Heading>
				</Button>
			</Box>
			<Container maxW="container.xl">
				<Center>
					<SimpleGrid columns={[ '1', '1', '2', '2' ]} spacing="10" color="white" my="10" minH="92vh">
						<Box rounded="lg" shadow="lg" minW="50vh" p="2.5rem" h="50vh" bg="#222">
							<Heading>Add Entry</Heading>
							<FormControl id="email">
								<FormLabel mt="0.4rem">Name</FormLabel>
								<Input
									value={name}
									onChange={(e) => setName(e.target.value)}
									bg="white"
									color="black"
									placeholder="Enter your name"
									type="text"
								/>
								<FormLabel mt="0.4rem">Select Cocktain</FormLabel>
								<Select onChange={(e) => setCocktail(e.target.value)} bg="white" color="black">
									<option>Malta</option>
									<option>Santrá</option>
									<option>Sönfee</option>
								</Select>
								<FormLabel mt="0.4rem">Points (0 to 10)</FormLabel>
								
									<Input
										placeholder="Points"
										color="black"
										bg="white"
										value={number}
										onChange={(e) => setNumber(e.target.value)}
									/>
								
								<Flex>
									<Button
										onClick={setInital}
										rounded="2px"
										mt="1rem"
										ml="auto"
										mr="0.4rem"
										colorScheme="whiteAlpha"
									>
										Reset
									</Button>
									<Button
										rounded="2px"
										onClick={handleAdd}
										disabled={name === '' && number === 0}
										mt="1rem"
										ml="0.4rem"
										colorScheme="orange"
									>
										Add
									</Button>
								</Flex>
							</FormControl>
						</Box>

						<Box
							overflow="scroll"
							shadow="lg"
							color="white"
							rounded="lg"
							minW="50vh"
							p="2.5rem"
							h="50vh"
							bg="#222"
						>
							<Heading>Entries</Heading>
							<Text>hello</Text>
							<Table colorScheme="whiteAlpha" variant="simple">
								<Thead>
									<Tr bg="#f90">
										<Th color="#212121">
											<Heading fontSize="md">Name</Heading>
										</Th>
										<Th color="#212121">
											<Heading fontSize="md">Cocktail</Heading>
										</Th>
										<Th color="#212121">
											<Heading fontSize="md">Points Given</Heading>
										</Th>
										<Th color="#212121">
											<Heading fontSize="md">Action</Heading>
										</Th>
									</Tr>
								</Thead>

								{details ? (
									<Tbody>
										{details.map((i, idx) => (
											<Tr>
												<Td>{i.name}</Td>
												<Td>{i.cocktail}</Td>
												<Td>{i.number}</Td>
												<Td>
													<Button size="sm" rounded="2px" colorScheme="whiteAlpha" ml="2">
														Edit
													</Button>
													<Button
														id={idx}
														onClick={(e) => deleteVal(e.target.id)}
														size="sm"
														rounded="2px"
														colorScheme="whiteAlpha"
														ml="2"
													>
														Delete
													</Button>
												</Td>{' '}
											</Tr>
										))}
									</Tbody>
								) : null}
							</Table>
						</Box>
					</SimpleGrid>{' '}
				</Center>
			</Container>
		</Box>
	);
}
