/* eslint-disable */
import moment from 'moment';

export const labels = [
    {
        id: '7dc11344-3507-48e0-83d6-1c047107f052',
        title: '1. ročník',
    },
    {
        id: '8dc11344-3507-48e0-83d6-1c047107f052',
        title: '2. ročník',
    },
    {
        id: '9dc11344-3507-48e0-83d6-1c047107f052',
        title: '3. ročník',
    },
    {
        id: '0dc11344-3507-48e0-83d6-1c047107f052',
        title: '4. ročník',
    },
    {
        id: 'f47c92e5-20b9-44d9-917f-9ff4ad25dfd0',
        title: 'Mat',
    },
    {
        id: 'e2f749f5-41ed-49d0-a92a-1c83d879e371',
        title: 'Sjl',
    },
    {
        id: 'b1cde9ee-e54d-4142-ad8b-cf55dafc9528',
        title: 'Anj',
    },
    {
        id: '6c288794-47eb-4605-8bdf-785b61a449d3',
        title: 'Bio',
    },
    {
        id: 'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
        title: 'Fyz',
    },
    {
        id: '2dc11344-3507-48e0-83d6-1c047107f052',
        title: 'Chem',
    },
];

export const notes = [
    {
        id: '8f011ac5-b71c-4cd7-a317-857dcd7d85e0',
        title: '',
        content: 'ATP-membrany',
        tasks: null,
        image: 'assets/images/upload/bio2.jpg',
        pfp: 'assets/images/avatars/female-08.jpg',
        reminder: null,
        price: '200',
        labels: ['6c288794-47eb-4605-8bdf-785b61a449d3'],
        archived: true,
        user_view: false,
        createdAt: moment()
            .hour(10)
            .minute(19)
            .subtract(98, 'day')
            .toISOString(),
        updatedAt: null,
        likes: 2,
        dislikes: 3,
    },
    {
        id: 'ced0a1ce-051d-41a3-b080-e2161e4ae621',
        title: '',
        content: 'Latkovy a energeticky metabolizmus',
        tasks: null,
        image: 'assets/images/upload/bio3.jpg',
        pfp: 'assets/images/avatars/female-05.jpg',
        reminder: null,
        price: '400',
        labels: ['6c288794-47eb-4605-8bdf-785b61a449d3'],
        archived: true,
        user_view: false,
        createdAt: moment()
            .hour(15)
            .minute(37)
            .subtract(80, 'day')
            .toISOString(),
        updatedAt: null,
        likes: '20',
        dislikes: '4',
    },
    {
        id: 'd3ac02a9-86e4-4187-bbd7-2c965518b3a3',
        title: '',
        content: 'Metabolizmus',
        tasks: null,
        pfp: 'assets/images/avatars/male-08.jpg',
        image: 'assets/images/upload/bio.jpg',
        reminder: null,
        price: '100',
        labels: ['6c288794-47eb-4605-8bdf-785b61a449d3'],
        archived: true,
        user_view: false,
        createdAt: moment()
            .hour(19)
            .minute(27)
            .subtract(74, 'day')
            .toISOString(),
        updatedAt: moment()
            .hour(15)
            .minute(36)
            .subtract(50, 'day')
            .toISOString(),
        likes: '4',
        dislikes: '0',
    },
    {
        id: '89861bd4-0144-4bb4-8b39-332ca10371d5',
        title: '',
        content: 'Sylabicky vers',
        tasks: null,
        pfp: 'assets/images/avatars/female-06.jpg',
        image: 'assets/images/upload/sjl.JPG',
        reminder: moment().hour(12).minute(34).add(50, 'day').toISOString(),
        price: '500',
        labels: ['bbc73458-940b-421c-8d5f-8dcd23a9b0d6'],
        archived: true,
        user_view: false,
        createdAt: moment()
            .hour(12)
            .minute(34)
            .subtract(59, 'day')
            .toISOString(),
        updatedAt: null,
        likes: '9',
        dislikes: '1',
    },

    {
        id: 'd46dee8b-8761-4b6d-a1df-449d6e6feb6a',
        title: '',
        content: 'y/i',
        tasks: null,
        pfp: 'assets/images/avatars/male-10.jpg',
        image: 'assets/images/upload/diktat.JPG',
        reminder: moment()
            .hour(14)
            .minute(56)
            .subtract(25, 'day')
            .toISOString(),
        price: '200',
        labels: ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived: true,
        user_view: false,
        createdAt: moment()
            .hour(14)
            .minute(56)
            .subtract(20, 'day')
            .toISOString(),
        updatedAt: null,
        likes: '2',
        dislikes: '4',
    },
    {
        id: '6bc9f002-1675-417c-93c4-308fba39023e',
        title: '',
        content: 'Pasivny transport',
        tasks: null,
        pfp: 'assets/images/avatars/female-10.jpg',
        image: 'assets/images/upload/bio5.jpg',
        reminder: null,
        price: '250',
        labels: ['6c288794-47eb-4605-8bdf-785b61a449d3'],
        archived: true,
        user_view: false,
        createdAt: moment()
            .hour(9)
            .minute(32)
            .subtract(15, 'day')
            .toISOString(),
        updatedAt: moment()
            .hour(17)
            .minute(6)
            .subtract(12, 'day')
            .toISOString(),
        likes: '40',
        dislikes: '3',
    },
    {
        id: '15188348-78aa-4ed6-b5c2-028a214ba987',
        title: '',
        content: 'Vypocet obvodu',
        tasks: null,
        pfp: 'assets/images/avatars/male-11.jpg',
        image: 'assets/images/upload/mat.jpg',
        reminder: null,
        price: '900',
        labels: ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived: true,
        user_view: false,
        createdAt: moment()
            .hour(20)
            .minute(5)
            .subtract(12, 'day')
            .toISOString(),
        updatedAt: null,
        likes: '22',
        dislikes: '12',
    },
    {
        id: '89861bd4-0144-4bb4-8b39-332ca10371d5',
        title: '',
        content: 'Kelistaticky feran',
        tasks: null,
        pfp: 'assets/images/avatars/male-13.jpg',
        image: 'assets/images/upload/ch2.jpg',
        reminder: moment().hour(12).minute(34).add(50, 'day').toISOString(),
        labels: ['bbc73458-940b-421c-8d5f-8dcd23a9b0d6'],
        archived: true,
        user_view: false,
        price: '450',
        createdAt: moment()
            .hour(12)
            .minute(34)
            .subtract(59, 'day')
            .toISOString(),
        updatedAt: null,
    },
    {
        id: '8b7ac1940-08ae-4adc-9164-1eba02f710b0',
        title: '',
        content: 'Precvicovanie',
        tasks: null,
        pfp: 'assets/images/avatars/female-12.jpg',
        image: 'assets/images/upload/sjl.JPG',
        reminder: moment().hour(12).minute(34).add(50, 'day').toISOString(),
        price: '670',
        labels: ['bbc73458-940b-421c-8d5f-8dcd23a9b0d6'],
        archived: true,
        user_view: false,
        createdAt: moment()
            .hour(12)
            .minute(34)
            .subtract(59, 'day')
            .toISOString(),
        updatedAt: null,
    },
    {
        id: '546305f7-f8c6-4a24-80f7-69f8f0ba677a',
        title: '',
        content: 'Korozia',
        tasks: null,
        pfp: 'assets/images/avatars/female-15.jpg',
        image: 'assets/images/upload/ch2.jpg',
        reminder: moment().hour(12).minute(34).add(50, 'day').toISOString(),
        price: '200',
        labels: ['bbc73458-940b-421c-8d5f-8dcd23a9b0d6'],
        archived: true,
        user_view: false,
        createdAt: moment()
            .hour(12)
            .minute(34)
            .subtract(59, 'day')
            .toISOString(),
        updatedAt: null,
    },

    {
        id: '5109cd27-702a-412c-867f-407b23996473',
        title: '',
        content: 'ozomovy proces',
        tasks: null,
        pfp: 'assets/images/avatars/male-16.jpg',
        image: 'assets/images/upload/ch3.jpg',
        reminder: moment().hour(13).minute(43).subtract(2, 'day').toISOString(),
        labels: ['bbc73458-940b-421c-8d5f-8dcd23a9b0d6'],
        archived: true,
        user_view: false,
        price: '430',
        createdAt: moment()
            .hour(13)
            .minute(43)
            .subtract(7, 'day')
            .toISOString(),
        updatedAt: null,
    },
    {
        id: '49548409-90a3-44d4-9a9a-f5af75aa9a66',
        title: '',
        content: 'Elektro chem. rad kovy',
        tasks: null,
        pfp: 'assets/images/avatars/male-18.jpg',
        image: 'assets/images/upload/ch.jpg',
        reminder: null,
        price: '200',
        labels: ['6c288794-47eb-4605-8bdf-785b61a449d3'],
        archived: true,
        user_view: false,
        createdAt: moment().hour(7).minute(12).subtract(2, 'day').toISOString(),
        updatedAt: null,
    },
    {
        id: 'baee3657-ae2a-4219-99c4-9485adbb8842',
        title: '',
        content: 'Poznamky z Inf Algoritmy',
        tasks: null,
        pfp: 'assets/images/avatars/male-15.jpg',
        image: 'assets/images/upload/ch2.jpg',
        reminder: null,
        price: '200',
        labels: [
            'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
            '8dc11344-3507-48e0-83d6-1c047107f052',
        ],
        archived: false,
        createdAt: moment()
            .hour(17)
            .minute(14)
            .subtract(100, 'day')
            .toISOString(),
        updatedAt: null,
        user_view: false,
    },
    {
        id: 'c6d3a35-500d-4491-a3f3-6ca05d6632d3',
        title: '',
        content: 'Chemia o S1 prvkoch',
        tasks: null,
        pfp: 'assets/images/avatars/male-15.jpg',
        image: 'assets/images/upload/ch.jpg',
        reminder: null,
        price: '200',
        labels: [
            'e2f749f5-41ed-49d0-a92a-1c83d879e371',
            '8dc11344-3507-48e0-83d6-1c047107f052',
        ],
        archived: false,
        createdAt: moment()
            .hour(10)
            .minute(29)
            .subtract(85, 'day')
            .toISOString(),
        updatedAt: null,
        user_view: false,
    },
    {
        id: '46214383-f8e7-44da-aa2e-0b685e05027',
        title: '',
        content: 'Galvanicke Clanky',
        tasks: null,
        pfp: 'assets/images/avatars/male-15.jpg',
        image: 'assets/images/upload/ch3.jpg',
        reminder: null,
        price: '200',
        labels: [
            'e2f749f5-41ed-49d0-a92a-1c83d879e371',

            '8dc11344-3507-48e0-83d6-1c047107f052',
        ],
        archived: false,
        createdAt: moment()
            .hour(15)
            .minute(30)
            .subtract(69, 'day')
            .toISOString(),
        updatedAt: null,
        user_view: false,
    },
];
