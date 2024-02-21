import React from "react";
import { Box, Container, Flex, Heading, Text, Icon, SimpleGrid, Stack, Image, Button, Input, Textarea } from "@chakra-ui/react";
import { FaPrint, FaCopy, FaSearch, FaFax, FaStar, FaMapMarkerAlt, FaQrcode, FaPaperPlane } from "react-icons/fa";

const Feature = ({ title, icon }) => {
  return (
    <Stack align="center" textAlign="center">
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Text fontWeight="bold">{title}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Stack spacing={10}>
        {/* Header */}
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <Box>
            <Heading color="blue.600">Brother MFC-J4540DW</Heading>
            <Text fontSize="lg" color="gray.600">
              Votre compagnon d'impression professionnel au quotidien
            </Text>
          </Box>
          <Image borderRadius="md" src="https://images.unsplash.com/photo-1674644653898-5edf4ac87c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxCcm90aGVyJTIwUHJpbnRlcnxlbnwwfHx8fDE3MDg1MjY3OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Brother MFC-J4540DW" objectFit="cover" w={{ base: "100%", sm: "50%" }} />
        </Flex>

        {/* Features */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          <Feature title="Imprimer" icon={FaPrint} />
          <Feature title="Copier" icon={FaCopy} />
          <Feature title="Numériser" icon={FaSearch} />
          <Feature title="Faxer" icon={FaFax} />
        </SimpleGrid>

        {/* Product Specifications */}
        <Box bg="blue.50" p={5} borderRadius="md">
          <Heading size="md" color="blue.600">
            Spécifications du Produit
          </Heading>
          <Text color="gray.600">
            - Vitesse d'impression rapide jusqu'à 22 ppm
            <br />
            - Résolution d'impression jusqu'à 4800 x 1200 dpi
            <br />
            - Connectivité sans fil et Ethernet
            <br />
            - Écran tactile LCD de 6,8 cm
            <br />- Cartouches d'encre haute capacité
          </Text>
        </Box>

        {/* Promotions */}
        <Box textAlign="center">
          <Heading size="lg" color="yellow.500">
            Remboursement de 100€ !
          </Heading>
          <Text color="gray.600">Achetez maintenant et bénéficiez d'un remboursement exclusif.</Text>
        </Box>

        {/* Service Offers */}
        <Stack spacing={8}>
          <Heading size="md" color="cyan.600">
            Offres de Service
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box bg="white" boxShadow="md" p={5} borderRadius="md">
              <Heading size="sm" color="blue.600">
                Maintenance sur mesure
              </Heading>
              <Text color="gray.600">Choisissez un plan de maintenance adapté à vos besoins et assurez la longévité de votre imprimante.</Text>
            </Box>
            <Box bg="white" boxShadow="md" p={5} borderRadius="md">
              <Heading size="sm" color="blue.600">
                Abonnements d'encre
              </Heading>
              <Text color="gray.600">Ne manquez jamais d'encre avec nos plans d'abonnement flexibles et économiques.</Text>
            </Box>
          </SimpleGrid>
        </Stack>

        {/* Testimonials */}
        <Stack spacing={8}>
          <Heading size="md" color="magenta.600">
            Témoignages
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Box key={index} bg="white" boxShadow="md" p={5} borderRadius="md">
                <Icon as={FaStar} color="yellow.500" />
                <Text color="gray.600">"Cette imprimante a révolutionné la façon dont nous travaillons. Simple, rapide et efficace."</Text>
                <Text color="blue.500" fontWeight="bold">
                  - Entreprise XYZ
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>

        {/* Contact Section */}
        <Stack bg="blue.100" p={10} borderRadius="md" spacing={5}>
          <Heading size="md" color="blue.600">
            Contactez-nous
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <Stack spacing={3} flex={1}>
              <Input placeholder="Votre nom" />
              <Input placeholder="Votre email" />
              <Textarea placeholder="Votre message" />
              <Button colorScheme="blue" leftIcon={<FaPaperPlane />}>
                Envoyer
              </Button>
            </Stack>
            <Box flex={1} textAlign="center">
              <Icon as={FaMapMarkerAlt} w={10} h={10} color="blue.500" />
              <Text fontWeight="bold">Notre localisation</Text>
              <Image src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MHx8fHwxNzA4NTI2NzkwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Localisation" />
              <Box mt={3}>
                <Icon as={FaQrcode} w={10} h={10} color="gray.600" />
                <Text>Scannez pour obtenir les détails</Text>
              </Box>
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
