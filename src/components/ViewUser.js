import React from 'react';
import {connect} from 'react-redux';

import { Card, Avatar,Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,InfoOutlined,GithubOutlined } from '@ant-design/icons';

const { Meta } = Card;


const ViewUser=(props)=>{

    const printDescription=(user)=>{
        return (
            <div>
                <a href={`https://api.github.com/users/`+user.login} style={{display:'block'}} target="_blank"><Button type="primary" link style={{margin:'5px'}}><InfoOutlined /> View All Details</Button></a>
                <a href={`https://github.com/`+user.login} style={{display:'block'}} target="_blank"><Button type="primary" link style={{margin:'5px',background:'black',color:'white',border:'none'}}><GithubOutlined /> Visit User Profile</Button></a>
            </div>
        )
    }

    // console.log(props.users.some(user=>user.login==props.user.login))
    return (
        <>
        {
            props.user!=null && props.users.filter(obj=>obj.id==props.user.id).length
            ?
            <Card
            style={{ width: 300,height:'70vh',overflowY:'auto',overflowX:'hidden'}}
            cover={
            <img
                alt="avatarURL"
                src={props.user.avatar_url}
            />
            }
        >
            <Meta
            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={props.user.name+'('+props.user.login+')'}
            description={printDescription(props.user)}
            />
        </Card>
            :
            <>
                <h3 style={{textAlign:'center',color:'grey'}}>Please select a user</h3>
            </>
        }
        </>
    )
}

const mapStateToProps=(state)=>{
    return {users:state.users,user:state.selectedUser}
}

export default connect(mapStateToProps)(ViewUser);