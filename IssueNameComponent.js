import React from "react";
class IssueNameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        }
        this.renderForm=this.renderForm.bind(this);
        this.renderIssueList=this.renderIssueList.bind(this);
        this.toggleState=this.toggleState.bind(this);
        this.updateIssue=this.updateIssue.bind(this);
    }
    updateIssue(event){
       event.preventDefault();
       this.props.editIssue(this.props.index,this.input.value)
       this.toggleState();
       console.log("-------------: update issue called")
    }
    toggleState(){
        const{isEditable}=this.state;
        this.setState({
            isEditable:!isEditable
        })
    }
    renderForm(){
        return(
            <div id="update-issue">
                        <form class="mt-5" onSubmit={this.updateIssue}>
                            <div class="form-row align-items-center " >
                                <div class="col-lg-8">
                                    <label for="taskName" class="leftPadding">Edit Task</label>
                                    <input type="text" class="form-control" 
                                    id="taskName" 
                                    defaultValue={this.props.issue.name}
                                    ref={(value)=>{this.input=value;}} />
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-warning mt-4">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
        );
    }
    renderIssueList(){
        return(
            <li className="list-group-item mr-auto" onClick={() => {
                this.props.clickHandler(this.props.index)
            }}>
            <span >{this.props.issue.id}</span>&nbsp;&nbsp;
                <span  className={this.props.issue.completed ? "completed" : ""}>{this.props.issue.name}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-warning " onClick={(event)=>{
                    event.stopPropagation();
                    this.toggleState();
                }}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-danger " onClick={(event) => {
                    event.stopPropagation();
                    this.props.deleteIssue(this.props.index);
                }}>Delete</button></li>
        );
    }
    render() {
        const { isEditable } = this.state;
        return (
            <section>
                {isEditable ?this.renderForm():this.renderIssueList()}
            </section>
        );
    }
}
export default IssueNameComponent;
