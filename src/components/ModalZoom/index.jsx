import styled from "styled-components"
import Image from "../Gallery/Image"


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
    top: 294px;
`

const ModalZoom = ({ photo }) => {
    return (
        <>
            {photo &&
                <>
                    <Overlay></Overlay>
                    <Dialog open={!!photo}>
                        <Image
                            photo={photo}
                            expanded={true}

                        ></Image>
                        <form method="dialog">
                            <button>ok</button>
                        </form>
                    </Dialog>
                </>
            }
        </>
    )
}

export default ModalZoom