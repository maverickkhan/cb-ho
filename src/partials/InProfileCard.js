import React from 'react'
import '../styles/NewDeviceLogin.css';
import { Container, Row, Col, Form, Button } from '../../node_modules/react-bootstrap';
import CreateProjectArrowButton from './CreateProjectArrowButton';
import CancelButtonInCard from './CancelButtonInCard';
import SubHeadingTitle from './SubHeadingTitle';
import FormFieldOutlined from './FormFieldOutlined';
import HeadingBigNarrow from './HeadingBigNarrow';

//this component is having problems with css it should be fixed first before using it 
//component level css is coliding with root level css

export default function InProfileCard() {
    return (
        <div>
            <div className='container-fluid my-Container'>
            
            <div className='mt-5'></div>
            <div className='container-fluid containerBox'>
            <Col className="border-box single-container ">
            <div className='container-fluid containerBox'>
            <div className='col'>
            <HeadingBigNarrow />
            <SubHeadingTitle title={"Project Name"}/>
            <FormFieldOutlined/>
            </div>
            <div className='col'>
            <SubHeadingTitle title={"Add a description"} details={"Helpful for teams or differentiating between projects with similar names."}/>
            <FormFieldOutlined labelName={"Enter Description"}/>
            </div>
            <div className='col'>
            <SubHeadingTitle title={"Tell us what it's for"} details={"This will help us to provide a more relevant experience."}/>
            <FormFieldOutlined labelName={"Select Purpose"}/>
            </div>
            <div className="new-project-screen-card-container row">
            <CreateProjectArrowButton/>
            <CancelButtonInCard/>
            </div>
            </div>
            </Col>
            </div>
            </div>
            </div>
    )
}
