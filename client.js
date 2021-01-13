const net = require('net');
const connect = function(){
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542

    
  });
  conn.on('connect', () => {
    conn.write('Name: GTF')
  })
  conn.on('data', (data) => {
    console.log(data, "its got a sharp tongue this server")
  })

  conn.setEncoding('utf8');
  
  
  return conn;
  

}

module.exports = connect 