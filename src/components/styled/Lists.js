import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 324px;
  height: 47px;

  & button {
    color: inherit;
    font-size: 2rem;
    background: transparent;
    opacity: 0;
    outline: none;
    transition: opacity 0.35s ease;
  }

  &:hover button {
    opacity: 1;
  }

  & div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & p {
    text-transform: capitalize;
    text-align: left;
    overflow: hidden;
    color: ${({ effect, theme }) =>
    effect === false ? theme.redcolor : theme.greencolor};
  }

  & span {
    padding-left: 1rem;
    margin-right: 30px;
    color: ${({ theme }) => theme.whitecolor};
  }
`;

export { List, ListItem };