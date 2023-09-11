import React, { useEffect, useState } from 'react'
import './RaiseSolution.css'
import { status } from '../../Extra/Constans'

const RaiseSolution = () => {
    const data = [
        {
            gfile:{
                title:'Persistent water shortages in our locality demand urgent attention.',
                jurisdiction:'Janakpuri'
            },
            created:'filed 3 weeks ago',
            status:status.NOT_RESOLVED,
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
            status:status.NOT_RESOLVED,
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
            status:status.NOT_RESOLVED,
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
            status:status.NOT_RESOLVED,
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
            status:status.NOT_RESOLVED,
            emp:{
                name:'Kirti Verma',
                des:'Admin'
            }
        },
    ];
    const giveBgCol = (val)=>{
        switch(val){
            case status.RESOLVED:return 'var(--textColorlight)';
            case status.NOT_RESOLVED:return 'var(--notresolveColor)';
            case status.PENDING:return 'var(--textColordark)';
        }
    }

  return (
    <>
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
                            <td data-attr='Grievance File: '>
                                <div className="colContent">
                                    <p>{e.gfile.title}</p>
                                    <h5>Jurisdiction: {e.gfile.jurisdiction}</h5>
                                </div>
                            </td>
                            <td data-attr='Created: '>{e.created}</td>
                            <td data-attr='Status: '>
                                <select onChange={(e)=>(e.target.style.setProperty('background',giveBgCol(e.target.value)))} style={{backgroundColor:giveBgCol(e.status)}}>
                                    <option selected={(e.status===status.RESOLVED)?true:false} value={status.RESOLVED}>{status.RESOLVED}</option>
                                    <option selected={(e.status===status.NOT_RESOLVED)?true:false} value={status.NOT_RESOLVED}>{status.NOT_RESOLVED}</option>
                                    <option selected={(e.status===status.PENDING)?true:false} value={status.PENDING}>{status.PENDING}</option>
                                </select>
                            </td>
                            <td data-attr='Employee: '>
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
        <div className="pagination">
            <button className='active'>1</button>
            <button>2</button>
            <button>3</button>
        </div>
    </>
  )
}

export default RaiseSolution