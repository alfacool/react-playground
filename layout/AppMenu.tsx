/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Menu',
            items: [
                { label: 'Currency Converter', icon: 'pi pi-fw pi-dollar', to: '/currency' },
                { label: 'Currency Converter with Redux', icon: 'pi pi-fw pi-dollar', to: '/currencyredux' }
            ]
        },

        {
            label: 'Templates',
            items: [
                {
                    label: 'Menu',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Home',
                            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/templates' }]
                        },
                        {
                            label: 'UI Components',
                            items: [
                                { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/templates/uikit/formlayout' },
                                { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/templates/uikit/input' },
                                { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/templates/uikit/floatlabel' },
                                { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', to: '/templates/uikit/invalidstate' },
                                { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/templates/uikit/button', class: 'rotated-icon' },
                                { label: 'Table', icon: 'pi pi-fw pi-table', to: '/templates/uikit/table' },
                                { label: 'List', icon: 'pi pi-fw pi-list', to: '/templates/uikit/list' },
                                { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/templates/uikit/tree' },
                                { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/templates/uikit/panel' },
                                { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/templates/uikit/overlay' },
                                { label: 'Media', icon: 'pi pi-fw pi-image', to: '/templates/uikit/media' },
                                { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/templates/uikit/menu', preventExact: true },
                                { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/templates/uikit/message' },
                                { label: 'File', icon: 'pi pi-fw pi-file', to: '/templates/uikit/file' },
                                { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/templates/uikit/charts' },
                                { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/templates/uikit/misc' }
                            ]
                        },
                        {
                            label: 'Prime Blocks',
                            items: [
                                { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/templates/blocks', badge: 'NEW' },
                                { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://blocks.primereact.org', target: '_blank' }
                            ]
                        },
                        {
                            label: 'Utilities',
                            items: [
                                { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/templates/utilities/icons' },
                                { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: 'https://primeflex.org/', target: '_blank' }
                            ]
                        },
                        {
                            label: 'Pages',
                            icon: 'pi pi-fw pi-briefcase',
                            to: '/templates/pages',
                            items: [
                                {
                                    label: 'Landing',
                                    icon: 'pi pi-fw pi-globe',
                                    to: '/templates/landing'
                                },
                                {
                                    label: 'Auth',
                                    icon: 'pi pi-fw pi-user',
                                    items: [
                                        {
                                            label: 'Login',
                                            icon: 'pi pi-fw pi-sign-in',
                                            to: '/templates/auth/login'
                                        },
                                        {
                                            label: 'Error',
                                            icon: 'pi pi-fw pi-times-circle',
                                            to: '/templates/auth/error'
                                        },
                                        {
                                            label: 'Access Denied',
                                            icon: 'pi pi-fw pi-lock',
                                            to: '/templates/auth/access'
                                        }
                                    ]
                                },
                                {
                                    label: 'Crud',
                                    icon: 'pi pi-fw pi-pencil',
                                    to: '/templates/pages/crud'
                                },
                                {
                                    label: 'Timeline',
                                    icon: 'pi pi-fw pi-calendar',
                                    to: '/templates/pages/timeline'
                                },
                                {
                                    label: 'Not Found',
                                    icon: 'pi pi-fw pi-exclamation-circle',
                                    to: '/templates/pages/notfound'
                                },
                                {
                                    label: 'Empty',
                                    icon: 'pi pi-fw pi-circle-off',
                                    to: '/templates/pages/empty'
                                }
                            ]
                        },
                        {
                            label: 'Hierarchy',
                            items: [
                                {
                                    label: 'Submenu 1',
                                    icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {
                                            label: 'Submenu 1.1',
                                            icon: 'pi pi-fw pi-bookmark',
                                            items: [
                                                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                            ]
                                        },
                                        {
                                            label: 'Submenu 1.2',
                                            icon: 'pi pi-fw pi-bookmark',
                                            items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                                        }
                                    ]
                                },
                                {
                                    label: 'Submenu 2',
                                    icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {
                                            label: 'Submenu 2.1',
                                            icon: 'pi pi-fw pi-bookmark',
                                            items: [
                                                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                            ]
                                        },
                                        {
                                            label: 'Submenu 2.2',
                                            icon: 'pi pi-fw pi-bookmark',
                                            items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Get Started',
                            items: [
                                {
                                    label: 'Documentation',
                                    icon: 'pi pi-fw pi-question',
                                    to: '/templates/documentation'
                                },
                                {
                                    label: 'Figma',
                                    url: 'https://www.dropbox.com/scl/fi/bhfwymnk8wu0g5530ceas/sakai-2023.fig?rlkey=u0c8n6xgn44db9t4zkd1brr3l&dl=0',
                                    icon: 'pi pi-fw pi-pencil',
                                    target: '_blank'
                                },
                                {
                                    label: 'View Source',
                                    icon: 'pi pi-fw pi-search',
                                    url: 'https://github.com/primefaces/sakai-react',
                                    target: '_blank'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
