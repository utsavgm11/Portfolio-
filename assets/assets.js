import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import Tableau from './tableau-Photoroom.png';
import PowerBi from './power-bi.png';
import github from './github.png';
import Next from './next.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import data_icon from './data-icon.jpg';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import Node from './node.png'
import Python from './python.png'
import PostgreSQL from './postgre.png'
import AI_icon from './ai-icon.png'


export const assets = {
    AI_icon,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    Tableau,
    PowerBi,
    github,
    Node,
    Next,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    data_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    Python,
    PostgreSQL
};

export const workData = [
    // --- NEW ENTERPRISE & FREELANCE PROJECTS ---
    {
        title: 'AI Tender Analysis Platform',
        description: 'Agentic AI & RAG',
        bgImage: './tender-analysis.png',
        link: 'https://tender.aarviencon.com' // Replace with live link if available
    },
    {
        title: 'SK Advizors Wealth Platform',
        description: 'FinTech Web App',
        bgImage: './sk-advizors.png',
        link: 'https://skadvizors.com'
    },
    {
        title: 'GTC IELTS/PTE Academy',
        description: 'EdTech Platform',
        bgImage: './gtc-academy.png',
        link: 'https://gtctraining.in'
    },
   

    // --- YOUR EXISTING PROJECTS (Untouched) ---
    {
        title: 'Real-Estate App',
        description: 'Web Design',
        bgImage: '/real-estate.jpg',
        link:'https://real-estate-web-c99d.vercel.app/'
    },
    {
        title: 'Weather  app',
        description: 'Web Design',
        bgImage: '/weather.jpg',
        link:'https://utsavgm-weather-app-sd5x.vercel.app/'
    },
    {
        title: 'To-Do App ',
        description: 'Web Design',
        bgImage: '/to-do.jpg',
    },
    {
        title: 'Portfolio App',
        description: 'Web Design',
        bgImage: '/portfolio.jpg',
        link:'https://utsav-portfolio-puce-alpha-42.vercel.app/'
    },
]

export const serviceData = [
    { 
        icon: assets.AI_icon, 
        title: 'AI & Automation', 
        description: 'Designing Agentic AI systems, RAG workflows, and NLP solutions to automate complex business processes and drastically reduce operational times.', 
        link: '' 
    },
    { 
        icon: assets.web_icon, // You can swap this with an assets.ui_icon or assets.code_icon if you have one!
        title: 'Full-Stack Development', 
        description: 'Engineering scalable, high-performance web applications and enterprise platforms using modern frameworks like React.js, Next.js, Node.js, and PostgreSQL.', 
        link: '' 
    },
    { 
        icon: assets.data_icon, 
        title: 'Data Analytics & BI', 
        description: 'Transforming raw databases into actionable strategic insights through advanced SQL analysis and dynamic, interactive Power BI dashboards.', 
        link: '' 
    },
]

export const infoList = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Tech Stack', 
        description: 'React.js, Next.js, Flask, PostgreSQL, Agentic AI (RAG), Power BI' 
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Education', 
        description: 'B.Tech in Computer Science Engineering' 
    },
    { 
        icon: assets.project_icon, 
        iconDark: assets.project_icon_dark, 
        title: 'Projects', 
        description: 'Architected Enterprise AI & Full-Stack Platforms' 
    }
];

export const toolsData = [
    assets.vscode, assets.Tableau, assets.PowerBi, assets.Next, assets.github , assets.Node, assets.Python, assets.PostgreSQL
];