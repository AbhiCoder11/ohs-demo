import React from 'react';

import comparr from '../localdb/companyLocal';

class CreateCompany extends React.Component{
    state={
        compName:'',
        domain:''
    }
    handleCompName= e => this.setState({compName:e.target.value});
    handleDomain = e => this.setState({domain:e.target.value});
    saveCompany(){
        const {compName,domain} = this.state;
        comparr.push({
            name:compName,
            domain,
            date:Date.now
        });
        this.props.history.push('/company');
    }
    render(){
        return(
            <div className="container">
        <div className="mainpage">
          <div className="main-left">
            <div className="menu">
              <ul className="sidenavbar">
                <div className="logo">
                  <img src="images/logo.png" width="200px" height="50px" alt="Logo" title="Logo" />
                </div>
                <li>
                  <a className="management active" href="javascript:void(0)">Company Management </a>
                </li>
                <li>
                  <a className="domain" href="javascript:void(0)">Configure Domain </a>
                </li>
                <li>
                  <a className="module" href="javascript:void(0)">Configure Module </a>
                </li>
                <li>
                  <a className="department" href="javascript:void(0)">Configure Department </a>
                </li>
                <li>
                  <a className="role" href="javascript:void(0)">Configure User Role </a>
                </li>
                <li>
                  <a className="user" href="javascript:void(0)">Setup Product User </a>
                </li>
                <li>
                  <a className="admin" href="javascript:void(0)">Admin </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-right">
            <header>
              <div className="row">
                <a className="float-left mobile-menu sidenav-trigger" href="javascript:void(0)">mobile
                  menu</a>
                <div className="float-right header-right">
                  <a className="settings float-left" href="javascript:void(0)">settings</a>
                  <a className="logout float-left" href="javascript:void(0)">logout</a>
                </div>
              </div>
            </header>
            <div className="main-page">
              <div className="row">
                <div className="col s11 m11 l11 xl11 page-title center-aligned">
                  <div className="col s12 m12 l11 xl11">
                    <h1>
                      Company management
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s11 m11 l11 xl11  center-aligned company-view">
                  <div className="col s12 m12 l8 xl8 company-setup  padding-0">
                    <div className="col s12 m12 l6 xl6  padding-0">
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Sample Name </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" value={this.state.compName} onChange={this.handleCompName}/>
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Domain </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" value={this.state.domain} onChange={this.handleDomain}/>
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Company Address </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> District </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> State </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12 margin-top-bottom-40">
                        <label className="col s4 float-left"> Company Logo </label>
                        <div className="upload-btn-wrapper">
                          <button className="btn">Upload a file</button>
                          <input type="file" name="myfile" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> State </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Primary Phone </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Secondary Phone </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Post Box Number </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Primary Contact </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Contact Designation </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m12 l6 xl6  padding-0">
                      <div className="form-groups col s12 margin-bottom-20">
                        <label className="col s4 float-left"> Is Parent Company ? </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12 margin-top-bottom-40">
                        <label className="col s4 float-left"> Parent Company </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Pincode </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left">Fax Number </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Website </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Email ID </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Phone </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                      <div className="form-groups col s12">
                        <label className="col s4 float-left"> Max. Locations </label>
                        <div className="input-field col s8  relative float-left">
                          <input placeholder type="text" className="validate" />
                        </div>
                      </div>
                    </div>
                    <div className="company-deatls-btn">
                      <button className="btn waves-effect waves-light green-btn" type="submit" name="action" onClick={this.saveCompany.bind(this)}>
                        save
                      </button>
                      <button className="btn waves-effect waves-light red-btn" type="submit" name="action">
                        cancel
                      </button>
                    </div>
                  </div>
                  <div className="col s12 m12 l4 x4 padding-right-0">
                    <span className="collapse-view deveice-hide"> collapse</span>
                    <div className="company-details relative padding-0">
                      <span className="collapse-view"> collapse</span>
                      <div className="company-tab">
                        <div className="tab-view-header">
                          <div className="row">
                            <div className="col s12 tab-view">
                              <ul className="tab">
                                <li>
                                  <a className="active location" id="tab1" href="javascript:void(0)">Locations</a>
                                </li>
                                <li>
                                  <a className="department" id="tab2" href="javascript:void(0)">Departments</a>
                                </li>
                                <li>
                                  <a className="module" id="tab3" href="javascript:void(0)">Modules</a>
                                </li>
                                <li>
                                  <a className="user" id="tab4" href="javascript:void(0)">User</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-view-body">
                          {/* Location Tab design start here.... */}
                          <div className="row location tab1 active">
                            <div className="col s12">
                              <h2>
                                ADD COMPANY LOCATIONS
                              </h2>
                              <div className="form-groups">
                                <label className="float-left col s4 xl4">Location 1</label>
                                <div className="float-left col s8 xl8">
                                  <p>
                                    Sample Location
                                  </p>
                                  <a href="javascript:void(0)">edit</a>
                                </div>
                              </div>
                              <div className="form-groups">
                                <label className="float-left col s4 xl4">Location 1</label>
                                <div className="float-left col s8 xl8">
                                  <p>
                                    Sample Location
                                  </p>
                                  <a href="javascript:void(0)">edit</a>
                                </div>
                              </div>
                              <div className="form-groups">
                                <label className="float-left col s4 xl4">Location 1</label>
                                <div className="float-left col s8 xl8">
                                  <p>
                                    Sample Location
                                  </p>
                                  <a href="javascript:void(0)">edit</a>
                                </div>
                              </div>
                              <div className="form add-new">
                                <div className="upload-btn-wrapper">
                                  <button className="btnwaves-effect waves-light btn modal-trigger" href="#modal1">Add New Location</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Department tab-view */}
                          <div className="row department-view tab2">
                            <h2>
                              ASSIGN DEPARTMENTS
                            </h2>
                            <div className="form-groups select-box">
                              <label className="float-left col s4 xl4">Select Location</label>
                              <div className="float-left col s8 xl8">
                                <div className="select-box">
                                  <select>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-groups dep-list-view">
                              <div className="col s12 xl12 dep-list margin-bottom-20">
                                <div className="width-100">
                                  <div className="select-box">
                                    <h3>
                                      Department List
                                    </h3>
                                    <select>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                    </select>
                                  </div>
                                  <label className="check-boxs">
                                    <h3>&nbsp;</h3>
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                  </label>
                                  <div className="input-field">
                                    <h3>
                                      Display Name
                                    </h3>
                                    <input type="text" className="validate" />
                                  </div>
                                </div>
                                <div className="width-100">
                                  <div className="select-box">
                                    <select>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                    </select>
                                  </div>
                                  <label className="check-boxs">
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                  </label>
                                  <div className="input-field">
                                    <input type="text" className="validate" />
                                  </div>
                                </div>
                                <div className="width-100">
                                  <div className="select-box">
                                    <select>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                      <option>view 0ne </option>
                                    </select>
                                  </div>
                                  <label className="check-boxs">
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                  </label>
                                  <div className="input-field">
                                    <input type="text" className="validate" />
                                  </div>
                                </div>
                              </div>
                              <div className="width-100 margin-bottom-20">
                                <div className="assign-dept-btn-wrapper ass-dep">
                                  <button className="btn">Assign Depts</button>
                                </div>
                              </div>
                              <div className="width-100">
                                <h2>
                                  LOCATION - DEPARTMENT DETAILS
                                </h2>
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Location</th>
                                      <th>DB Dept Name</th>
                                      <th>Display Name</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Location</td>
                                      <td>DB Dept Name</td>
                                      <td>Display Name</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="edit" href="javascript:void(0)">Edit</a>
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Location</td>
                                      <td>DB Dept Name</td>
                                      <td>Display Name</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="edit" href="javascript:void(0)">Edit</a>
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Location</td>
                                      <td>DB Dept Name</td>
                                      <td>Display Name</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="edit" href="javascript:void(0)">Edit</a>
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Location</td>
                                      <td>DB Dept Name</td>
                                      <td>Display Name</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="edit" href="javascript:void(0)">Edit</a>
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="row department-view module-view tab3">
                            <h2>
                              ASSIGN MODULES
                            </h2>
                            <div className="form-groups select-box">
                              <label className="float-left col s4 xl4">Select Location</label>
                              <div className="float-left col s8 xl8">
                                <div className="select-box">
                                  <select>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-groups select-box">
                              <label className="float-left col s4 xl4">Select Department</label>
                              <div className="float-left col s8 xl8">
                                <div className="select-box">
                                  <select>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-groups dep-list-view">
                              <div className="col s12 xl12 dep-list margin-bottom-20">
                                <div className="width-100">
                                  <div className="select-box">
                                    <select>
                                      <option>Module 1 </option>
                                      <option>Module 2 </option>
                                      <option>Module 3 </option>
                                      <option>Module 4 </option>
                                      <option>Module 5 </option>
                                      <option>Module 6 </option>
                                    </select>
                                  </div>
                                  <label className="check-boxs">
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                  </label>
                                </div>
                                <div className="width-100">
                                  <div className="select-box">
                                    <select>
                                      <option>Module 1 </option>
                                      <option>Module 2 </option>
                                      <option>Module 3 </option>
                                      <option>Module 4 </option>
                                      <option>Module 5 </option>
                                      <option>Module 6 </option>
                                    </select>
                                  </div>
                                  <label className="check-boxs">
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                  </label>
                                </div>
                                <div className="width-100">
                                  <div className="select-box">
                                    <select>
                                      <option>Module 1 </option>
                                      <option>Module 2 </option>
                                      <option>Module 3 </option>
                                      <option>Module 4 </option>
                                      <option>Module 5 </option>
                                      <option>Module 6 </option>
                                    </select>
                                  </div>
                                  <label className="check-boxs">
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                  </label>
                                </div>
                              </div>
                              <div className="width-100 margin-bottom-20">
                                <div className="assign-dept-btn-wrapper ass-dep">
                                  <button className="btn">Assign Modules</button>
                                </div>
                              </div>
                              <div className="width-100">
                                <h2>
                                  LOCATION - DEPARTMENT MODULE DETAILS
                                </h2>
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Location</th>
                                      <th>DB Dept Name</th>
                                      <th>Module</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Location</td>
                                      <td>DB Dept Name</td>
                                      <td>Module</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="edit" href="javascript:void(0)">Edit</a>
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Location</td>
                                      <td>DB Dept Name</td>
                                      <td>Module</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="edit" href="javascript:void(0)">Edit</a>
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Location</td>
                                      <td>DB Dept Name</td>
                                      <td>Module</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="edit" href="javascript:void(0)">Edit</a>
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Location</td>
                                      <td>DB Dept Name</td>
                                      <td>Module</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="edit" href="javascript:void(0)">Edit</a>
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="row department-view listuser-view tab4">
                            <h2>
                              CREATE USER
                            </h2>
                            <div className="form-groups select-box">
                              <label className="float-left col s4 xl4">Select Location</label>
                              <div className="float-left col s8 xl8">
                                <div className="select-box">
                                  <select>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                    <option>view 0ne </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="width-100 dep-list-view">
                              <div className="form-groups">
                                <label className="float-left col s4 xl4">First Name </label>
                                <div className="input-field col s8  relative">
                                  <input placeholder type="text" className="validate" />
                                </div>
                              </div>
                              <div className="form-groups">
                                <label className="float-left col s4 xl4">last Name </label>
                                <div className="input-field col s8  relative">
                                  <input placeholder type="text" className="validate" />
                                </div>
                              </div>
                              <div className="form-groups">
                                <label className="float-left col s4 xl4">User Role </label>
                                <div className="input-field col s8  relative">
                                  <input placeholder type="text" className="validate" />
                                </div>
                              </div>
                              <div className="form-groups">
                                <label className="float-left col s4 xl4">Email</label>
                                <div className="input-field col s8  relative">
                                  <input placeholder type="email" className="validate" />
                                </div>
                              </div>
                              <div className="width-100 margin-bottom-20">
                                <div className="user-btn-wrapper ass-dep">
                                  <button className="btn">Send Email Link</button>
                                </div>
                              </div>
                              <div className="width-100">
                                <h2>
                                  USER LIST
                                </h2>
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Name</th>
                                      <th>User ID</th>
                                      <th>Location</th>
                                      <th>Department</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Name</td>
                                      <td>User ID</td>
                                      <td>Location</td>
                                      <td>Department</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Name</td>
                                      <td>User ID</td>
                                      <td>Location</td>
                                      <td>Department</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Name</td>
                                      <td>User ID</td>
                                      <td>Location</td>
                                      <td>Department</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Name</td>
                                      <td>User ID</td>
                                      <td>Location</td>
                                      <td>Department</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Name</td>
                                      <td>User ID</td>
                                      <td>Location</td>
                                      <td>Department</td>
                                      <td>
                                        <div className="action-items">
                                          <a className="delete" href="javascript:void(0)">Delete</a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a style={{top: '-80px'}} className="waves-effect waves-light btn modal-trigger" href="#modal2">Add new</a>
        {/* Modal Structure */}
        <div id="modal1" className="modal location-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h1>
                ADD COMPANY LOCATIONS
              </h1>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col m12 s12 l6 xl6">
                  <div className="width-100">
                    <div className="form-groups">
                      <label className="col s4">Location Name</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                    <div className="form-groups">
                      <label className="col s4">Location Address</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                    <div className="form-groups">
                      <label className="col s4">City</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                    <div className="form-groups">
                      <label className="col s4">Zip code</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                    <div className="form-groups">
                      <label className="col s4">State</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                    <div className="form-groups">
                      <label className="col s4">Country</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col m12 s12 l6 xl6">
                  <div className="width-100">
                    <div className="form-groups">
                      <label className="col s4">Primary Phone Number</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                    <div className="form-groups">
                      <label className="col s4">Secondary Phone Number</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                    <div className="form-groups">
                      <label className="col s4">Primary Phone Number</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                    <div className="form-groups">
                      <label className="col s4">Contact Designation</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                    <div className="form-groups">
                      <label className="col s4">Primary Contact Name</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                    <div className="form-groups">
                      <label className="col s4">Primary Contact Email</label>
                      <div className="input-field col s8 relative">
                        <input placeholder type="text" className="validate" />
                      </div>
                    </div>
                    <div className="form-groups">
                      <div className="form-groups">
                        <label className="col s4">Location active status</label>
                        <div className="select-box col s8">
                          <select>
                            <option>value 1</option>
                            <option>value 1</option>
                            <option>value 1</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="company-deatls-btn">
              <button className="btn waves-effect waves-light green-btn" type="submit" name="action">
                save
              </button>
              <button className="btn waves-effect waves-light red-btn" type="submit" name="action">
                cancel
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <footer>
            <p>
              Copyright © 2019 XYZ Corporatrons . All rights reserved
            </p>
          </footer>
        </div>
      </div>
        )
    }
}

export default CreateCompany