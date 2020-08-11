import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label, Col} from 'reactstrap';
import {Link} from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";
import {FadeTransform, Fade, Stagger} from "react-animation-components";

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){ //Abre o Modal
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        //console.log(this.props.dishId);
        this.props.postComment(this.props.dishId, values.rating, values.comment, values.author);
    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"/> Submit Comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Label htmlFor="rating">Rating</Label>
                            <Col>
                                <Row className="form-group">
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Row>
                            </Col>
                            <Label htmlFor="author">Your Name</Label>
                            <Col>
                                <Row className="form-group">
                                    <Control.text model=".author" name="author" id="author" className="form-control" placeholder="Your Name"
                                                  validators={{
                                                      minLength: minLength(3), maxLength: maxLength(15)
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Row>
                            </Col>
                            <Label htmlFor="comment">Comment</Label>
                            <Col>
                                <Row className="form-group">
                                    <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                                </Row>
                            </Col>
                            <Col>
                                <Row className="form-group">
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Row>
                            </Col>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

function DishDetail({selectedDish, comments, postComment, isLoading, errMess}){
    if(isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    else if(errMess){
        return (
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    }

    if (selectedDish != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu" className="link">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{selectedDish.name}</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <FadeTransform in transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                            <Card>
                                <CardImg width="100%" object src={baseUrl + selectedDish.image} alt={selectedDish.name}/>
                                <CardBody>
                                    <CardTitle>{selectedDish.name}</CardTitle>
                                    <CardText>{selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </FadeTransform>
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        <Stagger in>
                            {comments.map((comment) =>{
                                return(
                                    <Fade in>
                                        <div key={comment.id} style={{marginBottom: "20px"}}>
                                            <div style={{marginBottom: "10px"}}>{comment.author}</div>
                                            <div>-- {comment.comment} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                                        </div>
                                    </Fade>
                                );
                            })}
                        </Stagger>

                        <CommentForm dishId = {selectedDish.id} postComment = {postComment}/>

                    </div>

                </div>
            </div>
        );
    }

    else{
        return(
            <div> </div>
        );
    }
}


export default DishDetail;