import React,{useState} from 'react';
import { Input, Tooltip,Alert,Button } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const UserForm=(props)=>{
    const [username,setUsername]=useState("");
    const [alert,setAlert]=useState(false);
    const [alertMsg,setAlertMsg]=useState("");
    const findUser=()=>{
        setAlert(false);
        fetch('https://api.github.com/users/'+username)
        .then(res=>res.json())
        .then(data=>{
            if(data.message=="Not Found"){
                setAlert(true);
                setAlertMsg("Any user with the given username doesn't exists");                
            }else if(data.type=="Organization"){
                setAlert(true);
                setAlertMsg(`Only comparisons between will be allowed.And, also ${data.name} is a great organization.`);
                setUsername("");
            }else{

                setAlert(false);
                props.addUsers(data,(res)=>{
                    if(res){
                        setUsername("");
                    }else{
                        setUsername("");
                        setAlert(true);
                        setAlertMsg("Already the user has been added to the list");
                    }
                });              
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const onClose = e => {
        console.log(e, 'I was closed.');
    };

    return (
        <div style={{marginTop:'5vh'}}>
            {
                alert
                ?
                <Alert message={alertMsg} type="error" closable onClose={onClose} />
                // <div style={{textAlign:'center',color:'white',background:'rgba(252, 61, 3, 0.5)',margin:'2vh'}}>{alertMsg}</div>
                :
                <></>
            }
            <Input
                style={{width:'80%',margin:'0 2vw'}}
                placeholder="Enter a github username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                <Tooltip title="Please try to enter a valid username">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
                }
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />     
            <Button type="primary" onClick={findUser}>Find User</Button>
      </div>     
    )
}

export default UserForm;