


<p align="center">
   
<img width="112" height="112" alt="image" src="https://github.com/user-attachments/assets/e949d1fe-e37e-4040-a275-b95f4128f2b1" />



</p>

<h1 align="center">  Production Grade Serverless Web Architecture with CI/CD Integration

</h1>

<p align="center">


## (PART 1)

## 📌Project Overview 
This project involves migrating a static website from Microsoft Azure to AWS in order to leverage a highly scalable, cost-effective, and globally distributed hosting architecture.



![Severless](https://github.com/user-attachments/assets/59381bb3-cfc6-4f2d-85d9-f526efdfe754)




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

[Part 2 Full severless and CICD integration](#part-2a)

## Steps

## 1. Created a Public Hosted Zone in Route 53

_Amazon Route 53 was configured to manage the domain’s DNS records and route traffic to the CloudFront distribution_

<img width="1153" height="622" alt="Route 53 hosted zone" src="https://github.com/user-attachments/assets/b62473b5-8241-468b-97fa-8f4e8ad130d0" />


## 2. Updated Nameservers in Namecheap

_By updating the domain’s name servers in Namecheap, Route 53 now manages the domain’s DNS records._

<img width="1119" height="647" alt="Nameseverupdated" src="https://github.com/user-attachments/assets/d4c1a014-7641-45b3-ba15-5c5b5a9f5f9c" />


### DNS Propagation Verification ✔

<img width="1152" height="613" alt="Dns propagation Veification" src="https://github.com/user-attachments/assets/3fce85bb-4e26-4ad5-8f1c-b66de30cc3b8" />


## 3. Requested SSL Certificate (AWS Certificate Manager)

_integrateed SSL/TLS certificate to enable secure HTTPS connections using AWS certificate manager_

Note: Since Route 53 now manages DNS, validation becomes automatic.

<img width="1154" height="602" alt="cerificate manger" src="https://github.com/user-attachments/assets/167dec85-373e-4897-9d1d-9272c4331e20" />


## 4. Createed S3 Bucket 
_Created S3 bucket to store and serve website assets_ 

Note: Bucket will not be made public as cloudfront will access the content securely

<img width="1143" height="624" alt="created a S3 bucket" src="https://github.com/user-attachments/assets/0da5deb8-1b82-4fa2-a554-ba2526bdf9b6" />

### Websites files uploaded into the S3 ✔

<img width="1151" height="627" alt="uploaded website in S3" src="https://github.com/user-attachments/assets/e8517629-e008-436a-bb8c-59a82f833206" />

## 5. Created CloudFront Distribution

_I created a CloudFront distribution to deliver the website globally with secure access to the S3 bucket_

### Configurations :

- Selected the created S3 bucket

- Enable Origin Access Control (OAC)
  
- Default root object index.html
  
- Disabled WAF ( waf is not need for this use)

<img width="1127" height="628" alt="created cloudfront distribution 1" src="https://github.com/user-attachments/assets/c55d2247-2374-4bc6-91f2-d884d15d5278" />

<img width="1139" height="663" alt="created cloudfront distribution 3" src="https://github.com/user-attachments/assets/1f4dd7fc-5a8d-4716-8245-6f92989073eb" />



## 6. Created an Alias Record in Route 53

Note:This allows Route 53 to send traffic to CloudFront distribution

<img width="1151" height="620" alt="created an alias record 1" src="https://github.com/user-attachments/assets/3a5d601f-8c1c-46ae-a45e-565025dd763c" />





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

_____________________________________________________________________________________________________________


## (PART 2A)

## 📌Project Overview 
This section involves the inetegration of contact form with email notification and also the Full CI/CD Integration using GitHub Action, Api gateway, AWS Lambda to carry out tasks.


![Main-Architecture](https://github.com/user-attachments/assets/fb62082d-2981-40e5-ba72-6e892cda3cc0)


## 🔋 Services Used

![AWS IAM](https://img.shields.io/badge/AWS-IAM-orange?logo=amazonaws&logoColor=white)
![Amazon API Gateway](https://img.shields.io/badge/AWS-API_Gateway-FF4F8B?logo=amazonaws&logoColor=white)
![AWS Lambda](https://img.shields.io/badge/AWS-Lambda-FF9900?logo=awslambda&logoColor=white)
![Amazon SES](https://img.shields.io/badge/AWS-SES-232F3E?logo=amazonaws&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-2088FF?logo=githubactions&logoColor=white)
![CI/CD](https://img.shields.io/badge/CI/CD-Automated-blue)

## Steps 

## 1.   Created an IAM user for GitHub  

 _I created an IAM user with programatic access and attched AmazonS3FullAccess and CloudFrontFullAccess polices to the user_
 
_Also created CLI access key for the IAM user_

<img width="1132" height="552" alt="created-iam-user" src="https://github.com/user-attachments/assets/18d3f182-a4f4-4581-8bb8-88c33806716c" />


## 2.   Added the Github Action secrets

-  _GitHub Secrets are secure storage for sensitive information that GitHub Actions workflow needs._

-  _This allows the pipeline to access AWS without exposing credentials publicly_

 -  _so github action asume the iam user  and access the recources listed there_

<img width="1128" height="600" alt="github-action-secrets" src="https://github.com/user-attachments/assets/2bac8a3e-07db-44d0-8050-923bffae4993" />

 ## 3.   Initialized Git in the Local and Connect to My Existing repo

   cmds
   
_git init_

_git add ._

_git commit -m "Initial commit - serverless portfolio"_

_git branch -M main_

_git remote add origin https://github.com/yourusername/serverless-portfolio_

_git pull main origin_ 

_git commit -m "Merge remote repository with local project"_

_git push -u origin main_

<img width="1182" height="681" alt="git commit to origin" src="https://github.com/user-attachments/assets/286763d2-7a3e-4e3b-99a6-d5c0b9ebafb9" />

 ## 4.  Added a github action yml file, and created a workflow.
- _The workflow automatically deploys the website from GitHub to AWS whenever code is pushed to the main branch, eliminating the need for manual uploads_

- _The workflow includes actions that synchronize the local project files with the S3 bucket. During deployment, existing files are updated and outdated files are removed, ensuring the live website always reflects the latest version of the code._

<img width="1191" height="682" alt="worklows file" src="https://github.com/user-attachments/assets/e1d4ae44-baaf-411b-a5d7-7851950ea008" />


## 5. Added a git ignore file to set the files and folders i do not want to include in the deployment.

<img width="1161" height="680" alt="add git ignore file" src="https://github.com/user-attachments/assets/f6d319b1-4023-44ec-b2a5-d426856348a7" />



## 6. CICD Pipepline Deployment Action

Note: The initial YAML configuration caused CloudFront invalidation errors due to incorrect secret handling. This was resolved by using a dedicated GitHub Action for CloudFront invalidation, ensuring reliable cache updates during deployment.

<img width="1154" height="494" alt="error encountered" src="https://github.com/user-attachments/assets/df01e450-e0ec-4771-92ad-e288d14c5357" />


## ❌ Error fixed

Now the deployment is automated and each changes will reflect at every push 

<img width="1366" height="567" alt="Deployment fixed" src="https://github.com/user-attachments/assets/2322c790-f399-48e3-abad-ca450bfe0eac" />



https://github.com/user-attachments/assets/b0a34f56-7adc-457d-9b36-1660da17775f

_________________________________________________________________________________________________


## (Part 2B) Severless Backend Contact Form Integration

## Steps

## 1. SES identity creation 
_Verified my Email in SES, This allows AWS to send email on my behalf._

<img width="316" height="480" alt="image" src="https://github.com/user-attachments/assets/3fef0f8b-8e28-4951-b6b6-1e2d4499b01b" />
<img width="494" height="486" alt="SES Identity verification" src="https://github.com/user-attachments/assets/6f2955bb-7e1e-4505-9232-2360631f8c87" />


## 2. Created a Lambda Function 
- _I created an AWS Lambda function and configured it to handle contact form submissions._

- _I attached the Amazon SES Full Access policy to the Lambda execution role, allowing the function to securely send email notifications using Amazon SES._

<img width="1144" height="549" alt="created lambda funtion" src="https://github.com/user-attachments/assets/bbe9a664-f653-48b5-bfe6-18352dddbbb9" />

<img width="1140" height="569" alt="adeed SES full access policy" src="https://github.com/user-attachments/assets/e3b6c46c-b642-48e2-bf33-1076bb196a3a" />


## 3. Created an API Gateway endpoint that triggers the Lambda function.

- _i created a POST route (/contact) in API Gateway and integrated it with my lambda function_

- _this allows the API endpoint to trigger the lambda function and process contact form submissions_

  <img width="1153" height="301" alt="created an API route" src="https://github.com/user-attachments/assets/963b656e-5221-40c8-91da-ad02357d2d0e" />

## 4. Connected my Frondend to the Backend Severless

- _i retrieved the API Gateway invoke URL from the prod stage_

- _i combined the stage URL with the /contact route to form the full backend endpoint_

- _this endpoint allows the frontend to trigger the lambda function_

<img width="1156" height="398" alt="Api-Endpoint-config" src="https://github.com/user-attachments/assets/f97ae985-ceac-49eb-95ad-346353107ed4" />


# 5. Final step Deployment & testing

### Deployment 

git add .

git commit -m "Connected contact form to serverless backend"

git push origin main

### Contact form Validation Test

 _❌ Error Encountered_
<img width="1178" height="371" alt="testing error 1" src="https://github.com/user-attachments/assets/6d24fee7-43e7-4133-9240-43bbc63b2aff" />

### Debugging & Solutions ✔

1. ### Configured CORS correctly
I configured CORS in API Gateway to allow requests from my domain.

- Configuration:
Allow origin: https://rivetrecords.online

- Allow methods: POST, OPTIONS

- Allow headers: content-type

2. ### Fixed AWS SDK compatibility issue

- Node.js 18 Lambda runtime uses AWS SDK v3.

- I updated the Lambda function to use:
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

## Final verification  ✔✔✔

_Sending Request_

https://github.com/user-attachments/assets/cd918430-d17f-46f8-b369-63d1b352987a


### Email verificatrion ✔

<img width="740" height="626" alt="image" src="https://github.com/user-attachments/assets/22fb0aae-cdb9-40d6-a930-8b3460fc7a09" />



## 📌 Conclusion 


This project demonstrates a production-grade serverless web architecture built on AWS with full CI/CD automation.

The frontend is hosted on Amazon S3 and delivered globally through CloudFront, with Route 53 managing the custom domain and HTTPS access. The backend is powered by API 

Gateway and AWS Lambda, enabling event-driven processing of contact form submissions without managing servers. Amazon SES handles secure email delivery.

A CI/CD pipeline was implemented using GitHub Actions, allowing automatic deployment of frontend updates to S3 and automatic CloudFront cache invalidation whenever changes are pushed to the repository.

This architecture showcases key cloud engineering and DevOps principles, including serverless computing, infrastructure automation, secure service integration, and continuous delivery, resulting in a scalable, highly available, and fully automated web application.


## 🔍🔔  Observability and Monitoring

Monitoring and alerting were implemented using Datadog and Slack.

View full observability implementation here:

https://github.com/iampryce/Serverless-Observability-Monitoring-with-Datadog-and-Slack
