import React from "react";
const IssueForm=(props)=>{
    return(
        <div id="issue-form">
        <form className="mt-5" onSubmit={props.addIssue}>
            <div className="form-row align-items-center">
                <div className="col-lg-8">
                    <label htmlFor="taskName">Your Task</label>
                    <input type="text" placeholder="Start typing..."className="form-control" id="taskName"  value={props.currentIssue}
            onChange={props.updateIssue}/>
                    <small id="taskHelp" className="form-text text-muted">Issue List</small>
                </div>


                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </div>
            </div>
        </form>
    </div>

);
}
export default IssueForm;