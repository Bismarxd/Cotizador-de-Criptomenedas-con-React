import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background-color: #830e0e;
  border: 1px solid #ece1e1;
  padding: 1rem;
  border-radius: 2rem;
  max-width: 25rem;
`;

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error