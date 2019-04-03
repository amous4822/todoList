import React from 'react'


class AddItem extends React.Component{

    state = {
        task:''
    }

    change = (e) => {
        //e.preventDefault()
        //console.log(e.target.value)
        this.setState({[e.target.name] : e.target.value} )
    }

    submit = (e) => {
        const testStr = /^\w/;
        e.preventDefault()
        if(testStr.test(this.state.task)){
            this.props.addItem(this.state.task)
        }
        this.setState({task : ''} )
    }


    render(){
        return (
            <form onSubmit={this.submit} style={{display:'flex', margin:'5px'}}>
                <input type='text'
                    name='task'
                    value={this.state.task}
                    onChange={this.change}
                    style={{flex:'10'}}
                />

                <input type='submit'
                    
                    style={{flex:'1', padding:'5px'}}
                />

            </form>
        );
    }
}


export default AddItem;