import React from "react";
import { Box, VStack, Flex , Image,Text ,Button ,Input  } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Addressform from "./AddressModal"
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {SingleProduct} from "./Singlecartprod"
import { useDispatch, useSelector } from "react-redux";


export const Payment = () => {
    // const { total } = useSelector((state) => state.cart);
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [pay,setpay] = React.useState(false) 
    const [paytype,setPaytype] = React.useState("Cash")
    const [totalprice,setTotalprice] = React.useState(100)
    const [cartprods,setCartProds] = React.useState([])

    const getdata=()=>{
        axios.get(`http://localhost:8080/api/cart/${currentUser._id}`)
        .then((res)=>{
            console.log("zzzzzzzzz",res.data)
            setCartProds(res.data)
        })
    }
      React.useEffect(()=>{
        getdata()
        
      },[])
    
  return (
    <Box w="100%" pr="1rem" pl="1rem">
    <VStack w="100%" mt="1.5rem" pr="1rem" pl="1rem" borderRadius="20px" boxShadow='md' backgroundColor="#fff" >
      <Flex w="100%" direction={["column","column","row"]}>
        <Flex w={["100%","100%","50%"]} direction="column"  ml="1rem" mr="1rem">
                <Box p="0.5rem" w="100%">
                    <Flex gap="5px">
                        <Box>
                            <Image h="20px" w="20px" src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg" alt="" />
                        </Box> 
                        <Box >
                            <Flex fontSize="13px"> <Box textDecoration="underline">Pric</Box> <Box>e Details</Box> </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Box backgroundColor="white" borderRadius="0.25rem" w="100%" lineHeight="0px" pr="15px" pl="15px">
                    <Box pt="0.5rem"  w="100%" pr="0.75rem" pl="0.75rem">
                        <Flex justifyContent="space-between" fontSize="13px" w="100%">
                            <Flex gap="5px"> 
                                <Box>
                                    <Image w="15px" h="15px" src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg" alt="" />
                                </Box>    
                                <Box>
                                    Cart Sub Total:
                                </Box>
                            </Flex>
                            <Box>
                                <Box>₹ {totalprice}.00</Box>
                            </Box>
                        </Flex>
                    </Box>
                    <Box pt="0.5rem"  w="100%" pr="0.75rem" pl="0.75rem">
                        <Flex justifyContent="space-between" fontSize="13px" w="100%">
                            <Flex gap="5px"> 
                                <Box>
                                    <Image w="15px" h="15px" src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg" alt="" />
                                </Box>    
                                <Box>
                                    Shipping Cost:
                                </Box>
                            </Flex>
                            <Box>
                                <Box>₹ 00.00</Box>
                            </Box>
                        </Flex>
                    </Box>
                    <Box pt="0.5rem"  w="100%" pr="0.75rem" pl="0.75rem">
                        <Flex justifyContent="space-between" fontSize="13px" w="100%">
                            <Flex gap="5px"> 
                                <Box>
                                    <Image w="15px" h="15px" src="https://in.sugarcosmetics.com/desc-images/Discount.svg" alt="" />
                                </Box>    
                                <Box>
                                    Discount applied:
                                </Box>
                            </Flex>
                            <Box>
                                <Box>₹ 100.00</Box>
                            </Box>
                        </Flex>
                    </Box>
                    <Box pt="0.5rem"  w="100%" pr="0.75rem" pl="0.75rem">
                        <Flex fontSize="13px" w="100%" wrap="wrap">
                            <Flex gap="5px" w="70%"> 
                                <Box>
                                    <Image w="15px" h="15px" src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg" alt="" />
                                </Box>    
                                <Box >
                                    Amount Payable:
                                </Box>
                            </Flex>
                            <Box w="30%" textAlign="right">
                                <Box>₹ {totalprice-100}.00</Box>
                            </Box>
                            <Box fontSize="10.5px" pr="1rem" pl="1rem">
                                <Box>
                                    Including ₹100 in Taxes
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            <Flex w="100%" mt="1rem" fontSize="14px" color="#575555"  justifyContent="space-between">
                <Flex gap="10px"> 
                    <Box>
                        <Image src='https://in.sugarcosmetics.com/desc-images/shopping_cart.svg' alt='' w="20px"/>
                    </Box>
                    Order Summary
                </Flex>
                <Box textDecoration="underline">Cart Total : Rs.₹ {totalprice-100}.00</Box>
            </Flex>
            {/* cart */}
            <Flex w="100%"  backgroundColor="#fff" direction="column">
                {
                    cartprods?.map((ele)=>(
                        <SingleProduct key={ele.id} elm={ele} setTotalprice={setTotalprice} totalprice={totalprice} setCartProds={setCartProds} />
                    ))
                } 
            </Flex>
        </Flex>
        <Flex w={["100%","100%","50%"]} direction="column" ml="1rem" mr="1rem"   >
            
            <Flex mt="1rem" >
                <Flex fontSize="13px" gap="5px" color="#575555">
                    <Image src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg" alt="" verticalAlign="middle" w="20px" h="20px" /> <Box>Payment Method</Box> 
                </Flex>
            </Flex>
            <VStack backgroundColor="#faf9f9" borderRadius="10px" p="0.5rem"  mt="5px">
                <Box mt="0.5rem" mb="0.5rem" w="100%" >
                    <Text fontSize="14px" mb="2px" color="#6c757d" >Select Payment Method</Text>
                </Box>
                <VStack w="100%">
                    <Box backgroundColor="white" m="16px 0" w="100%">
                        <Flex p="0px 16px" w="100%" justifyContent="space-between" onClick={()=>{
                            setpay(!pay)
                            setPaytype("UPI")
                            console.log("payment type",paytype)
                            }}>
                            <Flex>
                                <Box>
                                    <Image w="25px" h="25px" src="https://in.sugarcosmetics.com/paymentIcons/upi.svg" alt="" />
                                </Box>
                                <Box pr="1rem" pl="1rem" >
                                    <Text fontSize="12px" fontWeight="450" mt="5px">
                                        Instant Pay Using Other UPIs(Gpay, PhonePe, BHIM etc.)
                                    </Text>
                                </Box>
                            </Flex>
                            <Box>
                                {
                                    paytype=="UPI" ? <Image src="https://in.sugarcosmetics.com/desc-images/CheckFilled.svg" alt="" mt="5px" /> : <Image src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" mt="5px" />
                                }
                                
                            </Box>
                        </Flex>
                        <Box p="8px 16px 16px" w="100%" >
                            <Input border="none" borderBottom="1px solid #eaeaec" fontSize="16px" placeholder='ENTER UPI ID' size='sm' />
                        </Box>
                    </Box>
                    <Box backgroundColor="white" m="16px 0" w="100%">
                        <Flex p="0px 16px" w="100%" justifyContent="space-between" onClick={()=>{
                            setpay(!pay)
                            setPaytype("Cash")
                            console.log("payment type",paytype)
                            }}>
                            <Flex>
                                <Box>
                                    <Image w="25px" h="25px" src="	https://in.sugarcosmetics.com/paymentIcons/cod.svg" alt="" />
                                </Box>
                                <Box pr="1rem" pl="1rem" >
                                    <Text fontSize="12px" fontWeight="450" mt="5px">
                                        Cash on Delivery
                                    </Text>
                                </Box>
                            </Flex>
                            <Box>
                                {
                                    paytype=="Cash" ? <Image src="https://in.sugarcosmetics.com/desc-images/CheckFilled.svg" alt="" mt="5px" /> : <Image src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="" mt="5px" />
                                }
                                
                            </Box>
                        </Flex>
                        <Box p="8px 16px 16px" w="100%" >
                            <Text fontSize="12px" color="#6c757d" fontWeight="450">
                                We recommend using a digital payment method for completing the payment
                            </Text>
                        </Box>
                    </Box>
                </VStack>
                <Box pt="0.5rem" pb="0.5rem" mt="1rem" mb="1rem" w="100%" >
                    <Flex w="100%">
                        <Flex w="30%" border="1px solid #dee2eb" fontSize="13px">
                            <Flex w="100%" pt="0.5rem" pr="1rem" pl="1rem" onClick={()=>navigate("/checkout")}>
                                <Box>
                                    <IoIosArrowBack/>
                                </Box>
                                <Box textDecoration="underline" fontSize="13px" pr="0.25rem" pl="0.25rem">Delivery Info</Box>
                            </Flex>
                        </Flex>
                        <Flex w="70%">
                            <Button variant='solid' _hover={{backgroundColor:"#212529"}} w="100%" fontWeight="450" fontSize="13px" color="#fff" pt="0.5rem" pb="0.5rem" backgroundColor="#212529" onClick={()=>navigate("/success")} >
                                Proceed To Payment(RS.{totalprice-100}.00)
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

