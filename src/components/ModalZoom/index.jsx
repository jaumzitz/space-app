import styled from "styled-components"
import Image from "../Gallery/Image"
import { useState } from "react"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const Dialog = styled.dialog`
    position: absolute;
    top: 8vh;
    background-color: transparent;
    border: none;
   
   
`

const CloseButton = styled.button`
position: absolute;
        top: 30px;
        right: 30px;
        background-color: transparent;
        border: none;

        &:hover {
            cursor: pointer
        }
`



const ModalZoom = ({ photo, onModalClose }) => {

    return (
        <>
            {photo &&
                <>
                    <Overlay>
                        <Dialog open={!!photo}>
                            <form method="dialog">
                                <CloseButton formMethod="dialog" onClick={() => onModalClose()}>
                                    <img src="/icones/fechar.png" />
                                </CloseButton>
                            </form>
                            <Image
                                photo={photo}
                                expanded={true}

                            ></Image>
                        </Dialog>
                    </Overlay>
                </>
            }
        </>
    )
}

export default ModalZoom