
import styled from 'styled-components';
const NumberSelect = ({setError,errer,selectedNum,setselectedNum}) => {
  const arrryNum =[1,2,3,4,5,6];
 
 const numberSelectorHandler =(value)=>{
  setselectedNum(value)
  setError("")

 }
  
  return (
    <NumberSelectorConatiner className='box-container'>
      <p className='error'>
        {errer}
      </p>
    <div className='flex'>
      {
        arrryNum.map((value,i)=>

         ( <Box className='box'
         isSelected={value===selectedNum}
         key={i}
         onClick={()=>numberSelectorHandler(value)}
         >{value}</Box>)  )
      }
     
      
      
    </div>
    <p>Select Number</p>
    </NumberSelectorConatiner>
  )
}

export default NumberSelect
const NumberSelectorConatiner = styled.div`
display: flex;
flex-direction:column;
align-items:end;
margin-top:30px;
.flex{
  display: flex;
  gap: 20px;
}
p{
  font-size: 20px;
  font-weight: 700;
  margin-top:20px;
  
}
.error{
  color: red;
}
  
`
const Box = styled.div`
  height: 52px;
  width: 52px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(prop)=> prop.isSelected ? "black" :"white"};
  color: ${(prop)=> !prop.isSelected ? "black" :"white"};
  cursor: pointer;

`
