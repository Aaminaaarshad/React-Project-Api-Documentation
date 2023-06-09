export const dashboard=[
    {
        id:1,
        title:'Get User Charts Data',
        Type:'GET',
        url:'http://localhost:5000/api/userData/mydashboard',
        cases:[
            {
                id:1,
                title:'Success',
                parameters:[
                    {Field:'Token', Type:'String', Description:'Token of the user'},                
                ],
                response:'Message: Data Found'
            },
            {
                id:2,
                title:'If Form Is Not Connected',
                parameters:[
                    {Field:'Token', Type:'String', Description:'Token of the user'},                
                ],
                response:'Message: Form Is Not Connected'
            }
        ]

    },
    {
        id:2,
        title:'Create User Form Data',
        Type:'POST',
        url:'http://localhost:5000/api/userData/:id',
        cases:[
            {
                id:1,
                title:'Success',
                parameters:[
                    {Field:'url', Type:'String', Description:'Url of the api'},
                    {Field:'curency', Type:'String', Description:'Currency'}, 
                    {Field:'secretKey', Type:'String', Description:'Secret key'},                
                    {Field:'DashboardName', Type:'String', Description:'Name of the Dashboard'},                
                    {Field:'DashboardColor', Type:'String', Description:'Color of the Dashboard'},                
                ],
                response:'Message: User Form Data Is Created',
            },
            {
                id:2,
                title:'If Form Data Is Already Provided',
                parameters:[
                    {Field:'url', Type:'String', Description:'Url of the api'},
                    {Field:'curency', Type:'String', Description:'Currency'}, 
                    {Field:'secretKey', Type:'String', Description:'Secret key'},                
                    {Field:'DashboardName', Type:'String', Description:'Name of the Dashboard'},                
                    {Field:'DashboardColor', Type:'String', Description:'Color of the Dashboard'},                 
                ],
                response:'Message: Form Data Is Already Provided'
            },
            {
                id:3,
                title:'If Any Key Is Missing',
                parameters:[
                    {Field:'url', Type:'String', Description:'Url of the api'},
                    {Field:'curency', Type:'String', Description:'Currency'}, 
                    {Field:'DashboardName', Type:'String', Description:'Name of the Dashboard'},                
                    {Field:'DashboardColor', Type:'String', Description:'Color of the Dashboard'},                 
                ],
                response:'Message: Key Is Missing'
            }
        ]

    },
    {
        id:3,
        title:'Update User Form Data',
        Type:'PUT',
        url:'http://localhost:5000/api/userData/:id',
        cases:[
            {
                id:1,
                title:'Success',
                parameters:[
                    {Field:'url', Type:'String', Description:'Url of the api'},
                    {Field:'curency', Type:'String', Description:'Currency'}, 
                    {Field:'secretKey', Type:'String', Description:'Secret key'},                
                    {Field:'DashboardName', Type:'String', Description:'Name of the Dashboard'},                
                    {Field:'DashboardColor', Type:'String', Description:'Color of the Dashboard'},                 ],
                response:'Message: Form Data Is Updated'
            },
        ]

    },
    {
        id:4,
        title:'NewsLetter Subscription',
        Type:'POST',
        url:'http://localhost:5000/api/userData/newsletter',
        cases:[
            {
                id:1,
                title:'Success',
                parameters:[
                    {Field:'email', Type:'String', Description:'Email of the user'},
                ],
                response:'Message: Subcription Successful'
            },
            {
                id:2,
                title:'If The User Is Already Subscribed',
                parameters:[
                    {Field:'email', Type:'String', Description:'Email of the user'},
                ],
                response:'Message: The User Is Already Subscribed'
            },
        ]

    },
]