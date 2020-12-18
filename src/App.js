import React from 'react'


class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let newName = event.target[0].value
        // this.setState({name: newName})
        this.state.name = newName
    }


    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name:</label>
                    <input />
                    <button>Change My Name!</button>
                </form>
            </div>
        )
    }
}

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        console.log("Constructor Function")
    }

    componentDidMount() {
        console.log("Component Has Mounted")
    }

    componentDidUpdate() {
        console.log("Component has Updated")
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    // regularFunction() {

    // }

    render() {
        console.log("Render Function")
        return (
            <>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </>
        )
    }
}

class RandomUser extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            ready: true
        }
    }

    componentDidMount() {
        this.setState({users: [], ready: false})
        console.log('mounting')
    }

    handleClick = (event) => {
        this.setState({users: [], ready: false})
        fetch("https://randomuser.me/api/?results=200")
            .then(response => response.json())
            .then(data => {
                this.setState({users: data.results, ready: true})
            })
    }
    // Dont do this.
    // componentDidUpdate() {
    //     this.setState({users: [], ready: false})
    //     console.log('update')
    // }

    render() {
        return (
            <>
                {this.state.ready ? (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map((user, index) => (
                                <tr key={index}>
                                    <td><img src={user.picture.thumbnail}/></td>
                                    <td>{user.name.first}</td>
                                    <td>{user.dob.age}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : <p>Please wait, data is loading...</p> }
                <button onClick={this.handleClick}>Click For Random User</button>
            </>
        )
    }
}

const App = () => {
    return (
        <>
            {/* <Greeting name="John" />
            <Greeting name="Paul" />
            <Greeting name="Adam" />
            <Greeting name="Luke" />
            <Counter /> */}
            <RandomUser />
        </>
    )
}



// const Greeting = (props) => {
//     return <h1>Hello {props.name}</h1>
// }

export default App