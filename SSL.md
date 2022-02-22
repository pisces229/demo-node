<pre>
123456
</pre>

### 1.rootCa

`openssl genrsa -aes256 -out rootCa.key 4096`

`openssl req -new -x509 -key rootCa.key -days 3650 -sha256 -extensions v3_ca -out rootCa.pem`

<pre>
Country Name (2 letter code) [AU]:TW
State or Province Name (full name) [Some-State]:Taiwan
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Test.TW
Organizational Unit Name (eg, section) []:Test.TW Certificate Authority
Common Name (e.g. server FQDN or YOUR name) []:Test.TW Root CA
Email Address []:
</pre>

`openssl x509 -noout -text -in rootCa.pem`

### 2.intermediateCa

`openssl genrsa -aes256 -out intermediateCa.key 4096`

`openssl req -sha256 -new -key intermediateCa.key -out intermediateCa.csr`

<pre>
Country Name (2 letter code) [AU]:TW
State or Province Name (full name) [Some-State]:Taiwan
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Test.TW
Organizational Unit Name (eg, section) []:Test.TW Dev Certificate Authority
Common Name (e.g. server FQDN or YOUR name) []:Test.TW Dev Intermediate CA
Email Address []:
A challenge password []:
An optional company name []:
</pre>

`openssl x509 -req -in intermediateCa.csr -CA rootCa.pem -CAkey rootCa.key -CAserial rootCa.serial -CAcreateserial -days 365 -extensions intermediate_ca -extfile intermediateCa.ext -out intermediateCa.pem`

`openssl x509 -noout -text -in intermediateCa.pem`

`openssl verify -CAfile rootCa.pem intermediateCa.pem`

### 3.Server

`openssl genrsa -aes256 -out server.key 4096`

`openssl req -sha256 -new -key server.key -out server.csr`

<pre>
Country Name (2 letter code) [AU]:TW
State or Province Name (full name) [Some-State]:Taiwan
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Test.TW
Organizational Unit Name (eg, section) []:Test.TW Dev
Common Name (e.g. server FQDN or YOUR name) []:Test.TW Dev
Email Address []:
A challenge password []:
An optional company name []:
</pre>

`openssl x509 -req -in server.csr -CA intermediateCa.pem -CAkey intermediateCa.key -CAserial intermediateCa.serial -CAcreateserial -days 365 -out server.pem`

`openssl x509 -noout -text -in server.pem`

`openssl verify -CAfile rootCa.pem -untrusted intermediateCa.pem server.pem`

### 4.CA bundle

`cat intermediateCa.pem rootCa.pem > bundleCa.pem`

`openssl verify -CAfile bundleCa.pem server.pem`
