// brands
import microsoft from "../../../images/brands/microsoft.png";
import dribbble from "../../../images/brands/dribbble.png";
import mail_chimp from "../../../images/brands/mail_chimp.png";
import github from "../../../images/brands/github.png";

// cmpany imgs
import cImg1 from "../../../images/companies/img-1.png";
import cImg2 from "../../../images/companies/img-2.png";
import cImg3 from "../../../images/companies/img-3.png";
import cImg5 from "../../../images/companies/img-5.png";
import cImg6 from "../../../images/companies/img-6.png";
import cImg7 from "../../../images/companies/img-7.png";

// avatar imgs
import avatar1 from "../../../images/users/avatar-1.jpg";
import avatar3 from "../../../images/users/avatar-3.jpg";
import avatar4 from "../../../images/users/avatar-4.jpg";
import avatar5 from "../../../images/users/avatar-5.jpg";
import avatar6 from "../../../images/users/avatar-6.jpg";
import avatar7 from "../../../images/users/avatar-7.jpg";
import avatar8 from "../../../images/users/avatar-8.jpg";
import avatar9 from "../../../images/users/avatar-9.jpg";
import avatar10 from "../../../images/users/avatar-10.jpg";

// property
import rImg1 from "../../../images/real-estate/img-01.jpg";
import rImg2 from "../../../images/real-estate/img-02.jpg";
import rImg3 from "../../../images/real-estate/img-03.jpg";
import rImg4 from "../../../images/real-estate/img-04.jpg";
import rImg5 from "../../../images/real-estate/img-05.jpg";
import rImg6 from "../../../images/real-estate/img-06.jpg";
import rImg8 from "../../../images/real-estate/img-08.jpg";

const agenciesList = [
    {
        id: 1,
        since: "2013",
        img: microsoft,
        img_alt: "microsoft.png",
        name: "Microsoft",
        location: "Brasília, Brazil",
        property: "7620",
        employee: "36",
        email: "microsoft@steex.com",
        contact: "(33) 3521-6761"
    }, {
        id: 2,
        since: "2001",
        img: mail_chimp,
        img_alt: "mail_chimp.png",
        name: "Mail Chimp",
        location: "California, USA",
        property: "1095",
        employee: "10",
        email: "mail_chimp@steex.com",
        contact: "(53) 3035-3100"
    }, {
        id: 3,
        since: "1998",
        img: cImg5,
        img_alt: "img-5.png",
        name: "Themesbrand",
        location: "Sobrado, Spain",
        property: "953",
        employee: "17",
        email: "themesbrand@steex.com",
        contact: "(21) 2345-6789"
    }, {
        id: 4,
        since: "1983",
        img: cImg7,
        img_alt: "img-7.png",
        name: "Pich Hub",
        location: "San Luis Potosi, Mexico",
        property: "3248",
        employee: "50",
        email: "pichhub@steex.com",
        contact: "(11) 3666-9716"
    }, {
        id: 5,
        since: "2009",
        img: cImg6,
        img_alt: "img-6.png",
        name: "Rotic Fashion",
        location: "Ibiza, Spain",
        property: "4985",
        employee: "55",
        email: "rotic@steex.com",
        contact: "(92) 3639-8685"
    }, {
        id: 6,
        since: "2012",
        img: cImg3,
        img_alt: "img-3.png",
        name: "Terry & Jerry",
        location: "Guarulhos, Brazil",
        property: "3214",
        employee: "64",
        email: "terry@steex.com",
        contact: "(11) 3885-1022"
    }, {
        id: 7,
        since: "2004",
        img: cImg2,
        img_alt: "img-2.png",
        name: "Brand Infosys",
        location: "California, USA",
        property: "1095",
        employee: "10",
        email: "brand_infosys@steex.com",
        contact: "(53) 3035-3100"
    }, {
        id: 8,
        since: "1996",
        img: cImg1,
        img_alt: "img-1.png",
        name: "Pich Fashion",
        location: "Natal, Brazil",
        property: "1258",
        employee: "37",
        email: "pichfashion@steex.com",
        contact: "(51) 3233-7909"
    }, {
        id: 9,
        since: "1994",
        img: dribbble,
        img_alt: "dribbble.png",
        name: "Dribbble",
        location: "Hamburg, Germany",
        property: "1023",
        employee: "49",
        email: "dribbble@steex.com",
        contact: "(27) 3041-1766"
    }, {
        id: 10,
        since: "1980",
        img: github,
        img_alt: "github.png",
        name: "GitHub",
        location: "Birmingham, United Kingdom",
        property: "954",
        employee: "32",
        email: "github@steex.com",
        contact: "(86) 9985-9220"
    }, {
        id: 11,
        since: "2009",
        img: cImg6,
        img_alt: "img-6.png",
        name: "Rotic Fashion",
        location: "Ibiza, Spain",
        property: "4985",
        employee: "55",
        email: "rotic@steex.com",
        contact: "(92) 3639-8685"
    }
];

