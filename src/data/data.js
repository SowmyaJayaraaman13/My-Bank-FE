import React from "react";
export const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "AGE", uid: "age", sortable: true},
  {name: "ROLE", uid: "role", sortable: true},
  {name: "TEAM", uid: "team"},
  {name: "EMAIL", uid: "email"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

export const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

export const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    role: "P. Manager",
    team: "Management",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "brian.kim@example.com",
    status: "active",
  },
  {
    id: 7,
    name: "Michael Hunt",
    role: "Designer",
    team: "Design",
    status: "paused",
    age: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    role: "HR Manager",
    team: "HR",
    status: "active",
    age: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    role: "F. Manager",
    team: "Finance",
    status: "vacation",
    age: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    role: "Ops Manager",
    team: "Operations",
    status: "active",
    age: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    role: "Jr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    role: "P. Manager",
    team: "Product",
    status: "paused",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    role: "S. Manager",
    team: "Security",
    status: "active",
    age: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    role: "M. Specialist",
    team: "Marketing",
    status: "active",
    age: "30",
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    role: "IT Specialist",
    team: "I. Technology",
    status: "paused",
    age: "31",
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    role: "Manager",
    team: "Sales",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    role: "Data Analyst",
    team: "Analysis",
    status: "active",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=33",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    role: "QA Analyst",
    team: "Testing",
    status: "active",
    age: "27",
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    role: "Administrator",
    team: "Information Technology",
    status: "paused",
    age: "32",
    avatar: "https://i.pravatar.cc/150?img=50",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    role: "Coordinator",
    team: "Operations",
    status: "active",
    age: "26",
    avatar: "https://i.pravatar.cc/150?img=45",
    email: "mia.robinson@example.com",
  },
];

