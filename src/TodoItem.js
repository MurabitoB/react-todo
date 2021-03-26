import styled from 'styled-components'
import {MEDIA_QUERY_MD, MEDIA_QUERY_LG} from './constants/breakpoint.js'

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;
  margin-top: 12px;
`

const TodoContent = styled.div`
  color: ${props => props.theme.colors.primary_300};
  font-size: 20px;
  
  ${props => props.$size ==='XL' && `
    font-size: 20px;
  `}

  ${props => props.$isDone &&`
    text-decoration: line-through;
  `}
`

const TodoButtonWrapper = styled.div`

`

const Button = styled.button`
  padding: 4px;
  color: black;

  ${MEDIA_QUERY_MD}{
    font-size: 16px;
  }

  ${MEDIA_QUERY_LG}{
    font-size: 12px;
  }

  & + &{
    margin-left: 4px;
  }

  &:hover{
    color:red;
  }
`

const RedButton = styled(Button)`
  color:red;
`

export default function TodoItem({size, todo, handleDeleteClick, handleToggleClick }){
  return(      
  <TodoItemWrapper data-todo-id={todo.id}>
    <TodoContent $id="abc" $isDone={todo.isDone} $size={size}>{todo.content}</TodoContent>
    <TodoButtonWrapper>
      <Button onClick={()=> handleToggleClick(todo.id)}>{todo.isDone ? '未完成' : '已完成'}</Button>
      <RedButton onClick={()=>handleDeleteClick(todo.id)}>刪除</RedButton>
    </TodoButtonWrapper>
  </TodoItemWrapper>
  )
}