// Agent

const agentGrid = [
    {
        id: 1,
        joining_date: "19 Nov, 2022",
        img: avatar1,
        img_alt: "avatar-1.jpg",
        name: "Dianna Bogan",
        property: "149",
        location: "Brasília, Brazil",
        email: "dianna@steex.com",
        contact: "(86) 9985-9220",
        status: "Active",
        isBadge: true
    }, {
        id: 2,
        joining_date: "25 Nov, 2022",
        img: avatar10,
        img_alt: "avatar-10.jpg",
        name: "Josefa Weissnat",
        property: "164",
        location: "California, USA",
        email: "josefaweissnat@steex.com",
        contact: "(53) 3035-3100",
        status: "Unactive",
        isBadge: false
    }, {
        id: 3,
        joining_date: "08 Dec, 2022",
        img: avatar9,
        img_alt: "avatar-9.jpg",
        name: "Ophelia Steuber",
        property: "279",
        location: "Sobrado, Spain",
        email: "opheliasteuber@steex.com",
        contact: "(21) 2345-6789",
        status: "Active",
        isBadge: false
    }, {
        id: 4,
        joining_date: "21 Dec, 2022",
        img: avatar8,
        img_alt: "avatar-8.jpg",
        name: "Federico Hand",
        property: "487",
        location: "San Luis Potosi, Mexico",
        email: "federico@steex.com",
        contact: "(11) 3666-9716",
        status: "Active",
        isBadge: false
    }, {
        id: 5,
        joining_date: "27 Jan, 2023",
        img: avatar7,
        img_alt: "avatar-7.jpg",
        name: "Uriel King",
        property: "369",
        location: "Ibiza, Spain",
        email: "urielking@steex.com",
        contact: "(92) 3639-8685",
        status: "Unactive",
        isBadge: true
    }, {
        id: 6,
        joining_date: "18 Feb, 2023",
        img: avatar6,
        img_alt: "avatar-6.jpg",
        name: "Buck Roberts",
        property: "495",
        location: "Guarulhos, Brazil",
        email: "buckroberts@steex.com",
        contact: "(11) 3885-1022",
        status: "Active",
        isBadge: false
    }, {
        id: 7,
        joining_date: "24 Feb, 2023",
        img: avatar5,
        img_alt: "avatar-5.jpg",
        name: "Xander Wyman",
        property: "85",
        location: "Logrono, Spain",
        email: "xander@steex.com",
        contact: "(48) 3877-9000",
        status: "Unactive",
        isBadge: true
    }, {
        id: 8,
        joining_date: "29 Feb, 2023",
        img: avatar4,
        img_alt: "avatar-4.jpg",
        name: "Donnell Schultz",
        property: "326",
        location: "Natal, Brazil",
        email: "donnell@steex.com",
        contact: "(51) 3233-7909",
        status: "Active",
        isBadge: false
    }, {
        id: 9,
        joining_date: "11 Mar, 2023",
        img: avatar3,
        img_alt: "avatar-3.jpg",
        name: "Jacinthe Will",
        property: "741",
        location: "Brasília, Brazil",
        email: "dianna@steex.com",
        contact: "(33) 3521-6761",
        status: "Active",
        isBadge: true
    }, {
        id: 10,
        joining_date: "15 Mar, 2023",
        img: avatar10,
        img_alt: "avatar-10.jpg",
        name: "Josefa Weissnat",
        property: "159",
        location: "California, USA",
        email: "josefaweissnat@steex.com",
        contact: "(53) 3035-3100",
        status: "Unactive",
        isBadge: false
    }, {
        id: 11,
        joining_date: "17 Mar, 2023",
        img: avatar6,
        img_alt: "avatar-6.jpg",
        name: "Buck Roberts",
        property: "149",
        location: "Guarulhos, Brazil",
        email: "buckroberts@steex.com",
        contact: "(11) 3885-1022",
        status: "Active",
        isBadge: false
    }
];

