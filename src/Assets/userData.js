export const users = [

    {
        id: 1,
        title: 'Verify User',
        Type:'POST',
        url :'http://localhost:5000/api/users/verifyUser',
        cases:[
            {id:1,
                title:"Success",
                parameters: [
                      {Field:'firstName', Type:'string', Description:'Name of the user to be varified'},
                      {Field:'email', Type:'string', Description:'Email of the user to be varified'},
                      {Field:'password', Type:'string', Description:'Password of the user to be varified'},
                      ],
                response: 'Message: Email Sent, Please Check Your Inbox',
            },
            {id:2,
                title:"If email Is Missing",
                parameters: [
                      {Field:'firstName', Type:'string', Description:'Name of the user to be varified'},
                      {Field:'password', Type:'string', Description:'Password of the user to be varified'},
                      ],
                response: 'Message:Email Is Missing',
            },
            {id:3,
                title:"If password Is Missing",
                parameters: [
                      {Field:'firstName', Type:'string', Description:'Name of the user to be varified'},
                      {Field:'email', Type:'string', Description:'Email of the user to be varified'},
                      ],
                response: 'Message: Password Is Missing',
            },
            {id:4,
                title:"If firstName Is Missing",
                parameters: [
                      {Field:'email', Type:'string', Description:'Email of the user to be varified'},
                      {Field:'password', Type:'string', Description:'Password of the user to be varified'},
                      ],
                response: 'Message: FirstName Is Missing',
            },
        ],
      },
      {
        id: 2,
        title: 'Register User',
        Type:'POST',
        url :'http://localhost:5000/api/users/register',
        cases:[
            {id:1,
                title:"Success",
                parameters: [
                      {Field:'Token', Type:'string', Description:'Token of the user'},
                      ],
                response: 'Message: Registration Successful',
            },
            {id:2,
                title:"If Token Is Missing or Expired",
                    parameters: [
                        {Field:'Token', Type:'string', Description:'Token of the user'},
                        ],
                  response: 'Message: Token Expired Or Invalid',
              },

            ]
      },
      {
        id: 3,
        title: 'Login User',
        Type:'POST',
        url :'http://localhost:5000/api/users/login',
        cases:[
            {id:1,
                title:"Success",
                parameters: [
                    {Field:'email', Type:'string', Description:'Email of the user to be login'},
                    {Field:'password', Type:'string', Description:'Password of the user to be login'},
                      ],
                response: 'Message: Login Successful',
            },
            {id:2,
                title:"If email Is Missing",
                    parameters: [
                        {Field:'password', Type:'string', Description:'Password of the user to be login'},
                    ],
                  response: 'Message: Email Is Missing',
              },
            {id:3,
                title:"If password Is Missing",
                    parameters: [
                        {Field:'email', Type:'string', Description:'Email of the user to be login'},
                    ],
                  response: 'Message: Password Is Missing',
              },
              {id:4,
                title:"If Invalid Credentials",
                parameters: [
                    {Field:'email', Type:'string', Description:'Email of the user to be login'},
                    {Field:'password', Type:'string', Description:'Password of the user to be login'},
                      ],
                response: 'Message: Invalid Credentials',
            },
        ]
    },
    {
        id: 4,
        title: 'Forgot Password',
        Type:'PUT',
        url :'http://localhost:5000/api/users/forgot-password',
        cases:[
            {id:1,
                title:"Success",
                parameters: [
                    {Field:'email', Type:'string', Description:'Email of the user to be login'},
                      ],
                response: 'Message: Check Your Email',
            },
            {id:2,
                title:"If email Is Empty",
                    parameters: [
                        {Field:'email', Type:'string', Description:'Email of the user to be login'},
                    ],
                  response: 'Message: Email Is Empty',
              },
            {id:3,
                title:"If email Does Not Exist In Database",
                parameters: [
                    {Field:'email', Type:'string', Description:'Email of the user to be login'},
                ],
                  response: 'Message: Email Does Not Exist In Database',
              },
            ]
    },
    {
        id: 5,
        title: 'Reset Password',
        Type:'PUT',
        url :'http://localhost:5000/api/users/reset-password',
        cases:[
            {id:1,
                title:"Success",
                parameters: [
                    {Field:'password', Type:'string', Description:'Password of the user to be varified'},
                    {Field:'Token', Type:'string', Description:'Token of the user'},
                ],
                response: 'Message: Reset Password Successful',
            },
            {id:2,
                title:"If Token Is Expired",
                    parameters: [
                        {Field:'password', Type:'string', Description:'Password of the user to be varified'},
                        {Field:'Token', Type:'string', Description:'Token of the user'},                    ],
                  response: 'Message: Token Is Expired',
              },
            ]
    },

]