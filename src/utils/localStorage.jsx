

const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": "active:2",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Complete Quarterly Report",
        "taskDescription": "Prepare and submit the quarterly financial report to the management team.",
        "taskDate": "2024-11-25",
        "category": "Reporting"
      },
      {
        "taskNumber": "active:2",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Website Content",
        "taskDescription": "Update the homepage with new product listings and descriptions.",
        "taskDate": "2024-11-18",
        "category": "Marketing"
      },
      {
        "taskNumber": "active:2",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Conduct Team Meeting",
        "taskDescription": "Organize a meeting to discuss the project progress and any blockers.",
        "taskDate": "2024-11-22",
        "category": "Management"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": "active:2",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Follow-Up Call",
        "taskDescription": "Call the client to check on their satisfaction with the latest service.",
        "taskDate": "2024-11-21",
        "category": "Client Relations"
      },
      {
        "taskNumber": "completed:1",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "System Update Installation",
        "taskDescription": "Install the latest system updates on all office computers.",
        "taskDate": "2024-11-15",
        "category": "IT Support"
      },
      {
        "taskNumber": "active:2",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Monthly Sales Report",
        "taskDescription": "Compile the sales data for the past month and prepare a report for the team.",
        "taskDate": "2024-11-30",
        "category": "Sales"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "taskNumber": "active:2",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Marketing Materials",
        "taskDescription": "Create promotional materials for the upcoming product launch.",
        "taskDate": "2024-11-23",
        "category": "Marketing"
      },
      {
        "taskNumber": "failed:1",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Server Issue",
        "taskDescription": "Investigate and resolve the server downtime issue.",
        "taskDate": "2024-11-19",
        "category": "IT Support"
      },
      {
        "taskNumber": "active:2",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Social Media Strategy",
        "taskDescription": "Create a strategy for promoting the company’s new service on social media.",
        "taskDate": "2024-11-28",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Anjali",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": "active:1",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Blog Post",
        "taskDescription": "Write a blog post about the benefits of using the company’s services.",
        "taskDate": "2024-11-26",
        "category": "Content Creation"
      },
      {
        "taskNumber": "active:1",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Attend Conference",
        "taskDescription": "Attend the industry conference to network and learn about new trends.",
        "taskDate": "2024-11-20",
        "category": "Professional Development"
      },
      {
        "taskNumber": "completed:1",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Optimize SEO",
        "taskDescription": "Optimize the website for search engines by adjusting keywords and metadata.",
        "taskDate": "2024-11-12",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Kavya",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskNumber": "active:2",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Review New Product Ideas",
        "taskDescription": "Review and provide feedback on the new product ideas for the next launch.",
        "taskDate": "2024-11-24",
        "category": "Product Development"
      },
      {
        "taskNumber": "completed:1",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Customer Database",
        "taskDescription": "Update the customer database with the latest contact information.",
        "taskDate": "2024-11-10",
        "category": "Admin"
      },
      {
        "taskNumber": "failed:1",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Develop New Feature",
        "taskDescription": "Develop and implement a new feature for the mobile app.",
        "taskDate": "2024-11-19",
        "category": "Product Development"
      }
    ]
  }
];

  
  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];
  
export const setLocalStorage =()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees =  JSON.parse(localStorage.getItem('employees'))
  const admin =  JSON.parse(localStorage.getItem('admin'))
    return{employees,admin}
}