const agentList = [
    {
        id: 1,
        joining_date: "19 Nov, 2022",
        img: avatar1,
        img_alt: "avatar-1.jpg",
        name: "Dianna Bogan",
        property: "149",
        location: "Brasília, Brazil",
        email: "dianna@steex.com",
        contact: "(86) 9985-9220",
        status: "Active",
        new: true
    }, {
        id: 2,
        joining_date: "25 Nov, 2022",
        img: avatar10,
        img_alt: "avatar-10.jpg",
        name: "Josefa Weissnat",
        property: "164",
        location: "California, USA",
        "email": "josefaweissnat@steex.com",
        contact: "(53) 3035-3100",
        status: "Unactive",
        new: false
    }, {
        id: 3,
        joining_date: "08 Dec, 2022",
        img: avatar9,
        img_alt: "avatar-9.jpg",
        name: "Ophelia Steuber",
        property: "279",
        location: "Sobrado, Spain",
        email: "opheliasteuber@steex.com",
        contact: "(21) 2345-6789",
        status: "Active",
        new: false
    }, {
        id: 4,
        joining_date: "21 Dec, 2022",
        img: avatar8,
        img_alt: "avatar-8.jpg",
        name: "Federico Hand",
        property: "487",
        location: "San Luis Potosi, Mexico",
        email: "federico@steex.com",
        contact: "(11) 3666-9716",
        status: "Active",
        new: false
    }, {
        id: 5,
        joining_date: "27 Jan, 2023",
        img: avatar7,
        img_alt: "avatar-7.jpg",
        name: "Uriel King",
        property: "369",
        location: "Ibiza, Spain",
        email: "urielking@steex.com",
        contact: "(92) 3639-8685",
        status: "Unactive",
        new: true
    }, {
        id: 6,
        joining_date: "18 Feb, 2023",
        img: avatar6,
        img_alt: "avatar-6.jpg",
        name: "Buck Roberts",
        property: "495",
        location: "Guarulhos, Brazil",
        email: "buckroberts@steex.com",
        contact: "(11) 3885-1022",
        status: "Active",
        new: false
    }, {
        id: 7,
        joining_date: "24 Feb, 2023",
        img: avatar5,
        img_alt: "avatar-5.jpg",
        name: "Xander Wyman",
        property: "85",
        location: "Logrono, Spain",
        email: "xander@steex.com",
        contact: "(48) 3877-9000",
        status: "Unactive",
        new: true
    }, {
        id: 8,
        joining_date: "29 Feb, 2023",
        img: avatar4,
        img_alt: "avatar-4.jpg",
        name: "Donnell Schultz",
        property: "326",
        location: "Natal, Brazil",
        email: "donnell@steex.com",
        contact: "(51) 3233-7909",
        status: "Active",
        new: false
    }, {
        id: 9,
        joining_date: "11 Mar, 2023",
        img: avatar3,
        img_alt: "avatar-3.jpg",
        name: "Jacinthe Will",
        property: "741",
        location: "Brasília, Brazil",
        email: "dianna@steex.com",
        contact: "(33) 3521-6761",
        status: "Active",
        new: true
    }, {
        id: 10,
        joining_date: "15 Mar, 2023",
        img: avatar10,
        img_alt: "avatar-10.jpg",
        name: "Josefa Weissnat",
        property: "159",
        location: "California, USA",
        email: "josefaweissnat@steex.com",
        contact: "(53) 3035-3100",
        status: "Unactive",
        new: false
    }, {
        id: 11,
        joining_date: "17 Mar, 2023",
        img: avatar6,
        img_alt: "avatar-6.jpg",
        name: "Buck Roberts",
        property: "149",
        location: "Guarulhos, Brazil",
        email: "buckroberts@steex.com",
        contact: "(11) 3885-1022",
        status: "Active",
        new: false
    }
];

