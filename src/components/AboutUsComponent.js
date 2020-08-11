import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import {baseUrl} from "../shared/baseUrl";
import {Stagger} from "react-animation-components";

function RenderLeader({leader}) {

        return(
            <Stagger in>
                <Media className="mt-5 mb-5">
                    <img className="mr-5" src={baseUrl + leader.image} height="170px" alt={leader.name}/>
                    <Media body>
                        <h5>{leader.name}</h5>
                        <p>{leader.designation}</p>
                        <p>{leader.description}</p>
                    </Media>
                </Media>
            </Stagger>
        );

}

function About(props) {
    const leaders = props.leaders.leaders.map((leader) => {
        return(
            <RenderLeader leader={leader}/>
            );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home" className="link">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Tupiniquim Restaurant quickly established itself as a culinary icon par excellence in Brazil. With its unique brand of brazillian cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Brazil.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Vegan Wonderful</em>, a successful food started by our CEO, Ms. Maria Eduarda, that featured for the first time the world's best cuisines.</p>
                </div>
                <div className="col-12 col-md-6 justify-content-end">
                    <Card>
                        <CardHeader className="bg-primary text-white text-center">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6 ml-5">Started</dt>
                                <dd className="col-4">3 Feb. 2010</dd>
                                <dt className="col-6 ml-5">Major Stake Holder</dt>
                                <dd className="col-4">BR Fine Foods Inc.</dd>
                                <dt className="col-6 ml-5">Last Year's Turnover</dt>
                                <dd className="col-4">$1,250,375</dd>
                                <dt className="col-6 ml-5">Employees</dt>
                                <dd className="col-4">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">As natural as the daylight, but what a good sloth, leave me here for nothing, today no one will spoil my day, I'm just going to waste the energy to kiss your mouth.</p>
                                <footer className="blockquote-footer">Chorão,
                                    <cite title="Source Title"> Charlie Brown Júnior, Blue Sky</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    {leaders}
                </div>
            </div>
        </div>
    );
}

export default About;