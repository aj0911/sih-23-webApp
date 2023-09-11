import React, { useState } from 'react'
import './Admin.css'
import Header from '../Extra/Header'
import RaiseSolution from './RaiseSolution/RaiseSolution'
import { adminNav } from '../Extra/Constans'
import StatusReport from './StatusReport/StatusReport'

const Admin = () => {
    const navArr = [
        {
            title:'Manage',
            options:[
                {
                    name:'View Site',
                    img:require('../../Assets/Images/home.png')
                },
                {
                    name:'Raise Solution',
                    img:require('../../Assets/Images/file-plus.png')
                },
                {
                    name:'Status Report',
                    img:require('../../Assets/Images/pen-tool.png')
                },
                {
                    name:'Media Files',
                    img:require('../../Assets/Images/image.png')
                },
                {
                    name:'Department',
                    img:require('../../Assets/Images/users.png')
                },
                {
                    name:'1v1 User Chat',
                    img:require('../../Assets/Images/zap.png')
                },
                {
                    name:'Archived Pages',
                    img:require('../../Assets/Images/trash.png')
                },
            ]
        },
        {
            title:'Pro features',
            options:[
                {
                    name:'Themes',
                    img:require('../../Assets/Images/book-open.png')
                },
                {
                    name:'Plugins',
                    img:require('../../Assets/Images/box.png')
                },
                {
                    name:'Upgrade Plans',
                    img:require('../../Assets/Images/coffee.png')
                },
            ]
        },
    ]
    const [menuClick,setMenuClick] =useState(false);
    const [link,setLink] = useState(adminNav.RAISE_SOLUTION);

  return (
    <>
        <Header isLoggedIn={true} photoClick={()=>setMenuClick(!menuClick)}/>
        <div className="admin">
            <div className={(menuClick)?'left active':'left'}>
                {
                    navArr.map((e,i)=>(
                        <div className="nav" key={i}>
                            <h3>{e.title}</h3>
                            {
                                e.options.map((f,j)=>(
                                    <div key={j} className={(link===f.name)?'menu active':'menu'} onClick={()=>{setLink(f.name);setMenuClick(false)}}>
                                        <img src={f.img} alt="" />
                                        <h4>{f.name}</h4>
                                        <div className="dot"></div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className="right">
                {
                    (()=>{
                        switch(link){
                            case adminNav.RAISE_SOLUTION: return <RaiseSolution/>
                            case adminNav.STATUS_REPORT:return <StatusReport/>
                        }
                    }
                    )()
                }
            </div>
        </div>
    </>
  )
}

export default Admin