const earningData = [
    {
        id: 1,
        icon: 'ph ph-trend-up',
        transactionID: '147852369012',
        date: '14 Nov, 2022 ',
        timestamp: '12:38PM',
        details: 'Membership Fees',
        type: 'Debit',
        amount: '236.41',
        status: 'Pending',
        color: 'danger'
    },
    {
        id: 2,
        icon: 'ph ph-trend-down',
        transactionID: '147852363645',
        date: '02 Jan, 2023  ',
        timestamp: '11:22PM',
        details: 'British Pound Sterling Block',
        type: 'Credit',
        amount: '875.32',
        status: 'Successful',
        color: 'success'
    },
    {
        id: 3,
        icon: 'ph ph-trend-down',
        transactionID: '147852362451',
        date: '27 Jan, 2023  ',
        timestamp: '03:19AM',
        details: 'Fashion T-Shirts Purchase',
        type: '   Credit',
        amount: '214.00',
        status: 'Successful',
        color: 'success'
    }, {
        id: 4,
        icon: 'ph ph-trend-down',
        transactionID: '147852315960',
        date: '28 Jan, 2023 ',
        timestamp: '05:36AM',
        details: 'The Country House',
        type: 'Credit',
        amount: '1470.50',
        status: 'Pending',
        color: 'success'
    }
    , {
        id: 5,
        icon: 'ph ph-trend-up',
        transactionID: '147852319632',
        date: '01 Feb, 2023 ',
        timestamp: '07:19PM',
        details: 'Vintage Apartment',
        type: 'Debit',
        amount: '3526.00',
        status: 'Successful',
        color: 'danger'
    }
    , {
        id: 6,
        icon: 'ph ph-trend-up',
        transactionID: '147852310391',
        date: '04 Feb, 2023  ',
        timestamp: '07:19PM',
        details: 'Duplex Square Valley',
        type: 'Debit',
        amount: '215.00',
        status: 'Successful',
        color: 'danger'
    }
    , {
        id: 7,
        icon: 'ph ph-trend-down',
        transactionID: '147852310298',
        date: '22 Feb, 2023 ',
        timestamp: '07:19PM',
        details: 'Crystal House',
        type: 'Credit',
        amount: '678.00',
        status: 'Cancelled',
        color: 'success'
    }
    , {
        id: 8,
        icon: 'ph ph-trend-up',
        transactionID: '147852310341',
        date: '12 Dec, 2022 ',
        timestamp: '01:57PM',
        details: 'Swimming pool side of the residential Ascot home.',
        type: 'Debit',
        amount: '1024.00',
        status: 'Successful',
        color: 'danger'
    }
    , {
        id: 9,
        icon: 'ph ph-trend-down',
        transactionID: '147852310003',
        date: '19 Dec, 2022',
        timestamp: '10:33AM',
        details: 'Small house on an autumn’s day',
        type: '  Credit',
        amount: '1024.00',
        status: 'Pending',
        color: 'success'
    }, {
        id: 10,
        icon: 'ph ph-trend-down',
        transactionID: '147852310298',
        date: '22 Feb, 2023 ',
        timestamp: '07:19PM',
        details: 'Crystal House',
        type: ' Credit',
        amount: '678.00',
        status: 'Cancelled',
        color: 'success'
    }
];

