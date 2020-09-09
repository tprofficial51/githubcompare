import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Card, Col, Row,Radio,Button } from 'antd';
import {selectUser, deleteUser} from '../actions';
import {
    ArrowUpOutlined,
    ArrowDownOutlined,
    CloseCircleFilled
} from '@ant-design/icons';
  
const UserComparisons=(props)=>{
    const [option,selectedOption]=useState(1);
    const [order,setOrder]=useState(1);
    const onRadioButtonChange=(e)=>{
        selectedOption(e.target.value)
    }

    const onOrderChange=(e)=>{
        setOrder(e.target.value)
    }

    const selectUser=(user)=>{
        props.selectUser(user);
    }

    const deleteUserCard=(user)=>{
        props.deleteUser(user);
    }

    const printTitle=(user)=>{
        return (
            <div>
                <CloseCircleFilled style={{color:'red',float:'right'}} onClick={()=>deleteUserCard(user)} />
                <p>{ user.name+'('+user.login+')' || "No username"}</p>
            </div>
        )
    }

    const printUsers=()=>{
        let users=[...props.users];
        if(order==1){
            if(option==1){
                users.sort(function(a,b){
                    return a.followers-b.followers;
                })
            }else if(option==2){
                users.sort(function(a,b){
                    return a.following-b.following;
                })
            }else if(option==3){
                users.sort(function(a,b){
                    return a.public_repos-b.public_repos;
                })
            }
        }else if(order==2){
            if(option==1){
                users.sort(function(a,b){
                    return b.followers-a.followers || b.followers==a.followers;
                })
            }else if(option==2){
                users.sort(function(a,b){
                    return b.following-a.following || b.following==a.following;
                })
            }else if(option==3){
                users.sort(function(a,b){
                    return b.public_repos-a.public_repos || b.public_repos==a.public_repos;
                })
            }
        }
        
        return users.map(user=>{
            return (
                <Col span={8} key={user.id}>
                    <Card title={printTitle(user)} bordered={false}>
                        <>
                            
                            <p style={{fontSize:'12px'}}><span style={{color:'#0c9909'}}>{user.followers}</span> followers, <span style={{color:'#f76a0c'}}>{user.following}</span> following, <span style={{color:'#9c0c22'}}>{user.public_repos}</span> repos</p>
                            {/* <p><span style={{fontWeight:'bold'}}>Github Username</span>: {user.login}</p> */}
                            <Button type="primary" onClick={()=>selectUser(user)} style={{margin:'5px',backgroundColor:'#ad0dfc',color:'white',border:'none'}}>Select User</Button>
                        </>
                    </Card>
                </Col>
            )
        })
    }

    return (
        <div className="site-card-wrapper" style={{overflowY:'auto',overflowX:'hidden',height:'58vh'}}>
            <p>
            <Radio.Group onChange={onRadioButtonChange} value={option}>
                <Radio value={1}>Followers</Radio>
                <Radio value={2}>Following</Radio>
                <Radio value={3}>Public Repositories</Radio>
            </Radio.Group>
            <Radio.Group onChange={onOrderChange} value={order}>
                <Radio value={1}><ArrowUpOutlined /></Radio>
                <Radio value={2}><ArrowDownOutlined /></Radio>
            </Radio.Group>
            </p>
            <Row gutter={[16,16]}>
                {
                    printUsers()
                    
                }
            </Row>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {users:state.users};
}

export default connect(mapStateToProps,{selectUser,deleteUser})(UserComparisons);