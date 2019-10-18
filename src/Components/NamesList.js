import React, {Component} from 'react'

class NamesList extends Component {
    
    render() {
    const  {data , filterText} = this.props
    const nameslist = data.filter(name => {
        return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    })
    .map(name => {
        return (
            <li key={name.id} className={name.sex}>{name.name}</li>
        )
    })
    return (
        <div>
            <p>brooo the filter text you want is: {this.props.filterText}</p>
            <ul>
                {nameslist}
            </ul>
        </div>
    )
    }
}

export default NamesList