const propertyGrid = [
    {
        id: 1,
        type: "Residency",
        title: "Duplex Square Valley",
        img: rImg5,
        img_alt: "img-05.jpg",
        location: "Distrito Federal, Brazil",
        bedroom: "3",
        bathroom: "2",
        area: "1039",
        rating: "4.4",
        price: "2579.31",
        isBookmark: false,
        agent: "Buck Roberts",
        requirement: "Rent"
    }, {
        id: 2,
        type: "Villa",
        title: "Whitepace Vintage Villa",
        img: rImg4,
        img_alt: "img-04.jpg",
        location: "Cantabria, Spain",
        bedroom: "4",
        bathroom: "2",
        area: "1754",
        rating: "4.9",
        price: "3495.76",
        isBookmark: true,
        agent: "Axel Kozey",
        requirement: "Sale"
    }, {
        id: 3,
        type: "Villa",
        title: "Crystal House",
        img: rImg6,
        img_alt: "img-06.jpg",
        location: "Guipuzcua, Spain",
        bedroom: "2",
        bathroom: "1",
        area: "1039",
        rating: "4.8",
        price: "1249.99",
        isBookmark: true,
        agent: "Uriel King",
        requirement: "Sale"
    }, {
        id: 4,
        type: "Apartment",
        title: "Small house on an autumn’s day",
        img: rImg8,
        img_alt: "img-08.jpg",
        location: "West Midland, United Kingdom",
        bedroom: "4",
        bathroom: "2",
        area: "1796",
        rating: "4.9",
        price: "3895.39",
        isBookmark: false,
        agent: "Josefa Weissnat",
        requirement: "Sale"
    }, {
        id: 5,
        type: "Villa",
        title: "Swimming pool side of the residential Ascot home.",
        img: rImg8,
        img_alt: "img-08.jpg",
        location: "Estado de Mexico, Mexico",
        bedroom: "4",
        bathroom: "2",
        area: "1145",
        rating: "4.5",
        price: "1452.39",
        isBookmark: true,
        agent: "Federico Hand",
        requirement: "Rent"
    }, {
        id: 6,
        type: "Villa",
        title: "Crystal House",
        img: rImg6,
        img_alt: "img-06.jpg",
        location: "Guipuzcua, Spain",
        bedroom: "2",
        bathroom: "1",
        area: "1039",
        rating: "4.8",
        price: "1249.99",
        isBookmark: false,
        agent: "Jerry Emard",
        requirement: "Rent"
    }, {
        id: 7,
        type: "Residency",
        title: "Duplex Square Valley",
        img: rImg5,
        img_alt: "img-05.jpg",
        location: "Distrito Federal, Brazil",
        bedroom: "3",
        bathroom: "2",
        area: "1039",
        rating: "4.4",
        price: "2579.31",
        isBookmark: false,
        agent: "Buck Roberts",
        requirement: "Rent"
    }, {
        id: 8,
        type: "Villa",
        title: "Whitepace Vintage Villa",
        img: rImg4,
        img_alt: "img-04.jpg",
        location: "Cantabria, Spain",
        bedroom: "4",
        bathroom: "2",
        area: "1754",
        rating: "4.9",
        price: "3495.76",
        isBookmark: true,
        agent: "Axel Kozey",
        requirement: "Sale"
    }, {
        id: 9,
        type: "Apartment",
        title: "Vintage Apartment",
        img: rImg3,
        img_alt: "img-03.jpg",
        location: "Minas Gerais, Brazil",
        bedroom: "2",
        bathroom: "1",
        area: "1025",
        rating: "4.7",
        price: "1249.99",
        isBookmark: false,
        agent: "Domenic Dach",
        requirement: "Rent"
    }, {
        id: 10,
        type: "Residency",
        title: "Classic White House",
        img: rImg2,
        img_alt: "img-02.jpg",
        location: "Minas Gerais, Brazil",
        bedroom: "3",
        bathroom: "2",
        area: "1324",
        rating: "4.5",
        price: "3698.99",
        isBookmark: false,
        agent: "Jerry Emard",
        requirement: "Rent"
    }, {
        id: 11,
        type: "Villa",
        title: "The Country House",
        img: rImg1,
        img_alt: "img-01.jpg",
        location: "West Midlands, United Kingdom",
        bedroom: "2",
        bathroom: "1",
        area: "1458",
        rating: "4.5",
        price: "2451.39",
        isBookmark: true,
        agent: "Josefa Weissnat",
        requirement: "Sale"
    }
];

