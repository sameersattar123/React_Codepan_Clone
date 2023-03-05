import React, { useContext } from 'react'
import Editor from './Editor'
import { Box , styled } from '@mui/material'
import {DataContext} from "../Context/DataProvider"

const Container = styled(Box)`
    background-color: #060606;
    height: 50vh;
    display: flex;
`

const Code = () => {
    const { html , css , js , setHtml , setJs , setCss } =  useContext(DataContext)
  return (
    <Container>
    <Editor heading="HTML" icon="/" color='#FF3C41' value={html} onChange={setHtml}   language="xml" />
    <Editor heading="CSS" icon="*" color='#0EBEFF'  value={css} onChange={setCss}  language="css"/>
    <Editor heading="JS" icon="{}" color='#FCD000' value={js} onChange={setJs} language="javascript" />
    </Container>
  )
}

export default Code