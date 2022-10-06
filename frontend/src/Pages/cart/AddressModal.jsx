import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import {
  Box,
  VStack,
  Flex,
  Image,
  Text,
  Button,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';

function Addressform({ handleclick }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formdata, setFormdata] = React.useState({});

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });

    // toast.success("Address Added");
  };

  return (
    <>
      <Button
        pt='0.25rem'
        pb='0.25rem'
        fontSize='14px'
        backgroundColor='lightgray'
        onClick={onOpen}>
        + Add New Address
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size='3xl' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex>
              <Box>
                <Image
                  w='16px'
                  h='16px'
                  src='https://in.sugarcosmetics.com/desc-images/Add_Address.svg'
                  alt=''
                />
              </Box>
              <Box pr='0.5rem' pl='0.5rem'>
                <Text fontSize='15px' fontWeight='450' mp='2px'>
                  Add New Delivery Address
                </Text>
              </Box>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w='100%'>
              <Flex justifyContent='space-between' w='100%'>
                <Box w='50%'>
                  <Box>
                    <Text fontSize='13px' mb='2px'>
                      First Name*
                    </Text>
                  </Box>
                  <Input
                    type='text'
                    border='none'
                    fontSize='13px'
                    backgroundColor='#fff'
                    borderBottom='1px solid #eaeaec'
                    name='firstname'
                    placeholder='Enter First Name'
                    w='95%'
                    outline='none'
                    onChange={handleChange}
                  />
                </Box>
                <Box w='50%'>
                  <Box>
                    <Text fontSize='13px' mb='2px'>
                      Last Name*
                    </Text>
                  </Box>
                  <Input
                    type='text'
                    border='none'
                    fontSize='13px'
                    backgroundColor='#fff'
                    borderBottom='1px solid #eaeaec'
                    name='lastname'
                    placeholder='Enter Last Name'
                    w='95%'
                    outline='none'
                    onChange={handleChange}
                  />
                </Box>
              </Flex>
              <Box w='100%'>
                <Box>
                  <Text fontSize='13px' mb='2px'>
                    Phone Number*
                  </Text>
                </Box>
                <Input
                  type='text'
                  border='none'
                  fontSize='13px'
                  backgroundColor='#fff'
                  borderBottom='1px solid #eaeaec'
                  name='phone'
                  placeholder='Enter Registered Phone Number'
                  w='95%'
                  outline='none'
                  onChange={handleChange}
                />
              </Box>
              <Box w='100%'>
                <Box>
                  <Text fontSize='13px' mb='2px'>
                    Address*
                  </Text>
                </Box>
                <Input
                  type='text'
                  border='none'
                  fontSize='13px'
                  backgroundColor='#fff'
                  borderBottom='1px solid #eaeaec'
                  name='addressline1'
                  placeholder='Address Line 1'
                  w='95%'
                  outline='none'
                  onChange={handleChange}
                />
                <Input
                  type='text'
                  border='none'
                  fontSize='13px'
                  backgroundColor='#fff'
                  borderBottom='1px solid #eaeaec'
                  name='addressline2'
                  placeholder='Address Line 2'
                  w='95%'
                  outline='none'
                  onChange={handleChange}
                />
                <Input
                  type='text'
                  border='none'
                  fontSize='13px'
                  backgroundColor='#fff'
                  borderBottom='1px solid #eaeaec'
                  name='zipcode'
                  placeholder='Zipcode/Pincode'
                  w='50%'
                  outline='none'
                  onChange={handleChange}
                />{' '}
                <br />
                <Input
                  type='text'
                  border='none'
                  fontSize='13px'
                  backgroundColor='#fff'
                  borderBottom='1px solid #eaeaec'
                  name='country'
                  placeholder='Country'
                  w='50%'
                  outline='none'
                  onChange={handleChange}
                />{' '}
                <br />
                <Input
                  type='text'
                  border='none'
                  fontSize='13px'
                  backgroundColor='#fff'
                  borderBottom='1px solid #eaeaec'
                  name='state'
                  placeholder='State'
                  w='50%'
                  outline='none'
                  onChange={handleChange}
                />
                <br />
                <Input
                  type='text'
                  border='none'
                  fontSize='13px'
                  backgroundColor='#fff'
                  borderBottom='1px solid #eaeaec'
                  name='city'
                  placeholder='City'
                  w='50%'
                  outline='none'
                  onChange={handleChange}
                />
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter align='center'>
            <Flex mr='35%'>
              <Button
                borderRadius='0.25rem'
                fontSize='12px'
                backgroundColor='#fc2779'
                color='#fff'
                p='0.5rem'
                mr='0.5rem'
                ml='0.5rem'
                fontWeight='450'
                onClick={() => {
                  handleclick(formdata);
                  onClose();
                }}>
                Save and use this Address
              </Button>
              <Button
                borderRadius='0.25rem'
                fontSize='12px'
                backgroundColor='#333'
                color='#fff'
                p='0.5rem'
                mr='0.5rem'
                ml='0.5rem'
                fontWeight='450'
                onClick={onClose}>
                Cancel
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
        <ToastContainer />
      </Modal>
    </>
  );
}

export default Addressform;
