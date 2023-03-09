import React from 'react'

class ErrorBounday extends React.Component{
    constructor(){
        super();
        this.state ={
            error: null,
            errorInfo:null
        }
    }
    componentDidCatch(error,errorInfo){
        this.setState({error: error, errorInfo:errorInfo})
    }
    

    render(){
        if(this.state.error){
            return(
                <p>ERROR</p>
            )
        }
        return(
        this.props.children)
    }
}

export default ErrorBounday