import React from "react";
const IssueForm=(props)=>{
    return(
        <div id="issue-form">
        <form className="mt-5" onSubmit={props.addIssue}>
            <div className="form-row align-items-center">
                <div className="col-lg-10">
                    <label htmlFor="taskName">Your Task</label>
                    <input type="text" placeholder="Start typing..."className="form-control" id="taskName"  value={props.currentIssue}
            onChange={props.updateIssue}/>
                     <small id="issueCompleted" className="form-text text-muted">Click on the issue to mark issue completion</small>
                    <b id="taskHelp" className="form-text text-muted">Issue List </b>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mt-1 mb-4">Submit</button>
                </div>
            </div>
        </form>
    </div>

);
}
export default IssueForm;
