module.exports = {
    openapi: '3.0.0',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'Piksel Mutfak Azure API',
        termsOfService: '',
        contact: {
            name: 'Kazım Etiksan',
            email: 'kazim@pikselmutfak.com',
            url: 'https://www.pikselmutfak.com'
        },
        license: {
            name: 'Piksel Mutfak',
            url: 'https://www.pikselmutfak.com'
        }
    },
    servers: [
        {
            url: 'https://ketiksan72.azurewebsites.net/',
            description: 'Prod'
        }
    ],
    paths: {
        "/api/contact": {
            "get": {
                tags: ['Contact'],
                description: "Returns contact information.",
                operationId: 'getContact',
                responses: {
                    "200": {          
                        description: "Contact information.",
                    }
                }
            }
        }
    }
}