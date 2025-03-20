import styled from 'styled-components'
import tags from './tags.json'


const TagTitle = styled.h3`
    color: #D9D9D9;

`
const TagsContainer = styled.div`
    display: flex;
    gap: 8px;
    margin: 39px 0 28px 0;
`

const TagButton = styled.button`
    font-size: 18px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`


const Tags = ( {active} ) => {
    return (
        <>
            <TagsContainer>

            <TagTitle>Busque por tags:</TagTitle>

            {tags.map(tag =>  <TagButton key={tag.id} $active={active}>{tag.titulo}</TagButton>)}

            </TagsContainer>
        </>
    )
}

export default Tags