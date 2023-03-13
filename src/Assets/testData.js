export const users = [

    {
        id: 1,
        title: 'Verify User',
        Type:'POST',
        url :'http://localhost:5000/api/users/verifyUser',
        Cases:[
            {id:1,
                title:"Success",
                parameters: [
                      {Field:'firstName', Type:'string', Description:'Name of the user to be varified'},
                      {Field:'email', Type:'string', Description:'Email of the user to be varified'},
                      {Field:'password', Type:'string', Description:'Password of the user to be varified'},
                      ],
                response: 'message: Email Sent, Please check your Inbox',
            },
            {id:2,
                title:"If email is missing",
                parameters: [
                      {Field:'firstName', Type:'string', Description:'Name of the user to be varified'},
                      {Field:'password', Type:'string', Description:'Password of the user to be varified'},
                      ],
                response: 'message: Email Sent, Please check your Inbox',
            },
            {id:3,
                title:"If password is missing",
                parameters: [
                      {Field:'firstName', Type:'string', Description:'Name of the user to be varified'},
                      {Field:'email', Type:'string', Description:'Email of the user to be varified'},
                      {Field:'password', Type:'string', Description:'Password of the user to be varified'},
                      ],
                response: 'message: Email Sent, Please check your Inbox',
            },
        ]
      },




      {
        id: 2,
        title: 'Register User',
        Type:'POST',
        url :'http://localhost:5000/api/users/register',
        Cases:[
            {id:1,
                title:"Success",
                parameters: [
                      {Field:'Token', Type:'string', Description:'Token of the user'},
                      ],
                response: 'message:Registration Successful',
            },
            {id:2,
                title:"If token is missing or expired",
                    parameters: [
                        {Field:'Token', Type:'string', Description:'Token of the user'},
                        ],
                  response: 'Token expired or invalid',
              },

            ]
      },


]