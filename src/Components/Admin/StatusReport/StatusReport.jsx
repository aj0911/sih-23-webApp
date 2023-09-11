import React from 'react'
import './StatusReport.css'
import { reportStatus } from '../../Extra/Constans';

const StatusReport = () => {
    const data = [
        {
            title:{
                text:'Unsafe Crosswalks Endanger Pedestrians Daily',
                time:'3 days'
            },
            status:reportStatus.SOLVED,
            stats:120
        },
        {
            title:{
                text:'Address Noise Pollution Concerns Urgently',
                time:'8 weeks'
            },
            status:reportStatus.PENDING,
            stats:-1
        },
        {
            title:{
                text:'Insufficient Water Supply',
                time:'3 days'
            },
            status:reportStatus.IN_PROCESS,
            stats:0
        },
        {
            title:{
                text:'Potholes Make Roads Perilous Daily',
                time:'6 days'
            },
            status:reportStatus.SOLVED,
            stats:120
        },
        {
            title:{
                text:'Street Lights Needed for Safety',
                time:'4 days'
            },
            status:reportStatus.SOLVED,
            stats:120
        },
    ];
    const giveBgCol = (val)=>{
        switch(val){
            case reportStatus.IN_PROCESS:return 'var(--inprogressColor)';
            case reportStatus.PENDING:return 'var(--pendingColor)';
            case reportStatus.SOLVED:return 'var(--notresolveColor)';
        }
    };
    const handleChange = (e)=>{
        e.target.style.setProperty('color',giveBgCol(e.target.value));
        e.target.style.setProperty('border-color',giveBgCol(e.target.value));
    }
  return (
    <>
        <table className='statusReport'>
            <thead>
                <td>Title</td>
                <td>Status</td>
                <td>Stats</td>
                <td>
                    <button>
                        <div className="rowContent">
                            <img src={require('../../../Assets/Images/pen-tool-white.png')} alt="" />
                            <h3>Add New</h3>
                        </div>
                    </button>
                </td>
            </thead>
            <tbody>
                {
                    data.map((e,i)=>(
                        <tr key={i} style={{background:(e.status===reportStatus.PENDING)?'var(--textColorPink)':'var(--bgAuthColor)'}}>
                            <td data-attr='Title: '>
                                <div className="colContent">
                                    <p>{e.title.text}</p>
                                    <h5 color={(e.status===reportStatus.PENDING)?'crimson':''}>Posted {e.title.time} ago</h5>
                                </div>
                            </td>
                            <td data-attr='Status: '>
                                <select onChange={(e)=>handleChange(e)} style={{color:giveBgCol(e.status)}}>
                                    <option selected={(e.status===reportStatus.SOLVED)?true:false} value={reportStatus.SOLVED}>{reportStatus.SOLVED}</option>
                                    <option selected={(e.status===reportStatus.IN_PROCESS)?true:false} value={reportStatus.IN_PROCESS}>{reportStatus.IN_PROCESS}</option>
                                    <option selected={(e.status===reportStatus.PENDING)?true:false} value={reportStatus.PENDING}>{reportStatus.PENDING}</option>
                                </select>
                            </td>
                            <td data-attr='Stats: '>
                                {
                                    (e.status===reportStatus.PENDING)?
                                    <div className="type">
                                        <h5>Type Here</h5>
                                        <p>Reson for not resolving the issue...</p>
                                    </div>:
                                    <div className="rowContent">
                                        <h3>{e.stats} Views</h3>
                                        {
                                            (e.stats===0)?'':
                                            <img src={require('../../../Assets/Images/arrow-up-circle.png')} alt="" />
                                        }
                                    </div>
                                }
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

export default StatusReport