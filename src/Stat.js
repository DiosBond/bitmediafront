import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';


import './css/style.css';

const testdata = [{"user_id":33,"date":"2019-10-02","page_views":260,"clicks":565},{"user_id":38,"date":"2019-10-02","page_views":766,"clicks":258},{"user_id":75,"date":"2019-10-02","page_views":528,"clicks":776},{"user_id":94,"date":"2019-10-02","page_views":323,"clicks":373},{"user_id":101,"date":"2019-10-02","page_views":721,"clicks":723},{"user_id":111,"date":"2019-10-02","page_views":304,"clicks":726},{"user_id":119,"date":"2019-10-02","page_views":724,"clicks":505},{"user_id":121,"date":"2019-10-02","page_views":956,"clicks":133},{"user_id":139,"date":"2019-10-02","page_views":496,"clicks":327},{"user_id":159,"date":"2019-10-02","page_views":702,"clicks":917},{"user_id":171,"date":"2019-10-02","page_views":635,"clicks":519},{"user_id":173,"date":"2019-10-02","page_views":503,"clicks":930},{"user_id":187,"date":"2019-10-02","page_views":946,"clicks":552},{"user_id":190,"date":"2019-10-02","page_views":369,"clicks":344},{"user_id":219,"date":"2019-10-02","page_views":981,"clicks":196},{"user_id":224,"date":"2019-10-02","page_views":108,"clicks":399}];


function createData(id, first_name, last_name, email, gender, ip_address, clicks, views){
  return {id, first_name, last_name, email, gender, ip_address, clicks, views};
}

function Stat() {
  return (
    
      <div> User Statistics 

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>IP address</TableCell>
              <TableCell>Total clicks</TableCell>
              <TableCell>Total page views</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testdata.map((row) => (
              <TableRow key = {row.id}>
                <TableCell component='th'>{row.user_id}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
      </div>
  );
}

export default Stat;
