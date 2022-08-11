# Automatic-Email-Sender
Automatic Email Sender Using NodeJS
## Download the mailSender to your PC
### Installation
```sh
git clone https://github.com/IshanMK/Automatic-Email-Sender.git
```
### Install all the modules required
* Inside the directory where <code>package.json</code> is located run the following code from your terminal
```sh
npm install
```

## Configuration for your Gmail Account
* Go to your [Google Account](https://myaccount.google.com/)
* Then Go to <code>Security</code> Tab

  ![EcZhsd9Hlb](https://user-images.githubusercontent.com/73387606/176173930-2e813930-7479-48b3-aa8f-b55813aee4e8.png)
* Turn on <code>2-step verification</code>

  ![mhlCdvSp1u](https://user-images.githubusercontent.com/73387606/176174594-98e6f5ed-8728-4d71-b482-ed02f5512fc9.png)
* After turning on 2-step verification go back now you will see new option below 2-step Verification.
* Go to the new Option <code>App passwords</code>

  ![EMRDrRzOMc](https://user-images.githubusercontent.com/73387606/176175682-b4857c5b-140f-4cc7-9243-5826a85a38e0.png)

* You will get the followings

  ![g0KEXurtTr](https://user-images.githubusercontent.com/73387606/176176082-eaf287ed-6d78-4cf1-a6c7-657db499eb3b.png)

* Click on <code>select app</code> and choose the option <code>Other<i>(Custom name)</i></code>

  ![68Nseu72IZ](https://user-images.githubusercontent.com/73387606/176176387-e9038aaf-978f-4a81-9c7a-f628701b4967.png)

* Provide the custom name for your application and click on <code>Generate</code>

  ![iPm0D0Txr7](https://user-images.githubusercontent.com/73387606/176176845-61512052-d987-4d8c-bef2-968938d18dcf.png)
  
* It will automatically generate a password with <code>16</code> characters for your application

  ![ySjrEqW0lU](https://user-images.githubusercontent.com/73387606/176177376-2992db50-d38e-4f41-9d9e-d8fa309c8206.png)
* Copy the password to the <code>clipboard</code>

## Setting Up the <code>.env.auth</code> file
  * If you have a smtp server use it other use <code>smtp.gmail.com</code> as the <code>HOST</code>.
  * The <code>PORT</code> regarding the <code>smtp</code> is <code>587</code>.use <code>587</code> as <code>HOST_PORT</code>.
  * Use <code>gmail</code> as the <code>SERVICE</code>.
  * Use your own email address as <code>EMAIL_USERNAME</code>.
  * Use the <code>password copied to the ciplboard as the PASSWORD</code>
  
  
  ![1DcgISgMHz](https://user-images.githubusercontent.com/73387606/176180194-bcaa47b4-d2e9-4a5c-aa96-c04d84be76e3.png)

## Setting Up sendEmail.js
* Provide the <code>recipients</code> with an array of recipients mails seperated by commas as strings.If there is only single recipient no need an array of recipients.Just provide the single email as a string
* Just Provide the <code>scheduledDate</code> with the <code>Date-Time_TimeZone</code> you want to send the email
* eg : <code>2022-06-28T18:16:45+05:30</code>
* Provide <code>sender</code> , <code>subject</code> and <code>content</code> as you want

![4Mwynv1nzD](https://user-images.githubusercontent.com/73387606/184113776-e9e4c1ca-ed2c-47a8-aacc-e878602c64a7.png)



## Start Sending Mails
* After doing all the above steps just run the following code from your terminal
```sh
node sendEmail
```
  or
```sh
npm start
```

[Find More About moment module](https://momentjs.com/)
