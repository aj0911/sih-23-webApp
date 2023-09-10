import React from 'react'
import './RaiseSolution.css'

const RaiseSolution = () => {
    const data = [
        {
            gfile:{
                title:'Persistent water shortages in our locality demand urgent attention.',
                jurisdiction:'Janakpuri'
            },
            created:'filed 3 weeks ago',
            status:false,
            emp:{
                name:'Rajesh RR',
                des:'Admin'
            }
        },
        {
            gfile:{
                title:'Road maintenance is severely lacking, posing risks to commuters.',
                jurisdiction:'Janakpuri'
            },
            created:'filed 2 weeks ago',
            status:false,
            emp:{
                name:'Shalini Bajaj',
                des:'Admin'
            }
        },
        {
            gfile:{
                title:'Garbage disposal services need improvement for a cleaner environment',
                jurisdiction:'Janakpuri'
            },
            created:'filed 4 days ago',
            status:false,
            emp:{
                name:'Renuka Singh',
                des:'Admin'
            }
        },
        {
            gfile:{
                title:'Public transportation options need enhancement for better connectivity.',
                jurisdiction:'Janakpuri'
            },
            created:'filed 2 days ago',
            status:false,
            emp:{
                name:'Rahul Dobhal',
                des:'Admin'
            }
        },
        {
            gfile:{
                title:'Public parks and recreational facilities are in need of renovation.',
                jurisdiction:'Janakpuri'
            },
            created:'filed 3 hrs ago',
            status:false,
            emp:{
                name:'Kirti Verma',
                des:'Admin'
            }
        },
    ]
  return (
    <table className='raiseSolution'>
        <thead>
            <td>Grievance File</td>
            <td>Created</td>
            <td>Status</td>
            <td>Employee</td>
            <td>
                <button>
                    <div className="rowContent">
                        <img src={require('../../../Assets/Images/file-plus-white.png')} alt="" />
                        <h3>Add New</h3>
                    </div>
                </button>
            </td>
        </thead>
        <tbody>
            {
                data.map((e,i)=>(
                    <tr key={i}>
                        <td>
                            <div className="colContent">
                                <p>{e.gfile.title}</p>
                                <h5>Jurisdiction: {e.gfile.jurisdiction}</h5>
                            </div>
                        </td>
                        <td>{e.created}</td>
                        <td><button style={{background:(e.status)?'var(--textColorlight)':'var(--notresolveColor)'}}>{(e.status)?'Resolved':'Not Resolved'}</button></td>
                        <td>
                            <div className="rowContent">
                                <h3>{e.emp.name}</h3>
                                <p>{e.emp.des}</p>
                            </div>
                        </td>
                        <td>
                            <img src={require('../../../Assets/Images/more-horizontal.png')} alt="" />
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default RaiseSolution