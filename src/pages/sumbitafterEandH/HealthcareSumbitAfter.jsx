import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
const HealthcareSumbitAfter = () => {
  const location = useLocation()
  const { apidata } = location.state || {}
  console.log(apidata)
  return (
    <>
      <>
        <Container>
          <table style={{ display: 'block', background: '#f8f8fa url(https://i.ibb.co/VTk0B0B/pattern.png) repeat top left', width: '800px', color: '#444444', boxShadow: '0px 0 6px #ccc' }} cellSpacing="0" cellPadding="0" border="0" align="center">
            <tr style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tr width="800px" style={{ width: '100%', display: 'grid', borderCollapse: 'collapse' }}>
                <td>
                  <p style={{ margin: '0', fontSize: '11px', textAlign: 'right', paddingRight: '5px', paddingTop: '-5px' }}>
                    Regd. NO. :427, Block No. 4, Volume 107, Page on 136-149
                  </p>
                </td>
                <tr width="800px" style={{ width: '800px', backgroundColor: 'white', height: '100px', borderBottom: '3px solid #006cb5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <td style={{ width: '800px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p>
                      <img alt="logo" src="http://almanacsocialwelfare.com/assets/logo-9bd8e0f9.png" style={{ height: '80px' }} />
                    </p>
                    <span style={{ textAlign: 'center', alignItems: 'center', marginTop: '15px' }}>
                      <b style={{ marginBottom: '0px', color: '#006cb5', fontSize: '28px', fontWeight: 'bold' }}>ALMANAC SOCIAL WELFARE</b>
                      <br />
                      (Regd. Under Govt. of NCT of Delhi Registration Act <span style={{fontFamily:"sans-serif !important"}}>1882</span>)
                    </span>
                    <table style={{ margin: '0', fontSize: '11px', textAlign: 'right', paddingRight: '-5px', marginTop: '-14px' }}>
                      <td style={{ marginTop: '5px', fontSize: '11px', textAlign: 'right' }}>
                        Regd. NO./12A : AAGTA7404EE20211<br />
                        Regd. NO.80G : AAGTA7404EF20219<br />
                        Niti Aayog Regd. : DL/2021/0272793<br />
                        PAN Number : AAGTA7404E
                      </td>
                    </table>
                  </td>
                </tr>
              </tr>
            </tr>


            <tr style={{ display: 'block', padding: '20px' }}>
              <td style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>
                <table style={{ width: '760px', display: 'block', wordBreak: 'break-all', boxShadow: '0px 0 6px #ccc', background: '#fff', padding: '0px 15px', borderRadius: '5px', fontSize: '14px' }} cellSpacing="0" cellPadding="0" border="0" align="center">
                  <tbody>
                    <tr>
                      <td colSpan="3" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif', fontSize: '12px' }}>
                        <span>Dear<br />Your inquiry has been received</span>
                      </td>
                    </tr>
                    <tr style={{ display: 'grid' }}>
                      {/* Your content goes here */}
                      <td colSpan={3}>
                        <table style={{ marginBottom: '20px', width: '730px', fontSize: '14px', textAlign: 'left', background: '#ffffff', border: '1px solid #cac2be', clear: 'both' }} cellSpacing="0" cellPadding="5" border="0" align="left">
                          {/* Your table content goes here */}
                          <thead>
                            <tr style={{ backgroundColor: '#006cb5', height: '20px', color: 'white' }}>
                              <th style={{ fontFamily: 'calibri,helvetica,arial,sans-serif', textAlign: 'left' }} width="30%">Info</th>
                              <th width="5%"><br /></th>
                              <th style={{ fontFamily: 'calibri,helvetica,arial,sans-serif', textAlign: 'left' }} width="65%">Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Hospital Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.hospital_name}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Department Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.department_name}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Address</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.address}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Name of the patient</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.name_of_the_patient}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Father husband name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.father_husband_name}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Mother name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.mother_name}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Permanent address</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.permanent_address}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Gender</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.gender}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Age</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.age}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Category</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.category}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Religion:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.religion}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Aadhar no voter id no:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.aadhar_no_voter_id}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Email:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.email}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Mobile Number:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.mobile}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Monthly family income:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.monthly_family_income}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Patient name:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.patient_name}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Patient occupation:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.patient_occupation}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Patient email id:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.patient_email_id}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Patient mobile number:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.patient_mobile_number}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Guardian_address:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.guardian_address}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>I have declared:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.i_have_declared}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>R_o_w o:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.R_o}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Place:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.place}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Date</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.date}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <tbody style={{ width: "100%", paddingTop: '20px', textAlign: 'center', alignItems: 'center' }}>
                <td style={{ borderTop: '2px solid transparent', borderImage: 'linear-gradient(0.25turn, red, green) 1', width: '800px', border: '1px solid #cac2be' }}>
                  <div style={{ width: '100%', textAlign: 'center', fontSize: '12px', border: '1px solid #eeeeee', paddingBottom: '7px', background: '#fff' }}>
                    <p style={{ width: '100%', fontSize: '11px', color: '#444444', textAlign: 'center' }}>
                      Registration Office: 277, Okhla Village, Jamia Nagar, New Delhi-110025., Branch Office: 3rd Floor, 43-B, Okhla, Jamia Nagar, New Delhi - 110025
                      <br />
                      Web: <a target="_blank" href="http://almanacsocialwelfare.com" rel="noopener" style={{ textDecoration: 'none', color: '#444444' }}>almanacsocialwelfare.com</a>,
                      E-mail: <a href="mailto:socialwelfarealmanac@gmail.com" style={{ textDecoration: 'none', color: '#444444' }}>socialwelfarealmanac@gmail.com</a>
                    </p>
                  </div>
                </td>
              </tbody>
            </tr>
          </table>
        </Container>
      </>
    </>
  )
}

export default HealthcareSumbitAfter

