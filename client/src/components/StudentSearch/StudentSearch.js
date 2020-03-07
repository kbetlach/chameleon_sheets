import React, { Component } from "react";
import StudentList from "../../data/students.json"

function StudentSearch(props) {

    const results = StudentList.filter(student => 
        student.firstName.toLowerCase().includes(props.search.toLowerCase()) || student.lastName.toLowerCase().includes(props.search.toLowerCase()));
   
    return (
          <li className="nav-item add-tab">
          <button className="add-button" type="button" data-target="#studentModal" data-toggle="modal">
            +
          </button>
    
              <div aria-hidden="true" aria-labelledby="studentModalLabel" class="modal" id="studentModal" role="dialog" tabindex="-1">
    
                   <div className="modal-dialog" role="document">
                       <div className="modal-content">
                           <div className="modal-header" style = {{backgroundColor: "darkslategray"}}>
                               <h5 style = {{color: 'white'}} className="modal-title" id="studentModal">Search for a Student:</h5>
                               <button style = {{color: 'white'}} aria-label="Close" className="close" data-dismiss="modal" type="button">
                                   <span aria-hidden="true">&times;</span>
                               </button>
                           </div>
                           <form id="studentSearch">
                               <div className="modal-body">
                                   <div className="form-group" style={{textAlign: "left", fontSize: "20px"}}>
                                       <input 
                                          className="form-control" 
                                          id="student-search"
                                          onChange={props.handleInputChange}
                                          value={props.value}
                                          searchtype={props.searchtype}
                                          name="search"
                                          type="text"
                                          placeholder="First or Last Name"
                                       />
                                   </div>
                                   <div className="form-group" style={{textAlign: "center", fontSize: "20px", color: "darkslategray"}}>
                                       <h4><u>Results</u></h4>
                                   </div>
                                   <div className="form-group" style={{textAlign: "center", fontSize: "20px", color: "darkslategray"}}>
                                   {results.length > 0 ? (
                                        <ul className="list-group">
                                
                                          {results.map(result => (
                                            <li className="list-group-item" key={result.id}>
                                              <div className="row">
                                                <div className="col-md-12"><b>{result.firstName}</b> <b>{result.lastName}</b></div> 
                                              </div>
                                            </li>
                                          ))}
                                        </ul >
                                      ) : (
                                          <h4>No Students Found</h4>
                                        )}
                                   </div>
                               </div>
                               <div className="modal-footer">
                                   <button className="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
                                   <button style = {{color: 'white', backgroundColor: "darkslategray", border: '.5 px solid white'}} className = "btn" type="submit">Add</button>
                               </div>
                           </form>
                       </div>
                   </div> 
              </div>
            </li>
                  );
                    
                }
        

export default StudentSearch;