import React from 'react';
import IssueForm from './IssueForm';
import IssueNameComponent from './IssueNameComponent';
class IssueListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            issues:[
                {
                id:"Tracker  "+1,
                name: "Create react app",
                completed:false
                },
                {
                id:"Tracker  "+2,
                name: "Demo of react Application",
                completed:true
                },
                {
                id:"Tracker  "+3,
                name: "Attending meeting",
                completed:false
                }
               ],
               currentIssue:'',
               currentId:3,
               
                
        }
        this.changeStatus=this.changeStatus.bind(this);
        this.updateIssue=this.updateIssue.bind(this);
        this.addIssue=this.addIssue.bind(this);
        this.deleteIssue=this.deleteIssue.bind(this);
        this.editIssue=this.editIssue.bind(this);
    }
    editIssue(index,valueToUpdate){
        console.log("----------Edit Issue Called")
        console.log(index,valueToUpdate);
        let issues=this.state.issues;
        let currentIssue=issues[index];
        currentIssue['name']=valueToUpdate;
        this.setState({
            issues:issues
        })
    }
    deleteIssue(indexToBeDeleted){
        console.log("------------->delete method called")
        let issues=this.state.issues;
        let currentId=this.state.currentId;
        issues.splice(indexToBeDeleted,1);
        this.setState({
            issues:issues,
            currentId:currentId-1
        })
    }
    
    addIssue(event){
        event.preventDefault();
        console.log("----------:addIssue called")
        
        let issues=this.state.issues;
        let currentIssue=this.state.currentIssue;
        let issueName=[];
        for (let i=0;i<issues.length;i++)
        {        
            issueName.push(issues[i].name);
        }
        if (currentIssue.length===0){
            window.alert("Please Add Name to the task");
        }

        else if (issueName.includes(currentIssue))
        {
                    window.alert("A task with the same name already exists.Please give another name to the task");
                    document.getElementById("taskName").value="";
        }
        
            else{
                let currentId=this.state.currentId;
                currentId=currentId+1;
                let currenttoken="Tracker  "+currentId;
                issues.push({
                    id:currenttoken,
                    name:currentIssue,
                    completed:false
                });
                this.setState({
                    issues:issues,
                    currentIssue:'',
                    currentId:currentId
                });
           
            }
                
        
         
        
        
        console.log(issues);
    }
    updateIssue(newValue){
        this.setState({
            currentIssue:newValue.target.value
           
        });
    }
    changeStatus(index){
        var issues=this.state.issues;
        var issue=issues[index];
        issue.completed=!issue.completed;
        this.setState({
            issues:issues
        })
        console.log(this.state.issues[index])
    }
    render(){
        return(
            <div className='container'>
            <h1 className="display-4 mt-3 text-center">Issue-Tracker App</h1>
            <IssueForm
            updateIssue={this.updateIssue}
            currentIssue={this.state.currentIssue}
            addIssue={this.addIssue}/>
            <ul className="list-group list-group-flush">
                {
               this.state.issues.map((issue,index)=>{
                   return (<IssueNameComponent key={issue.name} 
                    issue={issue} 
                    clickHandler={this.changeStatus}
                    deleteIssue={this.deleteIssue}
                    index={index}
                    editIssue={this.editIssue}/>)
               })
            }   
            </ul>
            </div>
        );
    }
}
export default IssueListComponent;