const propertyList = [
    {
        id: 1,
        type: "Residency",
        title: "Duplex Square Valley",
        img: rImg5,
        img_alt: "img-05.jpg",
        location: "Distrito Federal, Brazil",
        bedroom: "3",
        bathroom: "2",
        area: "1039",
        rating: "4.4",
        price: "2579.31",
        starred: false,
        agent: "Buck Roberts",
        requirement: "Rent"
    }, {
        id: 2,
        type: "Villa",
        title: "Whitepace Vintage Villa",
        img: rImg4,
        img_alt: "img-04.jpg",
        location: "Cantabria, Spain",
        bedroom: "4",
        bathroom: "2",
        area: "1754",
        rating: "4.9",
        price: "3495.76",
        starred: true,
        agent: "Axel Kozey",
        requirement: "Sale"
    }, {
        id: 3,
        type: "Villa",
        title: "Crystal House",
        img: rImg6,
        img_alt: "img-06.jpg",
        location: "Guipuzcua, Spain",
        bedroom: "2",
        bathroom: "1",
        area: "1039",
        rating: "4.8",
        price: "1249.99",
        starred: true,
        agent: "Uriel King",
        requirement: "Sale"
    }, {
        id: 4,
        type: "Apartment",
        title: "Small house on an autumn’s day",
        img: rImg8,
        img_alt: "img-08.jpg",
        location: "West Midland, United Kingdom",
        bedroom: "4",
        bathroom: "2",
        area: "1796",
        rating: "4.9",
        price: "3895.39",
        starred: false,
        agent: "Josefa Weissnat",
        requirement: "Sale"
    }, {
        id: 5,
        type:"Villa",
        title: "Swimming pool side of the residential Ascot home.",
        img: rImg8,
        img_alt: "img-08.jpg",
        location: "Estado de Mexico, Mexico",
        bedroom: "4",
        bathroom: "2",
        area: "1145",
        rating: "4.5",
        price: "1452.39",
        starred: true,
        agent: "Federico Hand",
        requirement: "Rent"
    }, {
        id: 6,
        type: "Villa",
        title: "Crystal House",
        img: rImg6,
        img_alt: "img-06.jpg",
        location: "Guipuzcua, Spain",
        bedroom: "2",
        bathroom: "1",
        area: "1039",
        rating: "4.8",
        price: "1249.99",
        starred: false,
        agent: "Jerry Emard",
        requirement: "Rent"
    }, {
        id: 7,
        type: "Residency",
        title: "Duplex Square Valley",
        img: rImg5,
        img_alt: "img-05.jpg",
        location: "Distrito Federal, Brazil",
        bedroom: "3",
        bathroom: "2",
        area: "1039",
        rating: "4.4",
        price: "2579.31",
        starred: false,
        agent: "Buck Roberts",
        requirement: "Rent"
    }, {
        id: 8,
        type: "Villa",
        title: "Whitepace Vintage Villa",
        img: rImg4,
        img_alt: "img-04.jpg",
        location: "Cantabria, Spain",
        bedroom: "4",
        bathroom: "2",
        area: "1754",
        rating: "4.9",
        price: "3495.76",
        starred: true,
        agent: "Axel Kozey",
        requirement: "Sale"
    }, {
        id: 9,
        type: "Apartment",
        title: "Vintage Apartment",
        img: rImg3,
        img_alt: "img-03.jpg",
        location: "Minas Gerais, Brazil",
        bedroom: "2",
        bathroom: "1",
        area: "1025",
        rating: "4.7",
        price: "1249.99",
        starred: false,
        agent: "Domenic Dach",
        requirement: "Rent"
    }, {
        id: 10,
        type: "Residency",
        title: "Classic White House",
        img: rImg2,
        img_alt: "img-02.jpg",
        location: "Minas Gerais, Brazil",
        bedroom: "3",
        bathroom: "2",
        area: "1324",
        rating: "4.5",
        price: "3698.99",
        starred: false,
        agent: "Jerry Emard",
        requirement: "Rent"
    }, {
        id: 11,
        type: "Villa",
        title: "The Country House",
        img: rImg1,
        img_alt: "img-01.jpg",
        location: "West Midlands, United Kingdom",
        bedroom: "2",
        bathroom: "1",
        area: "1458",
        rating: "4.5",
        price: "2451.39",
        starred: true,
        agent: "Josefa Weissnat",
        requirement: "Sale"
    }
]

export { agenciesList, agentGrid, agentList, earningData, propertyGrid, propertyList };