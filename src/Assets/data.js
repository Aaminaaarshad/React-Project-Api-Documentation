const users = [
    {
      id: 1,
      title: 'Verify User',
      detail:[
        {Type:'POST'},
        {url :'http://localhost:5000/api/users/verifyUser'},
      ],
      parameters: [
            {Field:'firstName', Type:'string', Description:'Name of the user to be varified'},
            {Field:'email', Type:'string', Description:'Email of the user to be varified'},
            {Field:'password', Type:'string', Description:'Password of the user to be varified'},
            ],
      response: 'message: Email Sent, Please check your Inbox',
    },
    {
      id: 2,
      title: 'Register User',
      detail:[
        {Type:'POST'},
        {url :'http://localhost:5000/api/users/register'},
      ],
      parameters:[
        {Field:'Token'},
        {Type:'string'},
        {Description:'Token of the user'}
      ],
      response: "message:Registration Successful",
      },
    {
      id: 3,
      title: 'Login User',
      detail:[
        {Type:'POST'},
        {url :'http://localhost:5000/api/users/login'},
      ],
      parameters: [
            {Field:'email', Type:'string', Description:'Email of the user to be varified'},
            {Field:'password', Type:'string', Description:'Password of the user to be varified'},
            ],
      response: "message: login success and prev data not found",
    },
    {
      id: 4,
      title: 'Forgot Password',
      detail:[
        {Type:'PUT'},
        {url :'http://localhost:5000/api/users/forgot-password'},
      ],
      parameters: [
            {Field:'email', Type:'string', Description:'Email of the user to be varified'},
            ],
      response: "message: Reset Password Link Sent, Please check your Inbox",
    },
    {
      id: 5,
      title: 'Reset Password',
      detail:[
        {Type:'PUT'},
        {url :'http://localhost:5000/api/users//reset-password'},
      ],
      parameters: [
            {Field:'token', Type:'string', Description:'token of the user'},
            {Field:'password', Type:'string', Description:'Password of the user to be varified'},
            ],
      response: "message: Password Reset successfully",
    },
  ]
  export default users