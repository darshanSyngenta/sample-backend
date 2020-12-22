import { Layout } from 'antd';

import styled from 'styled-components';

const { Sider } = Layout;

export const SiderStyle = styled(Sider)`
  height: 100vh;
  background: #2f3031;
  left: 0;
  overflow: hidden;
  z-index: 99;

  .Drawermenu li:hover span > a {
    color: #ffffff;
    background: #232324;
  }

  .syngenta-ant-menu-item:hover i > svg > g > g {
    stroke: #fff;
  }

  .syngenta-ant-menu-item:hover i > svg > g {
    stroke: #fff;
  }

  .Drawermenu .syngenta-ant-menu-item:hover i > svg > path {
    stroke: #fff;
  }

  .DrawerSubmenu {
    border-bottom: 1px solid #15563e8c;
  }

  .DrawerSubmenu:hover {
    color: #ffffff;

    cursor: pointer;
  }

  .DrawerSubmenu:hover span {
    color: #ffffff;
  }

  .DrawerSubmenu .syngenta-ant-menu-sub.syngenta-ant-menu-inline > .syngenta-ant-menu-item:hover a {
    color: #ffffff;
  }

  .Drawermenu li:hover .syngenta-ant-menu-submenu-title > a > li > i > svg > g > g {
    fill: #ffffff;
  }

  .Drawermenu li:hover .syngenta-ant-menu-submenu-title > a > li > i > svg > g {
    fill: #ffffff;
  }

  .Drawermenu li:hover .syngenta-ant-menu-submenu-title > a > li > i > svg > path {
    fill: #ffffff;
  }

  .syngenta-ant-menu-submenu-selected .syngenta-ant-menu-submenu-title > a > li > i > svg > path {
    fill: #ffffff;
  }

  .growerIcon {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }

  .growerLabel {
    vertical-align: middle;

    /* color: white; */
  }

  .growerMenuitem {
    border-bottom: 1px solid #15563e8c;

    cursor: pointer;
  }

  .growerMenuitem:hover a > span {
    /* color: #ffffff; */
  }

  /*****Overrided classes***/

  .syngenta-ant-menu-item > a:hover {
    color: #ffffff;
  }

  .syngenta-ant-menu-item:active {
    background: #232324;
  }

  .syngenta-ant-menu-item:hover {
    color: #ffffff;

    background: #232324;
  }

  .syngenta-ant-menu-inline-collapsed {
    width: 70px;
  }

  .syngenta-ant-menu {
    /* color: rgb(255, 255, 255); */

    background: #2f3031;
  }

  .syngenta-ant-menu:not(.syngenta-ant-menu-horizontal) .syngenta-ant-menu-item-selected {
    background-color: #232324;

    background: #232324;
  }

  .syngenta-ant-menu-item-selected > a > span {
    color: #ffffff;

    cursor: pointer;
  }

  .syngenta-ant-menu-inline .syngenta-ant-menu-item {
    padding: 8px 14px !important;
  }

  .syngenta-ant-menu-inline-collapsed > .syngenta-ant-menu-item {
    padding: 8px 14px !important; /* Note:- already added important in the framwork antd class since we have to add here important */
  }

  .syngenta-ant-menu-inline-collapsed
    > .syngenta-ant-menu-submenu
    > .syngenta-ant-menu-submenu-title {
    padding: 8px 14px !important; /* Note:- already added important in the framwork antd class since we have to add here important */
  }

  .syngenta-ant-menu-inline > .syngenta-ant-menu-submenu > .syngenta-ant-menu-submenu-title {
    padding: 8 14px !important;
  }

  .syngenta-ant-menu-inline,
  .syngenta-ant-menu-vertical,
  .syngenta-ant-menu-vertical-left {
    border: 0px;
  }
  .syngenta-ant-menu-item > a > span :hover {
    color: #ffffff;
  }

  .syngenta-ant-menu-item-selected > a > span {
    color: #ffffff;
  }

  .syngenta-ant-menu-item-selected > a > span {
    color: #ffffff;
  }

  .syngenta-ant-menu-inline .syngenta-ant-menu-item-selected::after {
    color: #ffffff;

    border-left: 0px solid #ffffff;

    border-right: 0px;
  }

  .syngenta-ant-menu-inline .syngenta-ant-menu-item::after {
    border-right: 0px;
  }

  .syngenta-ant-menu-submenu-selected {
    color: #ffffff;
  }

  .syngenta-ant-menu-submenu-selected .syngenta-ant-menu-submenu-title > a > li > .growerLabel {
    color: #ffffff;
  }

  .syngenta-ant-menu-submenu-selected
    > .syngenta-ant-menu-submenu-title
    li
    > .anticon
    > svg
    > g
    > g {
    stroke: #fff;
    color: #ffffff;
  }

  .syngenta-ant-menu-item:hover a {
    color: #ffffff;
  }

  .growerMenuitem > a {
    color: #ffffff;

    display: inline-flex;
  }

  .syngenta-ant-menu-item > a {
    display: block;
    color: #707374;
  }

  .syngenta-ant-menu-submenu .syngenta-ant-menu-item-selected > a {
    color: #ffffff;
  }

  .syngenta-ant-menu-submenu-vertical
    > .syngenta-ant-menu-submenu-title:hover
    .syngenta-ant-menu-submenu-arrow::after,
  .syngenta-ant-menu-submenu-vertical-left
    > .syngenta-ant-menu-submenu-title:hover
    .syngenta-ant-menu-submenu-arrow::after,
  .syngenta-ant-menu-submenu-vertical-right
    > .syngenta-ant-menu-submenu-title:hover
    .syngenta-ant-menu-submenu-arrow::after,
  .syngenta-ant-menu-submenu-inline
    > .syngenta-ant-menu-submenu-title:hover
    .syngenta-ant-menu-submenu-arrow::after,
  .syngenta-ant-menu-submenu-vertical
    > .syngenta-ant-menu-submenu-title:hover
    .syngenta-ant-menu-submenu-arrow::before,
  .syngenta-ant-menu-submenu-vertical-left
    > .syngenta-ant-menu-submenu-title:hover
    .syngenta-ant-menu-submenu-arrow::before,
  .syngenta-ant-menu-submenu-vertical-right
    > .syngenta-ant-menu-submenu-title:hover
    .syngenta-ant-menu-submenu-arrow::before,
  .syngenta-ant-menu-submenu-inline
    > .syngenta-ant-menu-submenu-title:hover
    .syngenta-ant-menu-submenu-arrow::before {
    background: linear-gradient(to right, #ffffff, #ffffff);
  }

  .syngenta-ant-menu-submenu-selected
    .syngenta-ant-menu-submenu-title
    .syngenta-ant-menu-submenu-arrow::before {
    background: #232324;
  }

  .syngenta-ant-menu-submenu-selected
    .syngenta-ant-menu-submenu-title
    .syngenta-ant-menu-submenu-arrow::after {
    background: #232324;
  }

  .syngenta-ant-menu-submenu-inline
    > .syngenta-ant-menu-submenu-title
    .syngenta-ant-menu-submenu-arrow::before,
  .syngenta-ant-menu-submenu-inline
    > .syngenta-ant-menu-submenu-title
    .syngenta-ant-menu-submenu-arrow::after {
    background-image: unset;
  }

  .syngenta-ant-progress-inner {
    background-color: #f5f5f508;
  }

  .Drawermenu > .syngenta-ant-menu-item {
    height: 50px;
  }

  .syngenta-ant-menu-vertical .syngenta-ant-menu-item:not(:last-child),
  .syngenta-ant-menu-inline .syngenta-ant-menu-item:not(:last-child) {
    margin-bottom: 0;
  }

  .syngenta-ant-menu-vertical .syngenta-ant-menu-item,
  .syngenta-ant-menu-inline .syngenta-ant-menu-item {
    margin-top: 0;
  }

  /* .syngenta-ant-menu-item .anticon + img, .syngenta-ant-menu-submenu-title .anticon + span {
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  } */
`;
