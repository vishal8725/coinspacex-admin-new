import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { MdDashboard } from "react-icons/md";
import { GiTakeMyMoney, GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />
  },
  {
    title: 'Investment',
    path: '/investment',
    icon: <GiTakeMyMoney />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Invest',
        path: '/investment/now',
      },
      {
        title: 'Investment History',
        path: '/investment/history',
      }
    ]
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <FaUserAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'View',
        path: '/profile/view',
        cName: 'sub-nav'
      },
      {
        title: 'Update',
        path: '/profile/update',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Incomes',
    path: '/income',
    icon: <GiPayMoney />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Referral Income',
        path: '/income/referral',
      },
      {
        title: 'Label Income',
        path: '/income/label',
      },
      {
        title: 'Stacking Income',
        path: '/income/stacking',
      }
    ]
  },
  {
    title: 'Withdraw',
    path: '/withdraw',
    icon: <GiReceiveMoney />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Withdrawl',
        path: '/withdraw/withdrawl',
        cName: 'sub-nav'
      },
      {
        title: 'History',
        path: '/withdraw/history',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Others',
    path: '/others',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Gallery',
        path: '/others/gallery',
        cName: 'sub-nav'
      },
      {
        title: 'News',
        path: '/others/news',
        cName: 'sub-nav'
      },
      {
        title: 'Support',
        path: '/others/support',
        cName: 'sub-nav'
      }
    ]
  }
];
