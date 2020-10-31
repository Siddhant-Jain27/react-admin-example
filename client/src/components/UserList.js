import React from 'react'
import { 
    List,
    Datagrid,
    TextField,
    EmailField,
    DeleteButton,
    EditButton } from 'react-admin'

const UserList = (props) => {
    return <List {...props}>    
        <Datagrid >
            <TextField source='id' />
            <TextField source = 'name'/>
            <EmailField source = 'email' />
            <EditButton basePath='/users' />
            <DeleteButton basePath = '/users' />
        </Datagrid>
    </List> 
}

export default UserList