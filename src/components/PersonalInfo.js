import LoanJS from 'loanjs'

import {React,useState} from 'react';

const PersonalInfo = () => {


    const [info, setInfo] = useState([])

    const [instalm, setInstalm] = useState([])
    const [value, setValue] = useState({
        loanAmount : "1000",
        loanTenure : "2",
    })

    const infoHandler = (e) => {
      let formInfo = {
        firstName: e.target.value,
        secondName: e.target.value,
        email: e.target.value,
        username: e.target.value,
        phone: e.target.value,
        occupation: e.target.value,
        city: e.target.value,
        state: e.target.value,
        zip: e.target.value
      }
      setInfo(formInfo)
    }

    const InfoSubmitHandler = (e) => {
    e.preventDefault();
    let task = {...info};

    console.log(task)
}


const inputHandler = (e) => {
    let newEntry = {
        value: e.target.value,
        name: e.target.value
      }

    setValue({newEntry})
}


    const submitHandler = (e) => {
        e.preventDefault();
        calculate(
            value["loanAmount"],
            value["loanTenure"],
            3,
        )
    }
    
    const calculate = (amount, years, rate) =>{

        const loan = new LoanJS.Loan(amount, years*12, rate);
                
        setInstalm(loan)
        console.log(instalm)
    }


    const amountFormat = (amount) => {
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "MYR"
        }).format(amount)
    }
  
    
  return (
    <>
    <div className='col-9 taskBg  offset-2'>
      <h2>Personal Info</h2>
      <br/>
      <form onSubmit={InfoSubmitHandler}>
        <div className="form row">
                <div className="col-md-6 mb-3">          
                  <input 
                    type="text" 
                    className="form-control" 
                    id="validationDefault01" 
                    placeholder="First name" 
                    value={info}
                    onChange={(e) => infoHandler(e)}
                    required 
                  />
                </div>


                <div className="col-md-6 mb-3">                  
                  <input 
                    type="text" 
                    className="form-control" 
                    id="validationDefault02" 
                    placeholder="Last name" 
                    value={info}
                    onChange={(e) => infoHandler(e)}
                    required 
                  />
                </div>
                
              </div>

            <div className="form row">
              <div className="col-md-6 mb-3">                
                  <div className="input-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      id="validationDefaultUsername" 
                      placeholder="Email" 
                      aria-describedby="inputGroupPrepend2" 
                      value={info}
                      onChange={(e) => infoHandler(e)}
                      required />
                  </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                  </div>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="validationDefaultUsername" 
                    placeholder="Username" 
                    aria-describedby="inputGroupPrepend2"
                    value={info}
                    onChange={(e) => infoHandler(e)} 
                    required 
                  />
                </div>
              </div>
            </div>
              
              <div className="form row">
              <div className="col-md-6 mb-3">
                  
                  <div className="input-group">
                    <input 
                      type="number" 
                      className="form-control" 
                      id="validationDefaultUsername" 
                      placeholder="Phone" 
                      aria-describedby="inputGroupPrepend2"
                      value={info}
                      onChange={(e) => infoHandler(e)} 
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="validationDefaultUsername" 
                      placeholder="Occupation" 
                      aria-describedby="inputGroupPrepend2"
                      value={info}
                      onChange={(e) => infoHandler(e)} 
                      required 
                    />
                  </div>
                </div>
                               
              </div>

              <div className="form row">
                <div className="col-md-6 mb-3">
                  
                  <input 
                    type="text" 
                    className="form-control" 
                    id="validationDefault03" 
                    placeholder="City"
                    value={info}
                    onChange={(e) => infoHandler(e)} 
                    required 
                  />
                </div>
                <div className="col-md-3 mb-3">
                  
                  <input 
                    type="text" 
                    className="form-control" 
                    id="validationDefault04" 
                    placeholder="State"
                    value={info} 
                    onChange={(e) => infoHandler(e)} 
                    required 
                  />
                </div>
                <div className="col-md-3 mb-3">
                  
                  <input 
                  type="text" 
                  className="form-control" 
                  id="validationDefault05" 
                  placeholder="Zip"
                  value={info} 
                  onChange={(e) => infoHandler(e)} 
                  required 
                  />
                </div>
              </div>
              
            
            <div className='col'>           
                <div className="form-check" >
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="exampleRadios" 
                      id="exampleRadios1" 
                      value={info}
                      onChange={(e) => infoHandler(e)} 
                      checked
                    />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                      Male
                    </label>
                  </div>
                  <div className="form-check" >
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="exampleRadios" 
                      id="exampleRadios2"
                      onChange={(e) => infoHandler(e)}
                      value={info}
                    />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                      Female
                    </label>
                  </div>
                  <div className="form-check disabled" >
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="exampleRadios" 
                      id="exampleRadios3"
                      onChange={(e) => infoHandler(e)} 
                      value={info}
                    />
                    <label className="form-check-label" htmlFor="exampleRadios3">
                      Others
                    </label>
                </div>
                <div className='col btns'>
                <button type="submit" className="btn btn-warning btn-lg btn-block">Submit Info</button>
                </div>  
            </div>
            
          </form>
          <br/>

          
          <form className="form row" onSubmit={submitHandler} >
            <h2>Your Loan</h2>
            <br />
            <div className="form row">
              <div className="col-md-6 mb-3">
                  <label htmlFor="validationDefaultEmail">Loan Amount</label>
                  <div className="input-group">
                    <input 
                      type="number" 
                      value={value["loanAmount"]}
                      onChange={(e) =>inputHandler(e)} 
                      name="loanAmount" 
                      className="form-control" 
                      id="validationDefaultUsername" 
                      aria-describedby="inputGroupPrepend2" 
                      required />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="validationDefault03">Loan Tenure</label>
                  <div className="input-group">
                    <input 
                    type="number"
                    value={value["loanTenure"]}
                    onChange={(e) =>inputHandler(e)}
                    className="form-control" 
                    id="validationDefaultUsername" 
                    name="loanTenure"                     
                    aria-describedby="inputGroupPrepend2" 
                    required />
                  </div>
                </div>
              
              </div>

                <div className="col btns">
                    <button
                        className='btn btn-lg btn-danger'                
                    >Submit Your Loan</button>
                </div>                 
            
            <br/>
        </form>     
        </div>

        <br />
        <h2>Loan Schedule Payment</h2>
        <br/>
        {/* {instalm.length ? (  */}
             <table className="table">
             <thead>
                 <tr>
                     <th scope="col">Month</th>
                     <th scope="col">Payment Amount</th>
                     <th scope="col">Interest Paid</th>
                     <th scope="col">Principal Paid</th>
                     <th scope="col">Remain</th>
                 </tr>
             </thead>
             <tbody>
                 {Object.keys(instalm).map((data, index) => (
                    
                        <tr key={index} scope="row">
                            <td>{index + 1}</td>
                            <td>{amountFormat(data.installment)}</td>
                            <td>{amountFormat(data.interest)}</td>
                            <td>{amountFormat(data.capital)}</td>
                            <td>{amountFormat(data.remain)}</td>                    
                        </tr>
                    
                 )
                     
                 )}
                 
             </tbody>
         </table>
        
        <br />

         <div>
            <button className='btn btn-success'>Pay Your Amount</button>       
        </div>     
        
        {/* ) : ('')} */}

            

    </>
  )
}

export default PersonalInfo
