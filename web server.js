app.get('/api/hello', (req, res) => {
  const visitor_name = req.query.visitor_name;
  const clientIp = req.ip;
  ipApi.lookup(clientIp, (err, geo) => {
    if (err) {
      console.error(err);
      res.status(500).send({ error: 'Failed to retrieve location' });
    } else {
      const location = geo.city;
      const city_temperature = 23; // Replace with actual temperature
      const greeting = 'Hello, ${visitor_name}!, the city_temperature is $';{city_temperature} 'degrees Celcius in $';{location}
      res.json({
        client_ip: clientIp,
        location,
        greeting,
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 5500');
});