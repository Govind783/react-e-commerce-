import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

import aus from "../assets/aus.png";

const SinglePageFAQ = () => {
    return (
        <div>

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton >
                            <Box flex='1' textAlign='left'>
                                PRODUCT INFO
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Did you know that 1 Sukin Hydrating Mist Toner is sold every 40 seconds!?
                        Yep- if you haven't tried it, you need to. Our alcohol-free Mist Toner blends
                        Chamomile and Rosewater to help soothe, purify and cool your tired skin. And
                        did we mention it is the ultimate multi use product? It can be used before
                        and after cleansing, in the office as a 3pm pick me up, after makeup application
                        to give you a dewy complexion or just anytime your skin is feeling stressed or
                        overheated! TIP: Keep in the refrigerator to instantly refresh skin on hot days.
                        It is also amazing at blending concealer under the eyes with a beauty sponge!

                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                HOW TO USE
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Close eyes, spray onto face and neck. Use throughout the day to refresh and hydrate dry skin.


                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                THE INGREDIENTS
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Water (Aqua), Rosa Damascena Flower Water (Rose), Glycerin, Chamomilla Recutita (Matricaria) Flower Extract (Chamomile), Citric Acid, Phenoxyethanol.

                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                BRAND VALUES
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <img src={aus} />
                    </AccordionPanel>
                </AccordionItem>


            </Accordion>
        </div>
    )
}

export default SinglePageFAQ