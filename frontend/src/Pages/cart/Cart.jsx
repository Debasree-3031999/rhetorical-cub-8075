import React from "react";
import { Box, VStack, Flex, Image, Text, Button } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { SingleProduct } from "./Singlecartprod";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const Cart = () => {
  const navigate = useNavigate();
  const [totalprice, setTotalprice] = React.useState(100);
  const [cartprods, setCartProds] = React.useState([]);
  const { currentUser } = useSelector((state) => state.user);

  const getdata = async () => {
    await axios
      .get(`http://localhost:8080/api/cart/${currentUser._id}`)
      .then((res) => {
        setCartProds(res.data);
      });
  };

  React.useEffect(() => {
    getdata();
  }, []);
  // currentUser._id

  return (
    <Box w="100%" pr="1rem" pl="1rem">
      <VStack
        w="100%"
        mt="1.5rem"
        pr="1rem"
        pl="1rem"
        borderRadius="20px"
        boxShadow="md"
        backgroundColor="#fff"
      >
        <Flex w="100%" direction={["column", "column", "row"]}>
          <Flex
            w={["100%", "100%", "50%"]}
            direction="column"
            ml="1rem"
            mr="1rem"
          >
            <Flex
              w="100%"
              mt="1rem"
              fontSize="14px"
              color="#575555"
              justifyContent="space-between"
            >
              <Flex gap="10px">
                <Box>
                  <Image
                    src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg"
                    alt=""
                    w="20px"
                  />
                </Box>
                Order Summary
              </Flex>
              <Box textDecoration="underline" fontSize="1rem">
                Cart Total : RS. {totalprice - 100}.00
              </Box>
            </Flex>
            <Flex mt="0.5rem" w="100%">
              <Box backgroundColor="rgb(250,249,249)" h="110px" w="100%">
                <Flex p="0.5rem" w="100%">
                  <Flex h="100px" w="60%">
                    <Box w="25%" p="5px 15px">
                      <Image
                        h="100%"
                        w="100%"
                        borderRadius="0.25rem"
                        src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-mini-lipstick-12-baby-houseman-28220228632659_584be809-56c3-4baf-b90b-8db9e95b2afe.jpg?v=1659698252"
                        alt=""
                      />
                    </Box>
                    <Box w="70%">
                      <Box
                        fontSize="12px"
                        fontWeight="550"
                        color="#575555"
                        textAlign="left"
                        ml="5px"
                        mt="5px"
                      >
                        <Text mb="2px">
                          Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman
                        </Text>
                      </Box>
                      <Box
                        ml="5px"
                        textAlign="left"
                        fontSize="10px"
                        fontWeight="500"
                        color="#fc2779"
                      >
                        BONUS UNLOCKED
                      </Box>
                    </Box>
                  </Flex>
                  <Box w="40%" textAlign="right" mt="1.5rem">
                    <Button
                      border="1px solid #dee2e6"
                      backgroundColor="#faf9f9"
                    >
                      <Flex fontSize="12px">
                        <Text textDecoration="underline" fontWeight="400">
                          +Add Item{" "}
                        </Text>
                        <Text> (</Text>
                        <Text textDecoration="line-through">1599</Text>
                        <Text color="#fc2779">₹199)</Text>
                      </Flex>
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Flex mt="0.5rem" w="100%">
              <Box backgroundColor="rgb(250,249,249)" h="110px" w="100%">
                <Flex p="0.5rem" w="100%">
                  <Flex h="100px" w="60%">
                    <Box w="25%" p="5px 15px">
                      <Image
                        h="100%"
                        w="100%"
                        borderRadius="0.25rem"
                        src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_bf362c65-33b1-46ad-97d8-b94a35870aeb.jpg?v=1645631016"
                        alt=""
                      />
                    </Box>
                    <Box w="70%">
                      <Box
                        fontSize="12px"
                        fontWeight="550"
                        color="#575555"
                        textAlign="left"
                        ml="5px"
                        mt="5px"
                      >
                        <Text mb="2px">
                          Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman
                        </Text>
                      </Box>
                      <Box
                        ml="5px"
                        textAlign="left"
                        fontSize="10px"
                        fontWeight="500"
                        color="#fc2779"
                      >
                        BONUS UNLOCKED
                      </Box>
                    </Box>
                  </Flex>
                  <Box w="40%" textAlign="right" mt="1.5rem">
                    <Button
                      border="1px solid #dee2e6"
                      backgroundColor="#faf9f9"
                    >
                      <Flex fontSize="12px">
                        <Text textDecoration="underline" fontWeight="400">
                          +Add Item{" "}
                        </Text>
                        <Text> (</Text>
                        <Text textDecoration="line-through">1599</Text>
                        <Text color="#fc2779">₹199)</Text>
                      </Flex>
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Flex mt="0.5rem" w="100%">
              <Box backgroundColor="rgb(250,249,249)" h="110px" w="100%">
                <Flex p="0.5rem" w="100%">
                  <Flex h="100px" w="60%">
                    <Box w="25%" p="5px 15px">
                      <Image
                        h="100%"
                        w="100%"
                        borderRadius="0.25rem"
                        src="https://cdn.shopify.com/s/files/1/0906/2558/products/GWP-1199-02.jpg?v=1659110535"
                        alt=""
                      />
                    </Box>
                    <Box w="70%">
                      <Box
                        fontSize="12px"
                        fontWeight="550"
                        color="#575555"
                        textAlign="left"
                        ml="5px"
                        mt="5px"
                      >
                        <Text mb="2px">
                          Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman
                        </Text>
                      </Box>
                      <Box
                        ml="5px"
                        textAlign="left"
                        fontSize="10px"
                        fontWeight="500"
                        color="#fc2779"
                      >
                        BONUS UNLOCKED
                      </Box>
                    </Box>
                  </Flex>
                  <Box w="40%" textAlign="right" mt="1.5rem">
                    <Button
                      border="1px solid #dee2e6"
                      backgroundColor="#faf9f9"
                    >
                      <Flex fontSize="12px">
                        <Text textDecoration="underline" fontWeight="400">
                          +Add Item{" "}
                        </Text>
                        <Text> (</Text>
                        <Text textDecoration="line-through">1599</Text>
                        <Text color="#fc2779">₹199)</Text>
                      </Flex>
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            {/* cart */}
            {/* <Text>cart</Text> */}
            <Flex w="100%" backgroundColor="#fff" direction="column">
              {cartprods?.map((ele) => (
                <SingleProduct
                  key={ele.id}
                  elm={ele}
                  setTotalprice={setTotalprice}
                  totalprice={totalprice}
                  setCartProds={setCartProds}
                />
              ))}
            </Flex>
          </Flex>
          <Flex
            w={["100%", "100%", "50%"]}
            direction="column"
            ml="1rem"
            mr="1rem"
          >
            <Flex mt="1rem">
              <Flex fontSize="1rem" gap="5px" color="#575555">
                <Image
                  src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg"
                  alt=""
                  verticalAlign="middle"
                  w="20px"
                  h="20px"
                />{" "}
                <Box>Offers nad Price Details</Box>
              </Flex>
            </Flex>
            <VStack backgroundColor="#faf9f9" borderRadius="10px" p="0.5rem">
              <Flex
                w="100%"
                color="#fc2779"
                justifyContent="space-between"
                pt="0.5rem"
                pb="0.5rem"
                pr="1rem"
                pl="1rem"
              >
                <Flex>
                  <Box align="center" color="#fc2779">
                    <Image
                      w="20px"
                      h="20px"
                      verticalAlign="middle"
                      src="https://in.sugarcosmetics.com/desc-images/Offers_icon.svg"
                      alt=""
                    />
                  </Box>
                  <Box pr="0.5rem" pl="0.5rem">
                    <Text fontSize="15px">GAU2499</Text>
                  </Box>
                </Flex>
                <Box>X</Box>
              </Flex>
              <Box p="0.5rem" w="100%">
                <Flex gap="5px">
                  <Box>
                    <Image
                      h="20px"
                      w="20px"
                      src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg"
                      alt=""
                    />
                  </Box>
                  <Box>
                    <Flex fontSize="13px">
                      {" "}
                      <Box textDecoration="underline">Pric</Box>{" "}
                      <Box>e Details</Box>{" "}
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box backgroundColor="white" borderRadius="0.25rem" w="100%">
                <Box pt="0.5rem" pb="0.5rem" w="100%" pr="0.75rem" pl="0.75rem">
                  <Flex justifyContent="space-between" fontSize="13px" w="100%">
                    <Flex gap="5px">
                      <Box>
                        <Image
                          w="15px"
                          h="15px"
                          src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg"
                          alt=""
                        />
                      </Box>
                      <Box>Cart Sub Total:</Box>
                    </Flex>
                    <Box>
                      <Box>₹ {totalprice}.00</Box>
                    </Box>
                  </Flex>
                </Box>
                <Box pt="0.5rem" pb="0.5rem" w="100%" pr="0.75rem" pl="0.75rem">
                  <Flex justifyContent="space-between" fontSize="13px" w="100%">
                    <Flex gap="5px">
                      <Box>
                        <Image
                          w="15px"
                          h="15px"
                          src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg"
                          alt=""
                        />
                      </Box>
                      <Box>Shipping Cost:</Box>
                    </Flex>
                    <Box>
                      <Box>₹ 00.00</Box>
                    </Box>
                  </Flex>
                </Box>
                <Box pt="0.5rem" pb="0.5rem" w="100%" pr="0.75rem" pl="0.75rem">
                  <Flex justifyContent="space-between" fontSize="13px" w="100%">
                    <Flex gap="5px">
                      <Box>
                        <Image
                          w="15px"
                          h="15px"
                          src="https://in.sugarcosmetics.com/desc-images/Discount.svg"
                          alt=""
                        />
                      </Box>
                      <Box>Discount applied:</Box>
                    </Flex>
                    <Box>
                      <Box>₹ 100.00</Box>
                    </Box>
                  </Flex>
                </Box>
                <Box pt="0.5rem" pb="0.5rem" w="100%" pr="0.75rem" pl="0.75rem">
                  <Flex fontSize="13px" w="100%" wrap="wrap">
                    <Flex gap="5px" w="70%">
                      <Box>
                        <Image
                          w="15px"
                          h="15px"
                          src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg"
                          alt=""
                        />
                      </Box>
                      <Box>Amount Payable:</Box>
                    </Flex>
                    <Box w="30%" textAlign="right">
                      <Box>₹ {totalprice - 100}.00</Box>
                    </Box>
                    <Box fontSize="10.5px" pr="1rem" pl="1rem">
                      <Box>Including ₹100 in Taxes</Box>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              <Box pt="0.5rem" pb="0.5rem" mt="1rem" mb="1rem" w="100%">
                <Flex w="100%">
                  <Flex w="30%" border="1px solid #dee2eb" fontSize="13px">
                    <Flex
                      w="100%"
                      pt="0.5rem"
                      pr="1rem"
                      pl="1rem"
                      onClick={() => navigate("/")}
                    >
                      <Box>
                        <IoIosArrowBack />
                      </Box>
                      <Box
                        textDecoration="underline"
                        fontSize="13px"
                        pr="0.25rem"
                        pl="0.25rem"
                      >
                        Continue Shopping
                      </Box>
                    </Flex>
                  </Flex>
                  <Flex w="70%">
                    <Button
                      w="100%"
                      _hover={{ backgroundColor: "#212529" }}
                      fontWeight="450"
                      fontSize="13px"
                      color="#fff"
                      pt="0.5rem"
                      pb="0.5rem"
                      backgroundColor="#212529"
                      onClick={() => navigate("/checkout")}
                    >
                      Delivery Information
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </VStack>
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
};