export const transactions = [
  {
    "description": "Coffee Shop Visit",
    "transactionId": "TXN100000001",
    "category": "Dining",
    "cardNumber": "**** **** **** 1111",
    "date": "2024-09-01",
    "amount": '₹5.75',
    "type": "debit"
  },
  {
    "description": "Bookstore Purchase",
    "transactionId": "TXN100000002",
    "category": "Books",
    "cardNumber": "**** **** **** 2222",
    "date": "2024-09-02",
    "amount": '₹21.50',
    "type": "debit"
  },
  {
    "description": "Monthly Gym Membership Fee",
    "transactionId": "TXN100000003",
    "category": "Fitness",
    "cardNumber": "**** **** **** 3333",
    "date": "2024-09-03",
    "amount": '₹49.99',
    "type": "credit"
  },
  {
    "description": "Online Course Payment",
    "transactionId": "TXN100000004",
    "category": "Education",
    "cardNumber": "**** **** **** 4444",
    "date": "2024-09-04",
    "amount": '₹150.00',
    "type": "credit"
  },
  {
    "description": "Supermarket Grocery Shopping",
    "transactionId": "TXN100000005",
    "category": "Groceries",
    "cardNumber": "**** **** **** 5555",
    "date": "2024-09-05",
    "amount": '₹92.30',
    "type": "debit"
  },
  {
    "description": "Fuel at Gas Station",
    "transactionId": "TXN100000006",
    "category": "Fuel",
    "cardNumber": "**** **** **** 6666",
    "date": "2024-09-06",
    "amount": '₹38.75',
    "type": "debit"
  },
  {
    "description": "Dining Out",
    "transactionId": "TXN100000007",
    "category": "Dining",
    "cardNumber": "**** **** **** 7777",
    "date": "2024-09-07",
    "amount": '₹67.40',
    "type": "credit"
  },
  {
    "description": "Movie Tickets Purchase",
    "transactionId": "TXN100000008",
    "category": "Entertainment",
    "cardNumber": "**** **** **** 8888",
    "date": "2024-09-08",
    "amount": '₹25.00',
    "type": "debit"
  },
  {
    "description": "Online Shopping Purchase",
    "transactionId": "TXN100000009",
    "category": "Shopping",
    "cardNumber": "**** **** **** 9999",
    "date": "2024-09-09",
    "amount": '₹124.75',
    "type": "credit"
  },
  {
    "description": "Monthly Subscription Fee",
    "transactionId": "TXN100000010",
    "category": "Subscriptions",
    "cardNumber": "**** **** **** 0000",
    "date": "2024-09-10",
    "amount": '₹12.99',
    "type": "debit"
  },
  {
    "description": "Furniture Purchase",
    "transactionId": "TXN100000011",
    "category": "Furniture",
    "cardNumber": "**** **** **** 1112",
    "date": "2024-09-11",
    "amount": '₹349.00',
    "type": "credit"
  },
  {
    "description": "Pharmacy Purchase",
    "transactionId": "TXN100000012",
    "category": "Health",
    "cardNumber": "**** **** **** 2223",
    "date": "2024-09-12",
    "amount": '₹18.60',
    "type": "debit"
  },
  {
    "description": "Concert Ticket Purchase",
    "transactionId": "TXN100000013",
    "category": "Entertainment",
    "cardNumber": "**** **** **** 3334",
    "date": "2024-09-13",
    "amount": '₹85.00',
    "type": "credit"
  },
  {
    "description": "Car Service Payment",
    "transactionId": "TXN100000014",
    "category": "Automotive",
    "cardNumber": "**** **** **** 4445",
    "date": "2024-09-14",
    "amount": '₹230.00',
    "type": "debit"
  },
  {
    "description": "Streaming Service Subscription",
    "transactionId": "TXN100000015",
    "category": "Subscriptions",
    "cardNumber": "**** **** **** 5556",
    "date": "2024-09-15",
    "amount": '₹9.99',
    "type": "credit"
  },
  {
    "description": "Utility Bill Payment",
    "transactionId": "TXN100000016",
    "category": "Utilities",
    "cardNumber": "**** **** **** 6667",
    "date": "2024-09-16",
    "amount": '₹120.00',
    "type": "debit"
  },
  {
    "description": "Clothing Store Purchase",
    "transactionId": "TXN100000017",
    "category": "Shopping",
    "cardNumber": "**** **** **** 7778",
    "date": "2024-09-17",
    "amount": '₹75.40',
    "type": "credit"
  },
  {
    "description": "Airport Parking Fee",
    "transactionId": "TXN100000018",
    "category": "Travel",
    "cardNumber": "**** **** **** 8889",
    "date": "2024-09-18",
    "amount": '₹22.00',
    "type": "debit"
  },
  {
    "description": "Medical Checkup Fee",
    "transactionId": "TXN100000019",
    "category": "Health",
    "cardNumber": "**** **** **** 9990",
    "date": "2024-09-19",
    "amount": '₹150.00',
    "type": "credit"
  },
  {
    "description": "Electricity Bill Payment",
    "transactionId": "TXN100000020",
    "category": "Utilities",
    "cardNumber": "**** **** **** 0001",
    "date": "2024-09-20",
    "amount": '₹75.00',
    "type": "debit"
  },
  {
    "description": "Pet Supplies Purchase",
    "transactionId": "TXN100000021",
    "category": "Pets",
    "cardNumber": "**** **** **** 1113",
    "date": "2024-09-21",
    "amount": '₹35.50',
    "type": "credit"
  },
  {
    "description": "Home Improvement Supplies",
    "transactionId": "TXN100000022",
    "category": "Home",
    "cardNumber": "**** **** **** 2224",
    "date": "2024-09-22",
    "amount": '₹200.00',
    "type": "debit"
  },
  {
    "description": "Bookstore Purchase",
    "transactionId": "TXN100000023",
    "category": "Books",
    "cardNumber": "**** **** **** 3335",
    "date": "2024-09-23",
    "amount": '₹42.60',
    "type": "credit"
  },
  {
    "description": "Gift Shop Purchase",
    "transactionId": "TXN100000024",
    "category": "Gifts",
    "cardNumber": "**** **** **** 4446",
    "date": "2024-09-24",
    "amount": '₹19.75',
    "type": "debit"
  },
  {
    "description": "Coffee Shop Visit",
    "transactionId": "TXN100000025",
    "category": "Dining",
    "cardNumber": "**** **** **** 5557",
    "date": "2024-09-25",
    "amount": '₹7.50',
    "type": "debit"
  },
  {
    "description": "Monthly Streaming Subscription",
    "transactionId": "TXN100000026",
    "category": "Subscriptions",
    "cardNumber": "**** **** **** 6668",
    "date": "2024-09-26",
    "amount": '₹11.99',
    "type": "credit"
  },
  {
    "description": "Fitness Class Payment",
    "transactionId": "TXN100000027",
    "category": "Fitness",
    "cardNumber": "**** **** **** 7779",
    "date": "2024-09-27",
    "amount": '₹35.00',
    "type": "debit"
  },
  {
    "description": "Online Store Purchase",
    "transactionId": "TXN100000028",
    "category": "Shopping",
    "cardNumber": "**** **** **** 8880",
    "date": "2024-09-28",
    "amount": '₹65.90',
    "type": "credit"
  },
  {
    "description": "Health Insurance Payment",
    "transactionId": "TXN100000029",
    "category": "Insurance",
    "cardNumber": "**** **** **** 9991",
    "date": "2024-09-29",
    "amount": '₹200.00',
    "type": "debit"
  },
  {
    "description": "Bookstore Gift Card",
    "transactionId": "TXN100000030",
    "category": "Gifts",
    "cardNumber": "**** **** **** 0002",
    "date": "2024-09-30",
    "amount": '₹50.00',
    "type": "credit"
  }
]

export const financeCategories = [
  {
    name: "Investments",
    icon: "💼",
    description: "Manage your investments including stocks, bonds, and mutual funds to grow your wealth over time."
  },
  {
    name: "Budgeting",
    icon: "💰",
    description: "Track your income and expenses, set monthly budgets, and stay on top of your financial goals."
  },
  {
    name: "Savings",
    icon: "🏦",
    description: "Save money for short-term and long-term goals, including emergency funds, travel, and retirement."
  },
  {
    name: "Loans",
    icon: "📉",
    description: "View and manage your loans, including personal loans, mortgages, and student loans, and track repayments."
  },
  {
    name: "Expenses",
    icon: "💸",
    description: "Track your daily, weekly, and monthly expenses to identify patterns and optimize spending."
  },
  {
    name: "Credit Scores",
    icon: "📊",
    description: "Monitor your credit score, view your credit report, and get tips for improving your credit health."
  },
  {
    name: "Retirement Planning",
    icon: "🏖️",
    description: "Plan for your future with retirement accounts, projections, and advice on how to save for retirement."
  },
  {
    name: "Tax Management",
    icon: "🧾",
    description: "Track your tax deductions, file returns, and get tips on how to optimize your tax situation."
  },
  {
    name: "Insurance",
    icon: "🛡️",
    description: "Manage your insurance policies, including health, auto, life, and home insurance, to ensure proper coverage."
  },
  {
    name: "Currency Exchange",
    icon: "💱",
    description: "Track live currency exchange rates and convert money between different currencies for travel or investments."
  }
];


