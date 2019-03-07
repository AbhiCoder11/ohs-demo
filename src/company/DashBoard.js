 import React from 'react';
 import $ from 'jquery';
import comparr  from '../localdb/companyLocal'
 class DashBoard extends React.Component{
   showLeft(){
    if ($('.main-left').hasClass('showmenu')) {
        $('.main-left').removeClass('showmenu');
    } else {
        $('.main-left').addClass('showmenu');
    }
   }
   logOut(){
     this.props.history.push('/')
   }

     render(){
       console.log('dash history')
        console.log(this.props);
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
                    <a className="float-left mobile-menu sidenav-trigger" href="javascript:void(0)" onClick={this.showLeft.bind(this)}>mobile
                      menu</a>
                    <div className="float-right header-right">
                      <a className="settings float-left" href="javascript:void(0)">settings</a>
                      <a className="logout float-left" href="javascript:void(0)" onClick={this.logOut.bind(this)}>logout</a>
                    </div>
                  </div>
                </header>
                <div className="main-page">
                  <div className="row">
                    <div className="col s11 m11 l11 xl11 welcome-row margin-bottom-20">
                      <div className="col s12 m12 l6 xl6">
                        <h1>
                          Hi, Welcomeback!
                        </h1>
                      </div>
                      <div className="col s12 m12 l6 xl6">
                        <p>
                          Last Login : 03/06/2018 10:10AM
                        </p>
                      </div>
                    </div>
                  </div>
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
                    <div className="col s11 m11 l11 xl11  center-aligned management-view ">
                      <div className="col s12 m12 l8 xl8 company-table padding-0">
                        <div className="table-header col s12 margin-bottom-10">
                          <div className="float-left">
                            <label className="float-left">COMPANY</label>
                            <div className="select-box float-left">
                              <select>
                                <option value="Active">Active</option>
                                <option value="Deactive">Deactive</option>
                                <option value="All">All</option>
                              </select>
                            </div>
                          </div>
                          <div className="float-right">
                            <button className="btn waves-effect waves-light red-btn" type="submit" name="action">Setup
                              Company
                            </button>
                          </div>
                        </div>
                        <div className="col s12 m12 l12 xl12 responsive-table padding-left-0 mat-tables margin-bottom-20">
                          <table>
                            <tbody><tr>
                                <th>
                                  S.No
                                </th>
                                <th>
                                  Company Name
                                </th>
                                <th>
                                  Industry Domain
                                </th>
                                <th>
                                  Term Date
                                </th>
                                <th>
                                  Action
                                </th>
                              </tr>
                              {comparr.map((item,index)=>{
                               return (
                                  <tr>
                                <td>
                                  {index+1}
                                </td>
                                <td>
                                 {item.name}
                                </td>
                                <td>
                                  {item.domain}
                                </td>
                                <td>
                                  {item.date}
                                </td>
                                <td>
                                  <div className="action-items">
                                    <a className="edit" href="javascript:void(0)">Edit</a>
                                    <a className="delete" href="javascript:void(0)">Delete</a>
                                  </div>
                                </td>
                              </tr>
                                )
                              })}
                              
                            </tbody></table>
                        </div>
                      </div>
                      <div className="col s12 m12 l4 x4 padding-right-0">
                        <span className="collapse-view deveice-hide"> collapse</span>
                        <div className="company-details relative">
                          <span className="collapse-view"> collapse</span>
                          <div className="row margin-bottom-40">
                            <h1>
                              COMPANY DETAILS
                            </h1>
                            <a className="edit-bg" href="javascript:void(0)">Edit</a>
                          </div>
                          <div className="row">
                            <table>
                              <tbody><tr>
                                  <td>
                                    Company Name
                                  </td>
                                  <td>
                                    <label> Sample Name </label>
                                    <div className="input-field col s12 form-groups relative">
                                      <input placeholder="Sample Name" type="text" className="validate" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Company ID number
                                  </td>
                                  <td>
                                    <label> ID number </label>
                                    <div className="input-field col s12 form-groups relative">
                                      <input placeholder="ID number" type="text" className="validate" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Company Primary Contact
                                  </td>
                                  <td>
                                    <label> Primary Contact Phone </label>
                                    <div className="input-field col s12 form-groups relative">
                                      <input placeholder="Primary Contact Phone" type="text" className="validate" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Company Primary Contact Email
                                  </td>
                                  <td>
                                    <label> Contact Email </label>
                                    <div className="input-field col s12 form-groups relative">
                                      <input placeholder="Contact Email" type="text" className="validate" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    CompanyPrimary Address1
                                  </td>
                                  <td>
                                    <label> Address1 </label>
                                    <div className="input-field col s12 form-groups relative">
                                      <input placeholder="Address1" type="text" className="validate" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Company Primary Address City
                                  </td>
                                  <td>
                                    <label> Address City </label>
                                    <div className="input-field col s12 form-groups relative">
                                      <input placeholder="Address City" type="text" className="validate" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Company Primary Address State
                                  </td>
                                  <td>
                                    <label> Address State </label>
                                    <div className="input-field col s12 form-groups relative">
                                      <input placeholder="Address State" type="text" className="validate" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Company Primary Address State
                                  </td>
                                  <td>
                                    <label> Address State </label>
                                    <div className="input-field col s12 form-groups relative">
                                      <input placeholder="Address State" type="text" className="validate" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Company Primary Address Country
                                  </td>
                                  <td>
                                    <label> Address Country </label>
                                    <div className="input-field col s12 form-groups relative">
                                      <input placeholder="Address Country" type="text" className="validate" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Company Primary Address Zip
                                  </td>
                                  <td>
                                    <label> Address Zip </label>
                                    <div className="input-field col s12 form-groups relative">
                                      <input placeholder=" Address Zip" type="text" className="validate" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <button className="btn waves-effect waves-light green-btn" type="submit" name="action">
                                      save
                                    </button>
                                  </td>
                                  <td>
                                    <button className="btn waves-effect waves-light red-btn" type="submit" name="action">
                                      cancel
                                    </button>
                                  </td>
                                </tr>
                              </tbody></table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

 export default DashBoard
