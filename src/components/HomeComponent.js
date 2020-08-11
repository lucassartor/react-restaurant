import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";
import {FadeTransform} from "react-animation-components";

function RenderCard({item, isLoading, errMess}) { //criando um componente aqui dentro mesmo
    if(isLoading){
        return (
            <Loading />
        );
    }

    else if(errMess){
        return (
            <h4>{errMess}</h4>
        );
    }

    return(
        <FadeTransform in transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}/>
                <CardBody>
                    <h5><CardTitle>{item.name}</CardTitle></h5>
                    <h6>{item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null} </h6>
                    <CardText>{item.description}</CardText>
                    </CardBody>
            </Card>
        </FadeTransform>
        // if(item.designation != null)printa o CardSubtitle, else printa nd
    );
}

function Home(props) {
    return(
        <div className="container mb-5 mt-5">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish}
                                    isLoading={props.dishesLoading}
                                    errMess={props.dishesErrMess}
                        />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion}
                                    isLoading={props.promosLoading}
                                    errMess={props.promosErrMess}
                        />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader}
                                    isLoading={props.leadersLoading}
                                    errMess={props.leadersErrMess}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;