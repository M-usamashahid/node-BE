define({ "api": [
  {
    "type": "post",
    "url": "/contact",
    "title": "Create Contact",
    "description": "<p>Create a new message.</p>",
    "name": "CreateContact",
    "group": "Contact",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory Contact Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory Contact Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Contact Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>key value pairs of data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : {\n  \t        name            : 'John',\n            email           : 'john@email.com',\n            message         : 'some text here'\n        },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>null</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : 'Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "delete",
    "url": "/contact/:id",
    "title": "Delete Contact",
    "description": "<p>Delete a specific Contact by Id.</p>",
    "name": "DeleteContact",
    "group": "Contact",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if delete successfully.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>True if delete successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : true,\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact",
    "title": "Get All Contact",
    "description": "<p>Get all messenger records</p>",
    "name": "GetContact",
    "group": "Contact",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "response",
            "description": "<p>Objects of array.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>messenger name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>messenger email.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.message",
            "description": "<p>messenger message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Get\n{\n  \tstatus : true,\n  \tresponse : [{\n  \t        name            : 'John',\n            email           : 'john@email.com',\n            message         : 'some text here'\n        }],\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : 'Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/:id",
    "title": "Get Contact",
    "description": "<p>Get a specific messenger record</p>",
    "name": "GetContactById",
    "group": "Contact",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>key value pairs</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>messenger name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>messenger email</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.message",
            "description": "<p>messenger message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Get\n{\n  \tstatus : true,\n  \tresponse : {\n  \t        name            : 'John',\n            email           : 'john@email.com',\n            message         : 'some text here'\n        },\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : 'Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "put",
    "url": "/contact/:id",
    "title": "Update Contact",
    "description": "<p>Update a specific messenger record by Id</p>",
    "name": "UpdateContactById",
    "group": "Contact",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>messenger name (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>messenger email (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>messenger message (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if update successfully</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "response",
            "description": "<p>True if update successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Get\n{\n  \tstatus : true,\n  \tresponse : true,\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : ' eg : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "post",
    "url": "/experience",
    "title": "Create Experience",
    "description": "<p>Create a new Experience.</p>",
    "name": "CreateExperience",
    "group": "Experience",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Mandatory title/designation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Mandatory company name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>job description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory job type (work or freelance).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Url",
            "description": "<p>company web or project Url.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>logo or Icon Url.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>job starting date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>job ending date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>key value pairs of data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : {\n  \t        title               : 'SR. Developer',\n  \t        company             : 'ABC Company',\n            type                : 'work',\n            iconUrl             : 'http://.....'\n            ....\n        },\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/experience.js",
    "groupTitle": "Experience"
  },
  {
    "type": "delete",
    "url": "/experience/:id",
    "title": "Delete Experience",
    "description": "<p>Delete a specific Experience by Id.</p>",
    "name": "DeleteExperience",
    "group": "Experience",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if delete successfully.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>True if delete successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Deleted\n{\n  \tstatus : true,\n  \tresponse : true,\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/experience.js",
    "groupTitle": "Experience"
  },
  {
    "type": "get",
    "url": "/experience/:id",
    "title": "Get Experience",
    "description": "<p>Get a specific Experience by Id.</p>",
    "name": "GetExperienceById",
    "group": "Experience",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object of key value pair</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.title",
            "description": "<p>title/designation.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.company",
            "description": "<p>Company name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.description",
            "description": "<p>Job description.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.type",
            "description": "<p>job type (work or freelance).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.iconUrl",
            "description": "<p>Logo or Icon URL.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.Url",
            "description": "<p>company web or project Url.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.startDate",
            "description": "<p>Job start date.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.endDate",
            "description": "<p>Job end date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Get\n{\n  \tstatus : true,\n  \tresponse : {\n  \t        title               : 'SR. Developer',\n  \t        company             : 'ABC Company',\n            type                : 'work',\n            iconUrl             : 'http://.....'\n            ....\n        },\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/experience.js",
    "groupTitle": "Experience"
  },
  {
    "type": "get",
    "url": "/experience",
    "title": "Get all Experience",
    "description": "<p>Get all Experiences.</p>",
    "name": "GetExperiences",
    "group": "Experience",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "response",
            "description": "<p>Objects of array</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.title",
            "description": "<p>title/designation.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.company",
            "description": "<p>Company name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.description",
            "description": "<p>Job description.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.type",
            "description": "<p>job type (work or freelance).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.iconUrl",
            "description": "<p>Logo or Icon URL.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.Url",
            "description": "<p>company web or project Url.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.startDate",
            "description": "<p>Job start date.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.endDate",
            "description": "<p>Job end date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Get\n{\n  \tstatus : true,\n  \tresponse : [{\n  \t        title               : 'SR. Developer',\n  \t        company             : 'ABC Company',\n            type                : 'work',\n            iconUrl             : 'http://.....'\n            ....\n        }],\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/experience.js",
    "groupTitle": "Experience"
  },
  {
    "type": "put",
    "url": "/experience/:id",
    "title": "Update Experience",
    "description": "<p>Update a specific Experience by Id.</p>",
    "name": "UpdateExperience",
    "group": "Experience",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Mandatory title/designation. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Mandatory company name. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>job description. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory job type (work or freelance). (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Url",
            "description": "<p>company web or project Url. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>logo or Icon Url. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>job starting date. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>job ending date. (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if update successfully.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>True if update successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Updated\n{\n  \tstatus : true,\n  \tresponse : true,\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/experience.js",
    "groupTitle": "Experience"
  },
  {
    "type": "post",
    "url": "/image",
    "title": "Upload Image",
    "description": "<p>Upload a new Image.</p>",
    "name": "UploadImage",
    "group": "Image",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Mandatory Base64 String.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>image format eg..png .jpg.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>image file name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>key value pairs of data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : {\n  \t       image_url : 'http://....'\n        },\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/imageUpload.js",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/portfolio",
    "title": "Create Portfolio",
    "description": "<p>Create a new Portfolio.</p>",
    "name": "CreatePortfolio",
    "group": "Portfolio",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory Admin | Iframe | Login | Site.</p>"
          },
          {
            "group": "Parameter",
            "type": "ArrayOfObject",
            "optional": false,
            "field": "picture",
            "description": "<p>Mandatory Array of Objects.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture.URL",
            "description": "<p>Picture URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture.language",
            "description": "<p>development language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture.framework",
            "description": "<p>development framework.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>key value pairs of data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : {\n  \t        type               : 'Admin',\n  \t        picture            : [{\n  \t            URL         : 'http://.....',\n  \t            language    : 'JavaScript'/\n  \t            framework   : 'Angular'\n  \t        }]\n        },\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/portfolio.js",
    "groupTitle": "Portfolio"
  },
  {
    "type": "delete",
    "url": "/portfolio/:id",
    "title": "Delete Portfolio",
    "description": "<p>Delete a specific Portfolio by Id.</p>",
    "name": "DeletePortfolio",
    "group": "Portfolio",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if delete successfully.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>True if delete successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Deleted\n{\n  \tstatus : true,\n  \tresponse : true,\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/portfolio.js",
    "groupTitle": "Portfolio"
  },
  {
    "type": "get",
    "url": "/portfolio/:id",
    "title": "Get Portfolio",
    "description": "<p>Get a specific Portfolio by Id.</p>",
    "name": "GePortfolioById",
    "group": "Portfolio",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Objects of key value pair</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.type",
            "description": "<p>Admin | Iframe | Login | Site.</p>"
          },
          {
            "group": "200",
            "type": "ArrayOfObject",
            "optional": false,
            "field": "response.picture",
            "description": "<p>Array of Objects.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.picture.URL",
            "description": "<p>Picture URL.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.picture.language",
            "description": "<p>development language.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.picture.framework",
            "description": "<p>development framework.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Get\n{\n  \tstatus : true,\n  \tresponse : {\n  \t         type               : 'Admin',\n  \t         picture            : [{\n  \t            URL         : 'http://.....',\n  \t            language    : 'JavaScript'/\n  \t            framework   : 'Angular'\n  \t        }]\n        },\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/portfolio.js",
    "groupTitle": "Portfolio"
  },
  {
    "type": "get",
    "url": "/portfolio",
    "title": "Get all Portfolio",
    "description": "<p>Get all Portfolio.</p>",
    "name": "GetPortfolio",
    "group": "Portfolio",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "ArrayOfObject",
            "optional": false,
            "field": "response",
            "description": "<p>Array of Objects</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.type",
            "description": "<p>Mandatory Admin | Iframe | Login | Site.</p>"
          },
          {
            "group": "200",
            "type": "ArrayOfObject",
            "optional": false,
            "field": "response.picture",
            "description": "<p>Mandatory Array of Objects.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.picture.URL",
            "description": "<p>Picture URL.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.picture.language",
            "description": "<p>development language.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.picture.framework",
            "description": "<p>development framework.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Get\n{\n  \tstatus : true,\n  \tresponse : [{\n  \t         type               : 'Admin',\n  \t         picture            : [{\n  \t            URL         : 'http://.....',\n  \t            language    : 'JavaScript'/\n  \t            framework   : 'Angular'\n  \t        }]\n        }],\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/portfolio.js",
    "groupTitle": "Portfolio"
  },
  {
    "type": "put",
    "url": "/portfolio/:id",
    "title": "Update Portfolio",
    "description": "<p>Update a specific Portfolio by Id.</p>",
    "name": "UpdatePortfolio",
    "group": "Portfolio",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "picture",
            "description": "<p>Objects of Key value pair.(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture.URL",
            "description": "<p>Picture URL. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture.language",
            "description": "<p>development language. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture.framework",
            "description": "<p>development framework. (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if update successfully.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>True if update successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Updated\n{\n  \tstatus : true,\n  \tresponse : true,\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/portfolio.js",
    "groupTitle": "Portfolio"
  },
  {
    "type": "post",
    "url": "/skill",
    "title": "Create Skill",
    "description": "<p>Create a new Skill.</p>",
    "name": "CreateSkill",
    "group": "Skill",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory Skill Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Mandatory Skill value.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Skill description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory skill type (main or extra).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>Skill Icon URL.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>key value pairs of data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : {\n  \t        name                : 'Javascript',\n  \t        value               : '8',\n            type                : 'main',\n            iconUrl             : 'http://.....'\n        },\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/skill.js",
    "groupTitle": "Skill"
  },
  {
    "type": "delete",
    "url": "/skill/:id",
    "title": "Delete Skill",
    "description": "<p>Delete a specific Skill by Id.</p>",
    "name": "DeleteSkill",
    "group": "Skill",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if delete successfully.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>True if delete successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : true,\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/skill.js",
    "groupTitle": "Skill"
  },
  {
    "type": "get",
    "url": "/skill/:id",
    "title": "Get Skill",
    "description": "<p>Get a specific Skill by Id.</p>",
    "name": "GetSkillById",
    "group": "Skill",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Objects of key value pair</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Skill Name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.value",
            "description": "<p>Skill value.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.description",
            "description": "<p>Skill description.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.type",
            "description": "<p>Skill type (main or extra).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.iconUrl",
            "description": "<p>Skill Icon URL.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Get\n{\n  \tstatus : true,\n  \tresponse : {\n  \t        name                : 'Javascript',\n  \t        value               : '8',\n            type                : 'main',\n            iconUrl             : 'http://.....'\n        },\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/skill.js",
    "groupTitle": "Skill"
  },
  {
    "type": "get",
    "url": "/skill",
    "title": "Get all Skills",
    "description": "<p>Get all Skills.</p>",
    "name": "GetSkills",
    "group": "Skill",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "response",
            "description": "<p>Objects of array</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Skill Name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.value",
            "description": "<p>Skill value.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.description",
            "description": "<p>Skill description.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.type",
            "description": "<p>Skill type (main or extra).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.iconUrl",
            "description": "<p>Skill Icon URL.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Get\n{\n  \tstatus : true,\n  \tresponse : [{\n  \t        name                : 'Javascript',\n  \t        value               : '8',\n            type                : 'main',\n            iconUrl             : 'http://.....'\n        }],\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/skill.js",
    "groupTitle": "Skill"
  },
  {
    "type": "put",
    "url": "/skill/:id",
    "title": "Update Skill",
    "description": "<p>Update a specific Skill by Id.</p>",
    "name": "UpdateSkill",
    "group": "Skill",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Skill Name. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Skill value. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Skill description. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>skill type (main or extra). (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>Skill Icon URL. (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if update successfully.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>True if update successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : true,\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occurred.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/skill.js",
    "groupTitle": "Skill"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create User",
    "description": "<p>Create a new User.</p>",
    "name": "CreateUser",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Mandatory First Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Mandatory Last Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory Email Address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Mandatory avatar picture URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Info web Url (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skypeId",
            "description": "<p>Skype Id (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "socialNetworkURL",
            "description": "<p>Social profile URL (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description/bio (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>Super User if yes or not.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>key value pairs of data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : {\n  \t        firstName            : 'John',\n  \t        lastName             : 'Mac',\n            email                : 'john@email.com',\n            password             : *****,\n            avatar_url           : 'http://.....'\n        },\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete User",
    "description": "<p>Delete a specific User by Id.</p>",
    "name": "DeleteUser",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if delete successfully.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>True if delete successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : true,\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get All Users",
    "description": "<p>Get All Users.</p>",
    "name": "GetUser",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "response",
            "description": "<p>Objects of array</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.firstName",
            "description": "<p>First Name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.lastName",
            "description": "<p>Last Name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>Email Address.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.avatar_url",
            "description": "<p>Avatar picture URL.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.url",
            "description": "<p>Info web Url (Optional).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.skypeId",
            "description": "<p>Skype Id (Optional).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.socialNetworkURL",
            "description": "<p>Social profile URL (Optional).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.description",
            "description": "<p>Description/bio (Optional).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.address",
            "description": "<p>Address (Optional).</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "response.isAdmin",
            "description": "<p>Super User if yes or not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Get\n{\n  \tstatus : true,\n  \tresponse : [{\n  \t        firstName            : 'John',\n  \t        lastName             : 'Mac',\n            email                : 'john@email.com',\n            avatar_url           : 'http://.....'\n            ....\n    }],\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User",
    "description": "<p>Get a specific User by Id.</p>",
    "name": "GetUserById",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if returning data.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>key value pairs</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.firstName",
            "description": "<p>First Name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.lastName",
            "description": "<p>Last Name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>Email Address.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.avatar_url",
            "description": "<p>Avatar picture URL.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.url",
            "description": "<p>Info web Url (Optional).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.skypeId",
            "description": "<p>Skype Id (Optional).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.socialNetworkURL",
            "description": "<p>Social profile URL (Optional).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.description",
            "description": "<p>Description/bio (Optional).</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response.address",
            "description": "<p>Address (Optional).</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "response.isAdmin",
            "description": "<p>Super User if yes or not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Get\n{\n  \tstatus : true,\n  \tresponse : {\n  \t        firstName            : 'John',\n  \t        lastName             : 'Mac',\n            email                : 'john@email.com',\n            avatar_url           : 'http://.....'\n            ....\n    },\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terrors : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login User",
    "description": "<p>Login a User.</p>",
    "name": "LoginUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory Email Address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if authentication success full.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>authentication token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : jhdskjfhlsjkflksjdfs.... ,\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update User",
    "description": "<p>Update a specific User by Id.</p>",
    "name": "UpdateUser",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User unique access key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>avatar picture URL (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Info web Url (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skypeId",
            "description": "<p>Skype Id (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "socialNetworkURL",
            "description": "<p>Social profile URL (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description/bio (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>Super User if yes or not (Optional).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True if update successfully.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>True if update successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Created\n{\n  \tstatus : true,\n  \tresponse : true,\n        error : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>False if error occured.</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \tstatus : false,\n      \tresponse : null,\n\t\t \terror : 'e.g. : Required fields missing',\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.js",
    "groupTitle": "User"
  }
] });
