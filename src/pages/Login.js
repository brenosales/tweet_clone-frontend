import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

// import { Container } from './styles';

export default class Login extends Component {
    state = {
        username: '',
    };

    handleInputChange = e => {
        this.setState({ username: e.target.value});
    };

    handleSubmit = e => {
        //previne o redirecionamento padrao do submit
        e.preventDefault();

        const { username } = this.state;

        if (!username.length) return;

        //salva o uswrname no local storage
        localStorage.setItem('@GoTwitter:username', username);
        
        //redireciona para a pagina de timeline
        this.props.history.push('/timeline');
    };

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="Twitter" />
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="username"
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}
