// тестовые данные в виде массивов (заменяют таблицы БД)

import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Work'},
    {id: 2, title: 'Family'},
    {id: 3, title: 'Studies'},
    {id: 4, title: 'Entertainment'},
    {id: 5, title: 'Health'},
    {id: 6, title: 'Finance'},
    {id: 7, title: 'Car'},
    {id: 8, title: 'Home'},
  ];


  static priorities: Priority[] = [
    {id: 1, title: 'Low', color: '#e5e5e5'},
    {id: 2, title: 'Medium', color: '#85D1B2'},
    {id: 3, title: 'High', color: '#F1828D'},
    {id: 4, title: 'Urgent', color: '#F1128D'}
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Fill the car',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6],
      date: new Date('2022-04-10')
    },

    {
      id: 2,
      title: 'Send reports to Team Leader',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2022-04-11')
    },

    {
      id: 3,
      title: 'Clean up the room',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[7]
    },

    {
      id: 4,
      title: 'Friday party with the friends',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[3],
      date: new Date('2022-08-17')
    },

    {
      id: 5,
      title: 'Find and explore new book about network',
      completed: false,
      category: TestData.categories[2]
    },

    {
      id: 6,
      title: 'Visit programming course',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2022-06-11')
    },

    {
      id: 7,
      title: 'Buy tickets to Amsterdam',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },

    {
      id: 8,
      title: 'Cook dinner',
      completed: false,
      category: TestData.categories[7]
    },

    {
      id: 9,
      title: 'Workout in the gym',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2022-03-12')
    },

    {
      id: 10,
      title: 'Workout outside',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4]
    },

    {
      id: 11,
      title: 'Take java course',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2]
    },

    {
      id: 12,
      title: 'Shop for groceries',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2022-05-11')
    },

    {
      id: 13,
      title: 'Join online team meeting',
      completed: true,
      category: TestData.categories[0]
    },

    {
      id: 14,
      title: 'Take Java exam',
      priority: TestData.priorities[2],
      completed: true
    },

    {
      id: 15,
      title: 'Buy VMware shares for 100$',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[5]
    },

    {
      id: 16,
      title: 'Complete annual fire safety training ',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[0]
    },

    {
      id: 17,
      title: 'Annual medical tests',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2022-12-11')
    },

    {
      id: 18,
      title: 'Get together for football with colleagues',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[3],
      date: new Date('2023-03-17')
    }

  ];

}

