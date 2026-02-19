


<p align="center">
   
<img width="112" height="112" alt="image" src="https://github.com/user-attachments/assets/e949d1fe-e37e-4040-a275-b95f4128f2b1" />



</p>

<h1 align="center">   Migrating Static Website from Azure to AWS using-S3 CloudFront Route 53
</h1>

<p align="center">

## 📌Project Overview 
This project involves migrating a static website from Microsoft Azure to AWS in order to leverage a highly scalable, cost-effective, and globally distributed hosting architecture.



![Severless](https://github.com/user-attachments/assets/fff2c121-8102-419d-b68e-265025967fff)




## 🔋 Services Used

![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)
![Amazon S3](https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![Amazon CloudFront](https://img.shields.io/badge/Amazon_CloudFront-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Amazon Route 53](https://img.shields.io/badge/Amazon_Route_53-8C4FFF?style=for-the-badge&logo=amazonaws&logoColor=white)
![AWS Certificate Manager](https://img.shields.io/badge/AWS_ACM-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)
![Namecheap](https://img.shields.io/badge/Namecheap-DE3723?style=for-the-badge&logo=namecheap&logoColor=white)


## Table of Content

[Created a Public Hosted Zone in Route 53 ](#1-created-a-public-hosted-zone-in-route-53)

[Updated Nameservers in Namecheap](#2-updated-nameservers-in-namecheap)

[Requested SSL Certificate](#3-requested-ssl-certificate-aws-certificate-manager)

[Created S3 Bucket](#4-createed-s3-bucket)

[Created CloudFront Distribution](#5-created-cloudfront-distribution)

 
[Created an Alias Record in Route 53](#6-created-an-alias-record-in-route-53)



## Steps

## 1. Created a Public Hosted Zone in Route 53

_Amazon Route 53 was configured to manage the domain’s DNS records and route traffic to the CloudFront distribution_

<img width="1353" height="622" alt="Route 53 hosted zone" src="https://github.com/user-attachments/assets/b62473b5-8241-468b-97fa-8f4e8ad130d0" />


## 2. Updated Nameservers in Namecheap

_By updating the domain’s name servers in Namecheap, Route 53 now manages the domain’s DNS records._

<img width="1319" height="647" alt="Nameseverupdated" src="https://github.com/user-attachments/assets/d4c1a014-7641-45b3-ba15-5c5b5a9f5f9c" />


### DNS Propagation Verification ✔

<img width="1352" height="613" alt="Dns propagation Veification" src="https://github.com/user-attachments/assets/3fce85bb-4e26-4ad5-8f1c-b66de30cc3b8" />


## 3. Requested SSL Certificate (AWS Certificate Manager)

_integrateed SSL/TLS certificate to enable secure HTTPS connections using AWS certificate manager_

Note: Since Route 53 now manages DNS, validation becomes automatic.

<img width="1354" height="602" alt="cerificate manger" src="https://github.com/user-attachments/assets/167dec85-373e-4897-9d1d-9272c4331e20" />


## 4. Createed S3 Bucket 
_Created S3 bucket to store and serve website assets_ 

Note: Bucket will not be made public as cloudfront will access the content securely

<img width="1343" height="624" alt="created a S3 bucket" src="https://github.com/user-attachments/assets/0da5deb8-1b82-4fa2-a554-ba2526bdf9b6" />

### Websites files uploaded into the S3 ✔

<img width="1351" height="627" alt="uploaded website in S3" src="https://github.com/user-attachments/assets/e8517629-e008-436a-bb8c-59a82f833206" />

## 5. Created CloudFront Distribution

_I created a CloudFront distribution to deliver the website globally with secure access to the S3 bucket_

### Configurations :

- Selected the created S3 bucket

- Enable Origin Access Control (OAC)
  
- Default root object index.html
  
- Disabled WAF ( waf is not need for this use)

<img width="1327" height="628" alt="created cloudfront distribution 1" src="https://github.com/user-attachments/assets/c55d2247-2374-4bc6-91f2-d884d15d5278" />

<img width="1339" height="663" alt="created cloudfront distribution 3" src="https://github.com/user-attachments/assets/1f4dd7fc-5a8d-4716-8245-6f92989073eb" />



## 6. Created an Alias Record in Route 53

Note:This allows Route 53 to send traffic to CloudFront distribution

<img width="1351" height="620" alt="created an alias record 1" src="https://github.com/user-attachments/assets/3a5d601f-8c1c-46ae-a45e-565025dd763c" />





## Final Verification ✔

Project completed and can be accessed through the domain name -> rivetrecords.online



https://github.com/user-attachments/assets/203cad53-32b9-4c7b-ba71-07151b184ead




## ❌ Issues encuntered/Solutions

During deployment, I initially uploaded the entire website project folder (Website-files) directly into the Amazon S3 bucket. As a result, all site assets (HTML, CSS, JavaScript, and 
images) were nested inside that folder instead of being placed at the bucket root.

Because of this structure, Amazon CloudFront could not locate the index.html file or the referenced static assets, which caused the site to display incorrectly (HTML only or Access Denied errors).

To resolve the issue, I deleted the uploaded folder and re-uploaded the website contents seperately.



## 📌 Conclusion  

This project demonstrates the end-to-end deployment of a secure and scalable static website using AWS services. By integrating Amazon S3 for storage, Amazon CloudFront for global content delivery, and Amazon Route 53 for DNS management, I was able to build a production-ready hosting architecture.

Key implementations included:

- Configuring a private S3 bucket

- Using Origin Access Control (OAC) to secure bucket access

- Setting up CloudFront for performance and HTTPS delivery

- Creating an Alias record in Route 53 to map the custom domain

- Troubleshooting file structure and deployment issues

